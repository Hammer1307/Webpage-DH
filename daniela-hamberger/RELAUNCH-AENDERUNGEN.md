# Relaunch — umgesetzte Änderungen

Stand: 5. Juni 2026. Umgesetzt gemäß der Umsetzungsunterlage.
Der Build wurde erfolgreich getestet (`npm run build` → 25 Seiten, keine Fehler/Warnungen).

## Neue Bilder (in `public/images/`)
- `daniela-imagefoto.jpg` — neues Imagefoto (Über mich)
- `klarheitsreset-innehalten.jpg` — Stimmungsbild Fokus KlarheitsReset
- `impuls-happiness.jpg` — Bild zum Impuls „Hoffnung, Happiness …"
- `stimmung-wohnraum.jpg`, `stimmung-sessel.jpg` — Stimmungsbilder 1:1-Seite
- `seminarraum-schoene-aussichten.jpg` — realer Seminarraum (1:1-Seite)

## Startseite (`src/pages/index.astro`)
- Neue Headline „Es darf wieder klarer werden." mit erklärendem Untertitel
- Zwei-Wege-Gabelung „Für dich persönlich" / „Für euer Team"
- USP-Block „Warum mit mir arbeiten" (4 Karten)
- Methodenliste durch Klartext-Absatz ersetzt
- Testimonial-Karussell (8 Stimmen, automatisch laufend, pausiert bei Hover, Pfeile + Punkte)
- Publikationen-Hinweis „Bei Erscheinen informieren lassen" → „In Vorbereitung"

## 1:1 Begleitung (`src/pages/1-zu-1-begleitung.astro`)
- Einzelbild im Abschnitt „Ein Ort, an dem du nicht funktionieren musst" durch
  drei Stimmungsbilder ersetzt (Collage), unten der reale Seminarraum

## Fokus KlarheitsReset (`src/pages/klarheitsreset.astro`)
- Stimmungsbild „Raum zum Innehalten und Ankommen" eingefügt

## Impulse / Blog
- `src/data/site.ts`: `IMPULSE_BEITRAEGE` komplett überarbeitet — jeder Beitrag mit
  Langversion (`body`), dadurch eigene, bei Google auffindbare URL `/impulse/{id}`
- Neuer Beitrag „Generationen verbinden statt vergleichen" (ersetzt die beiden alten
  Generationen-/Wertschätzungs-Beiträge)
- Zwei neue Beiträge: „Hoffnung, Happiness und die Kraft positiver Gedanken" (mit Bild)
  und „Resilienz bedeutet nicht, alles auszuhalten"
- `src/pages/impulse/[slug].astro`: optionales Beitragsbild ergänzt
- `src/pages/impulse.astro`: „können" → „werden"

## Über mich (`src/pages/ueber-mich.astro`)
- Portrait neben dem Namen durch neues Imagefoto ersetzt

## Social Media (`src/data/site.ts`)
- Instagram auf `@danielabrittahamberger` umgestellt

## Bildnachweise (`src/pages/bildnachweise.astro`)
- Neue Bilder ergänzt (Pexels: Elena Kravets, Pixabay; Unsplash: oko-rs, D Jonez)

## Noch zu prüfen
- Exakte Urhebernamen der Stock-Bilder auf den Plattformen gegenprüfen
- Imagefoto „Über mich": bestätigen, dass es authentisch ist und freigegeben
- Einverständnisse für namentliche Testimonials dokumentiert aufbewahren

---

# Zweite Runde — weitere Änderungen (6. Juni 2026)

Build erneut erfolgreich getestet (25 Seiten, keine Fehler).

## Startseite
- Doppelung entfernt: Zwei-Wege-Gabelung direkt unter dem Hero gestrichen; der „Drei Wege"-Block bleibt. Team-Karte umbenannt zu „Workshops, Vorträge & Mentoring".
- Reihenfolge umgestellt: Mein Begleitansatz → Warum mit mir arbeiten → Stimmen & Erfahrungen.
- Pfeil-Textlinks zu zentrierten Buttons gemacht (.btn-center).
- Motto „Fokus Schöner Leben" inhaltlich verankert (beide Bedeutungen).
- Startseiten-Description um „Coaching" und Orte erweitert.

## Gestaltung (reversibel gekapselt)
- Neue CSS-Klassen: .gold-akzent (goldene Schlüsselwörter), .zier-ornament (Ornament), .btn-center.
- Goldene Akzentwörter z. B. „echt", „stimmig", „Fokus Schöner Leben"; dezente Ornamente unter Überschriften.
- Zum Entfernen genügt es, die Klassen bzw. die markierten Stellen zurückzunehmen.

## 1:1 Begleitung
- Bildunterschrift „Stimmungsbilder…" → „Praxisräume…" (Text danach unverändert).

## Fokus KlarheitsReset
- Preis auf 1.999 € geändert (site.ts + klarheitsreset.astro inkl. Schema).

## Kontaktformular (Modal „Nachricht")
- Anklickbare Themen-Auswahl (Workshops, Publikationen, Impulse) als Mehrfachauswahl.
- Hinweis auf jederzeitiges Austragen/Löschen (DSGVO).
- Worker (worker/src/index.ts) um das Feld „topics" erweitert.

