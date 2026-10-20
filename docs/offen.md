# Offene Punkte

## Macht ihr (Tim / Malin)
- [ ] Malin: Webhosting + Domain evoque-yourself.com bei netcup buchen, AVV mit netcup
- [ ] Malin: Postfach coaching@evoque-yourself.com anlegen
- [ ] Malin: Rückmeldung zu `docs/rueckmeldung-malin.md` (Abschnitt 4 bestätigen, Hinweise 1–3)
- [ ] Malin: Wirtschafts-Identifikationsnummer nachreichen, sobald vorhanden
- [ ] Klären, wer hochlädt (Malin selbst oder wir mit Plesk-Zugang + AVV)
- [ ] Plesk-Einstellungen laut `docs/netcup-livegang.md` (SSL, HTTPS-Weiterleitung, Logs 14 Tage)

## Kann Claude machen
- [ ] Malins Antworten zur Datenschutzerklärung einbauen
- [ ] W-IdNr. ins Impressum (Abschnitt ist in `src/pages/impressum.astro` vorbereitet)
- [ ] Nach dem Upload: Live-Prüfung (curl, Weiterleitungen, Netzwerk vor Zustimmung, Formular)

## Erledigt (21.10.2026)
- [x] Umstellung Vercel → statische Seite für netcup, Passwortschutz entfernt
- [x] Impressum und Datenschutzerklärung wortgleich eingebaut
- [x] Footer: Impressum, Datenschutz, Cookie-Einstellungen, Kontaktformular
- [x] Eigenes Cookie-Banner mit Einstellungen und Protokoll
- [x] Cal.com und Instagram erst nach Zustimmung, Platzhalter mit Button
- [x] Kontaktformular (PHP, Honeypot, keine Speicherung)
- [x] E-Mail-Adressen im Quelltext verschlüsselt
- [x] Google Fonts lokal, keine externen Verbindungen vor Zustimmung
- [x] .htaccess: HTTPS, ohne www, Adressen ohne Schrägstrich, 404
