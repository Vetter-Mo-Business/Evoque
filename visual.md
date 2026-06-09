# visual.md – Design-Quelle „Evoque – Yourself"

> Diese Datei ist die **alleinige Quelle** für alle visuellen Entscheidungen. Sie hat Vorrang vor jeder Skill-Empfehlung.

## 1. Golden Ratio (Faktor 1.618)

Abstände, Layout-Aufteilung und Schriftgrößen werden über den Faktor **1.618**
abgeleitet, damit ein konsistentes, harmonisches System entsteht.

### Spacing Scale
Jeder Wert ist der vorige × 1.618:

| Stufe   | Wert (px) |
|---------|-----------|
| base    | 8         |
| small   | 13        |
| medium  | 21        |
| large   | 34        |
| x-large | 55        |

Nur diese Werte für Abstände (margin, padding, gap) verwenden – keine willkürlichen.

### Layout Proportions
Layouts im Goldenen Schnitt teilen, nicht 50/50 oder 70/30:
- Content / Hauptbereich: **61.8 %**
- Actions / Seitenleiste: **38.2 %**

### Type Scale
Jede Schriftstufe ist die vorige × 1.618:

| Rolle      | Größe (px) |
|------------|------------|
| Body       | 16         |
| Subheading | 26         |
| Heading    | 42         |
| Display    | 68         |

---

## 2. Notifications / Toasts

### Position
- Desktop: **unten rechts** (bottom-right)
- Mobile: **oben** (top)
- **Nie zentriert** – blockiert den Inhalt, User kann nicht durchklicken.
- Grundregel: nie das blockieren, womit der User gerade arbeitet.

### Timing
Dauer nach Wichtigkeit:

| Typ               | Dauer                  |
|-------------------|------------------------|
| Info              | 4 s · auto-dismiss     |
| Warnung           | 7 s · hält länger      |
| Kritisch / Fehler | ∞ · until acknowledged |

Je kritischer, desto länger sichtbar. Fehler verschwinden nie von selbst.

### Stacking
- Max. **3 sichtbar** gleichzeitig.
- Spring-Animation: **Damping 20**, **Stiffness 180**.

### Dismissible
- Close-Button (Klick): immer einen Ausweg anbieten.
- Swipe to dismiss: auf Mobile per Wischgeste.
- Hover to pause: Timer friert ein, solange die Maus drauf ist.

---

## 3. Loading States

### Skeleton
- Form zuerst: setzt die richtige Erwartung, gefühlte Geschwindigkeit schlägt echte.
- Einsetzen, wenn das Layout vorhersehbar ist (known shape).
- Verwenden bei Ladezeiten **> 300 ms**.
- Animation läuft **von links nach rechts**, damit kein Warte-Gefühl entsteht.