## SEO / lokale Auffindbarkeit
- ProfessionalService-Schema erweitert: areaServed mit Wiesbaden, Idstein, Taunusstein, Eppstein, Rhein-Main, Hessen; Geo-Koordinaten; serviceType inkl. Coaching.

## Hinweis zu Texten 7/8
- „Ein erster Schritt zu dir zurück" und „Sprechen wir über euch" waren im Code bereits korrekt und wurden bestätigt.

## Separate Dokumente (im Ordner ../ ausgeliefert)
- „Gefunden werden — Google & LinkedIn" (Anleitung)
- „Social Media & Markenauftritt" (aktualisiert)

---

# Dritte Runde — Gestaltung & Bilder (7. Juni 2026)

Build erneut fehlerfrei (25 Seiten).

## Bilder (Startseite)
- Hero-Bild (daniela-hero-portrait.jpg): weiße Ränder oben/unten entfernt, unten auf Handhöhe gekürzt (unnatürliche KI-Finger nicht mehr sichtbar).
- Teaser-Bild „Ich bin Daniela" (daniela-wiese-bluse.jpg): oberer weißer Rand entfernt.

## Neues Ornament-System (Komponente src/components/Zier.astro)
- Ersetzt das frühere „Apfel"-Zeichen durch ein feines goldenes Linien-Ornament.
- Drei Varianten: blatt, herz, ranke (SVG, in Markenfarbe).
- Zielgruppengerecht eingesetzt:
  - 1:1 / Frauen: Herz erlaubt, wärmer.
  - Teams / Workshops: nur Blatt/Ranke, KEIN Herz, sachlich.
  - Startseite/Impulse: Blatt/Ranke, kein Herz (gemischtes Publikum).

## Schreibschrift (Dancing Script, SIL OFL — kommerziell frei)
- Selbst gehostet: public/fonts/dancingscript-500.woff2, @font-face in fonts.css.
- CSS-Variable --font-script, Klassen .leitsatz-script / .leitsatz-script-light / .script-akzent.
- Sparsam eingesetzt: „Bewusst. Klar. Verbunden." (Startseite), „Für ein Leben, das sich echt und stimmig anfühlt." (1:1-Abschluss).

## Goldene Akzentwörter (.gold-akzent, global)
- Einzelne Schlüsselwörter (echt, stimmig, Fokus Schöner Leben) im Clay-/Goldton.

## Kontaktformular zielgruppengerecht
- 1:1-Formular: Herz-Ornament (Frauen).
- Nachricht-Formular: Blatt-Ornament.
- Teams-Formular: bewusst ohne Ornament (sachlich), Formular bleibt klar/funktional.

## Reversibilität
- Alle Stil-Elemente sind als eigene Klassen/Komponente gekapselt (.gold-akzent, .leitsatz-script, Zier.astro). Zum Entfernen genügt es, die <Zier />-Aufrufe bzw. die Klassen zurückzunehmen.

---

# Favicon (7. Juni 2026)
- Neues Favicon: vereinfachte Lotusblüte (gold auf creme), angelehnt ans Logo.
- Ersetzt das bisherige „d"-Zeichen.
- Dateien: public/favicon.svg (scharf in jeder Größe), public/favicon.ico (ältere Browser), public/apple-touch-icon.png (180×180, Handy-Homescreen).
- Im Head verlinkt (SEO.astro): svg + ico-Fallback + apple-touch-icon.

---

# SEO-Erweiterung: Coaching-Schwerpunkte (7. Juni 2026)

## Unsichtbar (Schema-Markup, SEO.astro)
- knowsAbout & serviceType erweitert: Lifecoaching, Führungskräfte-Coaching, Führungskräfteentwicklung, Resilienz, Resilienztraining, Stressmanagement, Burnout-Prävention/-Prophylaxe.

## Sichtbar (gekonnt eingewoben)
- Startseite (Begleitansatz): Schwerpunkte Resilienz, Stressmanagement, Burnout-Prävention ergänzt.
- Teams-Seite: Absatz zur gezielten Begleitung von Führungskräften (Rolle, Selbstführung, Führungsstil) + Schwerpunkte.
- Workshop-Themen: „Führungskräfte begleiten" und „Burnout-Prävention" neu; Stressresilienz-Thema um Stressmanagement/Resilienztraining ergänzt.
- Meta-Description der Startseite um Führungskräfte + Schwerpunkte erweitert.

## Bewusst NICHT verwendet
- „Lifecoach" nur im SEO-Hintergrund (nicht sichtbar prominent), da der Begriff die seriöse Positionierung schwächen könnte.
- Keine „Experten/Spezialisten"-Titel — stattdessen „Begleitung mit Schwerpunkt …" (seriöser und belastbar).

---

# Fix: kursive Wörter auf grünem Balken unsichtbar (7. Juni 2026)
- Problem: In Überschriften auf dem grünen Balken (.bg-sage) war das kursive <em>-Wort dunkelgrün auf grünem Grund — dadurch unsichtbar ("Ein erster" ohne "Schritt", "Lasst uns" ohne "sprechen").
- Lösung: Regel in global.css ergänzt — .bg-sage h1/h2/h3/h4 em wird jetzt in hellem Clay/Creme (--color-clay-pale) dargestellt, klar lesbar.
