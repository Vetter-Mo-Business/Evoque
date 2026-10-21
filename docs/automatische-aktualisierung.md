# Automatische Aktualisierung: GitHub → netcup

Ziel: Wir ändern etwas im GitHub-Projekt, Malins Website bei netcup
aktualisiert sich von selbst. **Niemand bekommt Zugang zum Konto des
anderen.** Das Repo bleibt privat in unserer Organisation.

## So funktioniert es

1. Wir ändern etwas und laden es auf `main` hoch (Push).
2. GitHub baut die Website automatisch (`.github/workflows/live.yml`) und
   legt die fertigen Dateien in den Zweig **`live`**.
3. GitHub meldet netcup per **Webhook**: „Es gibt etwas Neues.“
4. Plesk holt sich den Zweig `live` mit einem **Nur-Lese-Schlüssel** und
   legt ihn in Malins Website-Ordner `httpdocs`.

Dauer: etwa 2 Minuten nach dem Push.

## Was liegt wo, wer hat Zugriff

| Was | Wo | Zugriff |
|---|---|---|
| Quellcode | GitHub, Organisation Vetter-Mo-Business, **privat** | nur wir |
| Nur-Lese-Schlüssel | von Plesk erzeugt, bei uns als „Deploy key“ hinterlegt | netcup darf **nur lesen**, nur dieses eine Repo |
| Website, Postfach, Protokolle | Malins netcup-Konto | nur Malin |

Kein AVV nötig: Wir kommen an keine Daten aus ihrem Konto, netcup holt nur
unsere Dateien ab.

---

## Teil A: Prüfen, ob es geht (direkt nach Malins Buchung)

Malin öffnet Plesk → **Websites & Domains** → bei evoque-yourself.com nach
dem Punkt **„Git“** schauen.

- **Gibt es „Git“:** weiter mit Teil B.
- **Gibt es „Git“ nicht:** netcup-Support fragen, ob die Git-Erweiterung
  für ihr Paket verfügbar ist. Sonst Ersatzweg: Malin lädt die ZIP-Datei
  selbst hoch (Anleitung Kapitel 7), wir schicken bei Änderungen eine neue.

## Teil B: GitHub vorbereiten (wir, einmalig)

1. Die Automatik `.github/workflows/live.yml` liegt im Repo. Nach dem
   ersten Push auf `main`: GitHub → Repo **Evoque** → Reiter **Actions** →
   der Lauf „Website bauen (live)“ muss grün sein.
2. GitHub → Repo → Zweig-Auswahl (oben links „main“) → **live** wählen.
   Darin müssen `index.html`, die Ordner der Seiten und die Datei
   **`.htaccess`** liegen.
3. Falls der Lauf rot ist mit einem Rechte-Fehler: Organisation
   **Vetter-Mo-Business** → **Settings** → **Actions** → **General** →
   „Workflow permissions“ → **Read and write permissions** → Save.
   Danach im Reiter Actions den Lauf neu starten („Re-run jobs“).

## Teil C: Verbinden (gemeinsam mit Malin, per Bildschirm-Teilen)

Malin klickt in Plesk, wir in GitHub. Sie gibt kein Passwort weiter.

1. **Malin, Plesk:** Websites & Domains → **Dateien** → `httpdocs` öffnen →
   alles darin löschen (Plesk löscht alte Dateien sonst nicht).
2. **Malin, Plesk:** Websites & Domains → **Git** → **Repository
   hinzufügen** (oder ähnlich).
   - Art: **Remote-Repository** (z. B. GitHub)
   - Repository-URL (SSH-Schreibweise):
     `git@github.com:Vetter-Mo-Business/Evoque.git`
3. **Malin, Plesk:** Plesk zeigt jetzt einen **öffentlichen SSH-Schlüssel**
   (beginnt mit `ssh-rsa` oder `ssh-ed25519`). Kopieren und uns schicken.
   Der öffentliche Schlüssel ist unbedenklich, er ist kein Passwort.
4. **Wir, GitHub:** Repo **Evoque** → **Settings** → **Deploy keys** →
   **Add deploy key**
   - Title: `netcup Malin Langer`
   - Key: den Schlüssel einfügen
   - **„Allow write access“ NICHT ankreuzen** (nur lesen)
   - **Add key**
5. **Malin, Plesk:** zurück zum Repository-Fenster und einstellen:
   - Zweig (Branch): **`live`**
   - Bereitstellung: **automatisch**
   - Zielordner: **`httpdocs`**
   - Bestätigen. Plesk holt die Website jetzt zum ersten Mal.
6. **Malin, Plesk:** In den Einstellungen des Repositorys steht eine
   **Webhook-URL**. Kopieren und uns schicken.
7. **Wir, GitHub:** Repo → **Settings** → **Webhooks** → **Add webhook**
   - Payload URL: die Webhook-URL aus Plesk
   - Content type: `application/json`
   - Which events: **Just the push event**
   - **Add webhook**. Daneben erscheint nach dem ersten Aufruf ein grüner Haken.
8. **Prüfen:** https://evoque-yourself.com öffnen → Website ist da. Danach
   unsere Live-Prüfung (https, Weiterleitungen, Banner, Formular-Testmail).

## Später: eine Änderung veröffentlichen

1. Änderung machen, auf `main` hochladen (Push).
2. GitHub → **Actions**: Lauf wird grün (ca. 1–2 Minuten).
3. Website neu laden, die Änderung ist sichtbar.

Klappt etwas nicht:
- **Actions rot:** Fehlermeldung im Lauf ansehen (meist ein Baufehler im Code).
- **Actions grün, Website alt:** GitHub → Settings → Webhooks → den Webhook
  öffnen → „Recent Deliveries“: ein roter Eintrag heißt, netcup war nicht
  erreichbar. Malin kann in Plesk bei Git auch auf **„Abrufen“ / „Bereitstellen“**
  klicken.

## Verbindung beenden

- Malin: in Plesk das Repository entfernen.
- Wir: GitHub → Settings → Deploy keys → Schlüssel löschen, und den Webhook löschen.

Quellen: Plesk-Handbuch „Using remote Git hosting“
(https://manual.netbuild.net/client/en/75848.htm), Plesk-Blog
(https://www.plesk.com/blog/various/using-remote-git-hosting-with-plesk/).
Ob netcup die Git-Erweiterung im Webhosting anbietet, ist **nicht** bestätigt
(Teil A).
