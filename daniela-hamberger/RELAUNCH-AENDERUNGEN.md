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
