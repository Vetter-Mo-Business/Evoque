// Einwilligungs-Verwaltung (selbst gebaut, läuft komplett auf dem eigenen
// Server – kein externer Consent-Anbieter).
//
// - Die Auswahl liegt im Cookie "evoque_consent" (12 Monate gültig).
// - Ändert sich CONSENT_VERSION, gilt eine alte Auswahl nicht mehr und das
//   Banner erscheint erneut (z. B. wenn ein neuer externer Dienst dazukommt).
// - Jede Entscheidung wird an /api/einwilligung.php gemeldet und dort als
//   Nachweis protokolliert: Zeitpunkt, Auswahl, Banner-Version und eine
//   zufällige ID. Keine IP-Adresse, kein Browser-Fingerabdruck.

export const CONSENT_VERSION = '2026-10-21';

const COOKIE = 'evoque_consent';
const MAX_AGE = 60 * 60 * 24 * 365; // 12 Monate
const LOG_URL = '/api/einwilligung.php';

export type Service = 'cal' | 'instagram';

export interface Consent {
  v: string;
  id: string;
  ts: number;
  cal: boolean;
  instagram: boolean;
}

/** Woher eine Entscheidung kam (landet mit im Protokoll). */
export type ConsentSource =
  | 'banner-alle'
  | 'banner-notwendig'
  | 'einstellungen'
  | 'platzhalter-cal'
  | 'platzhalter-instagram';

const CHANGE_EVENT = 'evoque:consent';
const OPEN_EVENT = 'evoque:consent-open';

export function readConsent(): Consent | null {
  const raw = document.cookie
    .split('; ')
    .find((c) => c.startsWith(COOKIE + '='))
    ?.slice(COOKIE.length + 1);
  if (!raw) return null;
  try {
    const c = JSON.parse(decodeURIComponent(raw)) as Partial<Consent>;
    if (c.v !== CONSENT_VERSION || typeof c.id !== 'string') return null;
    return {
      v: c.v,
      id: c.id,
      ts: Number(c.ts) || 0,
      cal: c.cal === true,
      instagram: c.instagram === true,
    };
  } catch {
    return null;
  }
}

export function hasConsent(service: Service): boolean {
  return readConsent()?.[service] === true;
}

function randomId(): string {
  if (crypto.randomUUID) return crypto.randomUUID();
  const b = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
}

export function saveConsent(
  choice: { cal: boolean; instagram: boolean },
  source: ConsentSource,
): Consent {
  const previous = readConsent();
  const consent: Consent = {
    v: CONSENT_VERSION,
    // ID bleibt bei Änderungen gleich, damit sich der Verlauf einer
    // Einwilligung im Protokoll nachvollziehen lässt.
    id: previous?.id ?? randomId(),
    ts: Date.now(),
    cal: choice.cal,
    instagram: choice.instagram,
  };
  const secure = location.protocol === 'https:' ? '; secure' : '';
  document.cookie =
    `${COOKIE}=${encodeURIComponent(JSON.stringify(consent))}` +
    `; path=/; max-age=${MAX_AGE}; samesite=lax${secure}`;

  logConsent(consent, source);
  window.dispatchEvent(
    new CustomEvent<{ consent: Consent; previous: Consent | null }>(CHANGE_EVENT, {
      detail: { consent, previous },
    }),
  );
  return consent;
}

function logConsent(consent: Consent, source: ConsentSource) {
  try {
    fetch(LOG_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: consent.id,
        version: consent.v,
        cal: consent.cal,
        instagram: consent.instagram,
        source,
      }),
      keepalive: true,
      credentials: 'omit',
    }).catch(() => {});
  } catch {
    // Protokollierung darf die Seite nie stören.
  }
}

/** Ruft `cb` bei jeder neuen Entscheidung auf. */
export function onConsentChange(
  cb: (consent: Consent, previous: Consent | null) => void,
) {
  window.addEventListener(CHANGE_EVENT, (e) => {
    const { consent, previous } = (e as CustomEvent).detail;
    cb(consent, previous);
  });
}

/** Öffnet die Einstellungen des Banners (Footer-Link „Cookie-Einstellungen“). */
export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenSettings(cb: () => void) {
  window.addEventListener(OPEN_EVENT, cb);
}

/**
 * Wurde eine bereits erteilte Einwilligung zurückgenommen, ist der externe
 * Inhalt schon geladen und lässt sich nicht sauber „entladen“. Dann die
 * Seite neu laden, damit keine Verbindung zum Anbieter mehr besteht.
 * Geladene Einbettungen tragen dafür data-consent-loaded="<dienst>".
 */
export function reloadIfRevoked(consent: Consent) {
  const loaded = (s: Service) =>
    document.querySelector(`[data-consent-loaded="${s}"]`) !== null;
  if ((loaded('cal') && !consent.cal) || (loaded('instagram') && !consent.instagram)) {
    location.reload();
  }
}