### Spinner
- Immer mit Kontext (z. B. Button „Saving…"), nie nackt ohne Beschreibung.
- Einsetzen bei unbekannter Dauer und **< 3 s**.

### Optimistic UI
- Ergebnis sofort anzeigen (0 ms bei Klick), Sync läuft im Hintergrund.
- Instant feedback geben.
- Bei serverseitigem Fehler: Rollback (Zustand zurücksetzen).

---

## 4. UI-Details

### Border Radius (verschachtelte Rundungen)
- Regel: `inner = outer − padding`
- Beispiel: outer 32px, padding 14px → inner 18px.
- **Pflicht – aber nur, wenn ein abgerundetes Design gewählt wird.**
  Bei bewusst eckigem/kantigem Design entfällt diese Regel.

### Dark Mode Weight
- Im Dark Mode Schriftstärke eine Stufe zurücknehmen.
- Formel: `dark_mode: weight − 100` (z. B. Light 600 → Dark 500).

### Text Centering (optisch)
- CSS zentriert die Line-Box, das Auge zentriert die Cap-Height.
- Korrektur für optische Mitte (z. B. in Buttons): `padding-top: +2px`.


## Marke
- **Name:** EVOQUE – Yourself // Coaching & Strategy
- **Tagline:** Coach & Strategieberaterin für nachhaltige Zielerreichung
- **Anmutung:** ruhig, klar, warm, hochwertig; viel Weißraum; natürlich/organisch.

## Farbpalette

### Kernfarben
| Name | Hex | Rolle / Verwendung |
|---|---|---|
| **Forest Deep** | `#152C1A` | Dunkelste Farbe. Fließtext, Überschriften, Footer-Hintergrund, hoher Kontrast, primäre Buttons (mit hellem Text). |
| **Sage Harmony** | `#ACBFAF` | Primäres Markengrün. Akzentflächen, Marken-Blöcke, Icon-Hintergrund (Blatt-Icon), sekundäre Buttons (mit dunklem Text). |
| **Soft Sand** | `#E1D2CB` | Heller, warmer Hintergrund. Sektions- und Kartenflächen, sanfte Trennungen. *(Hex aus dem Brand Template nicht eindeutig lesbar – bitte bestätigen.)* |
| **Calm Earth** | `#857C75` | Gedämpftes Neutral. Sekundärtext, Captions, Rahmen, „… € / Sitzung"-Zeilen. **Nicht** für Fließtext auf Weiß (Kontrast zu gering). |

### Optionaler Sekundär-Akzent
| Name | Hex | Rolle / Verwendung |
|---|---|---|
| **Olive Sage** | `#ABAF8D` | Sehr nah an Sage Harmony. Nur sparsam als Sekundär-/Hover-/Aktiv-Akzent. Kann auch weggelassen werden. |

### Basis-Hintergrund
- Seitenhintergrund: sehr helles, warmes Off-White (abgeleitet aus Soft Sand, z. B. `#F7F5F1`). Markiert als abgeleiteter Ton, nicht aus der Originalpalette.

### Anwendungsregeln
- Text/Überschriften: **Forest Deep** auf hellem Grund.
- Helle Texte (auf Forest Deep oder Sage): Off-White / Soft Sand.
- Primäre Aktion (Buttons „Buchung", „Jetzt sichern"): **Forest Deep** Hintergrund, heller Text.
- „Pilotphase"-Badge: warmer Akzent, abgesetzt von der grünen Palette (Orange wie im Entwurf), sparsam eingesetzt.
- Kontrast: Body-Text muss WCAG AA erfüllen → daher Forest Deep statt Calm Earth für Fließtext.

## Typografie
- **Überschriften:** Playfair Display (Serif). Fallback: Georgia, „Times New Roman", serif.
- **Alles andere (Fließtext, UI, Buttons, Navigation):** Futura. Fallback-Stack: „Futura", Jost, „Century Gothic", „Avenir Next", sans-serif.
- **Hinweis:** Futura ist keine freie Webschrift. Liegt keine Lizenz vor, **Jost** (Google Fonts) als nächsten freien Ersatz verwenden. Playfair Display ist über Google Fonts frei verfügbar.
- Klare Größen-Hierarchie; großzügige Zeilenhöhe; Überschriften dürfen ruhig groß und luftig stehen.

## Logo
- **Speicherort:** `Images/Logos/` (Dateien: `0_logo.png`, `Title_SM_EVOQUE.png` sowie die UUID-benannte Datei).
- **Varianten (aus dem Brand Template):**
  - Wortmarke „EVOQUE" (Serif) mit Tagline „Coach & Strategieberaterin für nachhaltige Zielerreichung".
  - Blatt-Icon in abgerundetem Quadrat, Sage-Hintergrund mit weißem Icon (gut als Favicon / kompaktes Branding).
  - Helle Wortmarke (weiß) auf Sage/Forest für dunkle Flächen.
- **Verwendung:**
  - Dunkle Wortmarke auf hellem Grund; weiße Wortmarke auf grünen/dunklen Flächen.
  - Im Footer die helle Wortmarke „EVOQUE" auf dunklem Grund.
  - Icon für Favicon und Header-Kompaktansicht.
  - Ausreichend Schutzraum um das Logo lassen; nicht verzerren, nicht einfärben.
- **Umsetzung:** Die konkreten Dateien aus `Images/Logos/` einbinden (passende Variante je nach Hintergrund wählen).
