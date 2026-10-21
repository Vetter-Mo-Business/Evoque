# EVOQUE – Yourself · Website

Website von EVOQUE – Yourself (Coaching & Strategy), https://evoque-yourself.com.
Erstellt von VeMo IT & Design (Tim Vetter und Junwey Mo GbR).

## Technik

- Statische Website mit [Astro](https://astro.build), Deutsch unter `/`,
  Englisch unter `/en/`.
- Hosting: netcup-Webhosting (Apache, PHP). Kein Datenbank-Server nötig.
- Kontaktformular: `public/api/kontakt.php` (Versand per PHP `mail()` an
  das Postfach, keine Speicherung, Spamschutz per Honeypot und Mindestzeit).
- Cookie-Einwilligung: selbst gebaut (`src/lib/consent.ts`,
  `src/components/ConsentBanner.astro`), Protokoll in
  `public/api/einwilligung.php` (Zeitpunkt, Auswahl, Banner-Version; Ablage
  außerhalb des Web-Ordners, Löschung nach 12 Monaten).
- Externe Inhalte (Cal.com, Instagram) laden erst nach Einwilligung.
- Schriften lokal (Fontsource), keine Verbindungen zu fremden Servern ohne
  Einwilligung.
- Server-Regeln (HTTPS, Weiterleitungen, Caching): `public/.htaccess`.
- Sitemap: `src/pages/sitemap.xml.ts`, robots: `public/robots.txt`.

## Arbeiten am Projekt

Voraussetzung: Node.js 22 oder neuer.

```
npm ci            # Abhängigkeiten installieren
npm run dev       # Vorschau unter http://localhost:4321
npm run build     # fertige Website in dist/
```

Das PHP-Kontaktformular läuft nur auf einem Server mit PHP, nicht in
`npm run dev`.

## Veröffentlichen

- **Automatisch:** Jeder Push auf `main` baut die Website
  (`.github/workflows/live.yml`) und legt das Ergebnis in den Zweig `live`.
  Plesk holt diesen Zweig per Git-Erweiterung ab
  (`docs/automatische-aktualisierung.md`).
- **Von Hand:** `npm run build`, dann den **Inhalt** von `dist/` (inklusive
  der Datei `.htaccess`) in den Ordner `httpdocs` hochladen.

## Wichtige Stellen

| Was | Datei |
|---|---|
| Texte der Seiten | `src/pages/*.astro`, gemeinsame Texte in `src/i18n/ui.ts` |
| Impressum, Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| E-Mail-Adresse | `src/lib/contact.ts` und `public/api/kontakt.php` |
| Cal.com-Termintyp | `src/pages/kontakt.astro` (`CAL_LINK`) |
| Neuer externer Dienst | in `src/lib/consent.ts` die `CONSENT_VERSION` erhöhen (Banner erscheint neu) und die Datenschutzerklärung anpassen |
