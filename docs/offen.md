# Offene Punkte

Die Website ist fertig. Offen ist nur, was nach der Übergabe passiert.
Übergeben am 21.10.2026 (Protokoll unterschrieben). Unterlagen:
`Website-v3/intern/kunden/2026-001-evoque-yourself/uebergabe/`.

## Nach der Übergabe (Malin, laut Übergabe-Unterlage)
- [ ] netcup: Webhosting (Nürnberg) und Domain evoque-yourself.com buchen, AVV abschließen
- [ ] Postfach coaching@evoque-yourself.com anlegen
- [ ] Website hochladen, SSL und HTTPS-Weiterleitung, Server-Logs 14 Tage (Anleitung Kapitel 3–7)
- [ ] Wirtschafts-Identifikationsnummer schicken, sobald vorhanden → wir tragen sie ins Impressum ein
- [ ] Empfehlung an Malin: Kontaktformular in Abschnitt 7 der Datenschutzerklärung erwähnen

## Wir
- Kostenloser Support bis einschließlich 18.11.2026 (4 Wochen ab Übergabe), danach 12,50 € je angefangene 15 Minuten mit Schätzung vorab
- Malin bucht netcup erst noch und lädt selbst hoch; sie meldet sich nach dem Upload für die Live-Prüfung
- [x] `website-zum-hochladen.zip` und `quellcode.zip` erstellt und geprüft (`Website-v3/intern/kunden/2026-001-evoque-yourself/uebergabe/`)
- [x] Übergabe-Mail an Malin verschickt (21.10.2026): PDFs als Anhang, ZIPs und Logo-Paket im Google-Drive-Ordner (Gmail blockiert ZIPs mit .js-Dateien)
- [ ] Drive-Ordner schließen, sobald Malin alles heruntergeladen hat
- [ ] Nach ihrem Upload: Live-Prüfung (https, Weiterleitungen, keine fremden Verbindungen vor Zustimmung, Formular-Testmail)
- [x] Automatik GitHub → Zweig `live` läuft (`.github/workflows/live.yml`)
- [ ] Wenn Malin Schlüssel und Webhook-URL schickt: Deploy key (ohne Schreibrecht) und Webhook eintragen (`docs/automatische-aktualisierung.md`, Teil C)
- [ ] Vercel-Projekt löschen (Verbindung zu GitHub ist getrennt)

## Technik-Notizen
- Statische Seite (Astro, `npm run build` → `dist/`), Kontaktformular und
  Einwilligungs-Protokoll als PHP in `public/api/`, Server-Regeln in `public/.htaccess`.
- Einwilligungs-Protokoll speichert nur Zeitpunkt, Auswahl, Banner-Version
  (wie Datenschutzerklärung Abschnitt 4), Löschung nach 12 Monaten.
