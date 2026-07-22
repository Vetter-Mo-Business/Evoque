import { defineMiddleware } from 'astro:middleware';
import { localizePath } from './i18n/ui';

// Name des Cookies, in dem der Zugang gemerkt wird.
const COOKIE = 'evoque_gate';

// Cookie, in dem die gewählte Sprache dauerhaft gemerkt wird. Wird im Header
// beim Klick auf eine Sprachoption gesetzt.
const LANG_COOKIE = 'evoque_lang';

// Feste Sprachwahl: Ist eine Sprache im Cookie gemerkt und der aktuelle Pfad
// gehört nicht zu dieser Sprache, wird auf denselben Inhalt in der gewählten
// Sprache umgeleitet (/... <-> /en/...). Dadurch bleibt Englisch beim
// Seitenwechsel erhalten, bis wieder auf Deutsch gewechselt wird.
function stickyLangTarget(pathname: string, pref: string | undefined): string | null {
  if (pref !== 'de' && pref !== 'en') return null;
  // Nur echte Seiten umleiten, keine Assets/Dateien.
  if (
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/_image') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/api/') ||
    pathname === '/login' ||
    pathname.includes('.')
  ) {
    return null;
  }
  const target = localizePath(pathname, pref);
  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  return norm(pathname) === norm(target) ? null : target;
}

// Pfade, die immer erreichbar sein müssen (Login selbst + statische Assets),
// sonst käme man nie zur Login-Seite bzw. das Styling fehlte.
function isPublicPath(pathname: string): boolean {
  return (
    pathname === '/login' ||
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/_image') ||
    pathname.startsWith('/images/') ||
    pathname === '/favicon.png' ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt'
  );
}

export const onRequest = defineMiddleware(async (context, next) => {
  // Zur Laufzeit lesen (process.env) – so greifen auf Vercel gesetzte
  // Variablen zuverlässig. import.meta.env als Fallback für lokales `astro dev`.
  const password = (
    process.env.SITE_PASSWORD ??
    import.meta.env.SITE_PASSWORD ??
    ''
  ).trim();

  const { pathname } = context.url;

  // Sprach-Stickiness anwenden, bevor die Seite ausgeliefert wird.
  // WICHTIG: Bei i18n-Fallback (fallbackType 'rewrite') schreibt Astro z. B.
  // /en/coaching intern auf /coaching um und ruft die Middleware ein zweites
  // Mal auf. Nur der ERSTE (äußere) Durchlauf darf umleiten – sonst würde der
  // umgeschriebene Pfad /coaching bei gemerkter Sprache "en" wieder auf
  // /en/coaching zeigen und eine Endlosschleife auslösen. context.locals bleibt
  // über den Rewrite hinweg erhalten und dient als Marker.
  const langPref = context.cookies.get(LANG_COOKIE)?.value;
  const isRewritePass = (context.locals as any).__stickyChecked === true;
  (context.locals as any).__stickyChecked = true;
  const proceed = () => {
    if (!isRewritePass) {
      const langTarget = stickyLangTarget(pathname, langPref);
      if (langTarget) return context.redirect(langTarget + context.url.search);
    }
    return next();
  };

  // Kein Passwort gesetzt -> Gate ist aus (praktisch für lokale Entwicklung,
  // wenn keine .env vorhanden ist). Auf Vercel SITE_PASSWORD setzen!
  if (!password) return proceed();

  if (isPublicPath(pathname)) return next();

  const authed = context.cookies.get(COOKIE)?.value === password;
  if (authed) return proceed();

  // Nicht eingeloggt -> zur Login-Seite (mit Rücksprungziel).
  const target = encodeURIComponent(pathname + context.url.search);
  return context.redirect(`/login?next=${target}`);
});
