# Rückmeldung an Malin – Impressum, Datenschutz, Technik

Stand: 21. Oktober 2026

## Antworten auf Ihre Fragen (Punkt 6 der Aufgabenliste)

**Welches System nutzt die Website?**
Kein WordPress und kein Joomla. Die Website ist selbst programmiert
(mit dem Werkzeug „Astro“) und besteht aus fertigen HTML-Dateien. Es gibt
kein Baukasten-System und keine Datenbank. Auf dem netcup-Server laufen
nur zwei kleine PHP-Skripte: das Kontaktformular und das Protokoll der
Cookie-Einwilligungen.

**Consent-Tool: Name, Speicherdauer, Protokoll?**
- Ein selbst programmiertes Einwilligungs-Tool, das komplett auf Ihrem
  netcup-Server läuft. Kein externer Anbieter.
- Ihre Auswahl wird **12 Monate** in einem Cookie namens `evoque_consent`
  gespeichert.
- **Ja, es protokolliert.** Gespeichert werden: Zeitpunkt, Auswahl
  (Cal.com ja/nein, Instagram ja/nein), Banner-Version und eine zufällig
  erzeugte Kennung (dieselbe wie im Cookie des Besuchers). **Keine
  IP-Adresse**, keine Browserdaten.
- Das Protokoll liegt außerhalb des öffentlichen Web-Ordners und wird nach
  12 Monaten automatisch gelöscht.

**Wie ist der Instagram-Feed eingebunden?**
Mit Metas eigenem Einbettungscode (iFrame von instagram.com). Kein Plugin,
kein externer Widget-Dienst. Er lädt erst nach Zustimmung.

**Welches Plugin nutzt das Kontaktformular, werden Nachrichten gespeichert?**
Kein Plugin, sondern ein eigenes PHP-Skript auf Ihrem netcup-Server. Es
schickt die Nachricht per E-Mail an coaching@evoque-yourself.com und
**speichert nichts** (keine Datenbank, keine Datei). Spamschutz nur lokal
(verstecktes Feld + Mindest-Ausfüllzeit), kein reCAPTCHA.

**Adressen der fertigen Seiten**
- Impressum: https://evoque-yourself.com/impressum
- Datenschutzerklärung: https://evoque-yourself.com/datenschutz
- Kontaktformular: https://evoque-yourself.com/kontakt#kontaktformular

## Ergebnis der technischen Prüfungen (Punkt 5)

- **Google Fonts:** waren eingebunden, sind jetzt **lokal** auf Ihrem Server.
  Der frühere Abschnitt „Google Fonts“ ist nicht mehr nötig (steht in Ihrer
  neuen Erklärung auch nicht).
- **Externe Skripte, Icon-Bibliotheken, Videos, Karten:** keine. Das Video
  auf der Startseite liegt auf Ihrem Server.
- **Vor der Zustimmung** baut die Website nachweislich nur Verbindungen zu
  ihrem eigenen Server auf (im Browser geprüft, alle Seiten).
- **Tracking / Besucherstatistik:** keine.
- **HTTPS:** ist eingerichtet, HTTP leitet auf HTTPS weiter (wird nach dem
  Upload auf netcup noch einmal live geprüft).

## So haben wir Ihre Platzhalter gefüllt – bitte kurz bestätigen

**Datenschutzerklärung, Abschnitt 4** – steht jetzt so auf der Website:

> Zur Verwaltung Ihrer Einwilligung nutze ich ein selbst programmiertes
> Einwilligungs-Tool, das vollständig auf meinem Webserver bei netcup
> läuft; ein externer Anbieter ist nicht beteiligt. Es speichert Ihre
> Auswahl für 12 Monate in einem Cookie auf Ihrem Gerät. Zum Nachweis Ihrer
> Einwilligung wird Ihre Entscheidung (Zeitpunkt, Auswahl und Version des
> Banners) protokolliert. Rechtsgrundlage hierfür ist …

**Impressum:** „Online-Kontakt: Für eine schnelle Kontaktaufnahme nutzen Sie
bitte mein Kontaktformular: evoque-yourself.com/kontakt#kontaktformular“.
Den Abschnitt Wirtschafts-Identifikationsnummer haben wir weggelassen, bis
Sie die Nummer haben – dann tragen wir sie nach.

Alles andere steht **wortgleich** wie in Ihren Dokumenten auf der Website.

## Was uns beim Einbauen aufgefallen ist (Ihre Entscheidung)

1. **Abschnitt 4 – Kennung im Protokoll:** Das Protokoll speichert
   zusätzlich eine zufällige Kennung. Möchten Sie die Klammer ergänzen, etwa
   „(Zeitpunkt, Auswahl, Version des Banners und eine zufällige Kennung,
   keine IP-Adresse)“? Auch die **Löschfrist von 12 Monaten** für das
   Protokoll steht noch nicht im Text.
2. **Abschnitt 7 nennt Telefon, aber nicht das Kontaktformular.** Eine
   Telefonnummer steht nirgends auf der Website; das neue Kontaktformular
   ist in der Erklärung nicht erwähnt.
3. **Abschnitt 10, kleiner Tippfehler:** „Für mich zuständig ist
   Landesbeauftragte …“ – vermutlich fehlt „die“. Wir haben nichts geändert.
4. **Server-Logfiles 14 Tage (Abschnitt 3):** Das muss in netcup
   (Plesk) so eingestellt werden – steht in der Anleitung zum Livegang.
5. **Englische Seiten:** Impressum und Datenschutzerklärung erscheinen dort
   auf Deutsch, mit dem Hinweis „only available in German“. Den englischen
   Banner- und Platzhaltertext haben wir übersetzt.
6. **Anrede:** Die Rechtstexte, das Banner und die Formular-Hinweise siezen;
   die übrigen Seiten duzen (wie bisher).
7. **E-Mail-Adresse:** Überall auf der Website steht jetzt
   coaching@evoque-yourself.com (vorher die Gmail-Adresse). Die Domain
   evoque-yourself.com ist im Moment **noch nicht registriert** – erst wenn
   Domain und Postfach bei netcup angelegt sind, kommen Mails und
   Formular-Nachrichten an.
