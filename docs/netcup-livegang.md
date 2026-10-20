# Livegang auf netcup – Schritt für Schritt

Die Website ist ein Ordner mit fertigen Dateien (`dist/`). Er wird auf das
netcup-Webhosting hochgeladen. Die Verwaltung bei netcup heißt **Plesk**
(erreichbar über das netcup Customer Control Panel → Produkte →
Webhosting → „Login in Plesk“).

Wer was macht: Malin bucht und besitzt Hosting, Domain und Postfach. Wir
arbeiten in ihrem Plesk nur mit unterschriebenem AVV.

## 1. Bei netcup buchen (Malin)
1. Webhosting-Paket mit Serverstandort **Nürnberg** bestellen.
2. Domain **evoque-yourself.com** dazu bestellen (oder im Paket enthalten).
3. AVV mit netcup abschließen: im Customer Control Panel nach
   „Auftragsverarbeitung“ / „AVV“ suchen (netcup bietet ihn dort online an).

## 2. Postfach anlegen
Plesk → **E-Mail** → „E-Mail-Adresse erstellen“ →
`coaching@evoque-yourself.com`, sicheres Passwort.
Wichtig: Das Kontaktformular verschickt als Absender genau diese Adresse.

## 3. HTTPS
1. Plesk → Websites & Domains → **SSL/TLS-Zertifikate** → „Let's Encrypt“
   → für `evoque-yourself.com` **und** `www.evoque-yourself.com` holen.
2. Plesk → Websites & Domains → **Hosting-Einstellungen** → Häkchen bei
   „Permanente, für SEO geeignete 301-Weiterleitung von HTTP zu HTTPS“.
3. Bei **PHP-Version** 8.2 oder neuer wählen.

## 4. Server-Logs nach 14 Tagen löschen (steht so in der Datenschutzerklärung)
Plesk → Websites & Domains → **Logs** → „Log-Rotation“ (Zahnrad) →
Rotation **täglich**, maximale Anzahl Log-Dateien **14**, Speichern.

## 5. Website hochladen
1. Auf dem Rechner: im Projektordner `npm run build` (erzeugt `dist/`).
2. Plesk → **Dateien** → Ordner `httpdocs` öffnen, die Standard-Datei
   `index.html` von netcup löschen.
3. Den **Inhalt** von `dist/` (nicht den Ordner selbst) hochladen – als
   ZIP hochladen und in Plesk „Entpacken“ ist am schnellsten.
   Die versteckte Datei `.htaccess` muss mit hoch.

## 6. Nach dem Upload prüfen
- `http://evoque-yourself.com` → leitet auf `https://` weiter
- `https://www.evoque-yourself.com` → leitet auf ohne www weiter
- `/kontakt` lädt, `/kontakt/` leitet auf `/kontakt` weiter
- `/gibtsnicht` zeigt die 404-Seite
- Banner erscheint, im Netzwerk-Tab (F12) vor Zustimmung nur
  evoque-yourself.com
- Kontaktformular abschicken → Mail kommt in coaching@… an,
  „Antworten“ geht an den Absender
- `/api/einwilligung.php` im Browser → „405“ (richtig so)
- Nach einer Zustimmung liegt eine Datei in `einwilligungen/` (eine Ebene
  **über** `httpdocs`, in Plesk unter Dateien sichtbar)

## Spätere Änderungen
Texte in `src/` ändern → `npm run build` → geänderten `dist/`-Inhalt
erneut hochladen. Kommt ein neuer externer Dienst dazu: in
`src/lib/consent.ts` die `CONSENT_VERSION` erhöhen (Banner erscheint dann
bei allen neu) und die Datenschutzerklärung anpassen lassen.
