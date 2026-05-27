# Daniela Britta Hamberger — Fokus Schöner Leben

Website-Projekt für **danielahamberger.de** (Hauptdomain) ·
Zweitdomain: **danielabrittahamberger.de** ·
Geplant: **fokus-schoener-leben.de**

Gebaut mit **Astro 5** (statisch · vollständig SEO-optimiert).

---

## Schnellstart (lokal testen)

```bash
# Voraussetzung: Node.js 20+ installiert
npm install
npm run dev
```

Dann im Browser öffnen: `http://localhost:4321`

## Produktion bauen

```bash
npm run build
```

Erzeugt einen statischen Build im Ordner `dist/`. Diesen Ordner kannst du auf
jeden Webserver hochladen oder auf Vercel/Netlify deployen.

---

## Deployment-Empfehlung: Vercel (kostenlos, einfach)

Empfohlener Weg für die schnellste Inbetriebnahme:

1. **GitHub-Repo erstellen** und das ganze Projekt pushen
2. Auf [vercel.com](https://vercel.com) anmelden
3. **„New Project"** → GitHub-Repo auswählen
4. Vercel erkennt Astro automatisch — einfach „Deploy" klicken
5. Nach 1-2 Minuten ist die Site live auf einer `.vercel.app`-URL
6. **Custom Domain hinzufügen:**
   - In Vercel: „Settings" → „Domains" → `danielahamberger.de` hinzufügen
   - Bei deinem Domain-Provider die DNS-Einträge gemäß Vercel-Anleitung setzen
7. **Zweitdomain weiterleiten:**
   - `danielabrittahamberger.de` als zusätzliche Domain hinzufügen
   - Als „Redirect to main domain" konfigurieren
8. **Später, wenn fokus-schoener-leben.de eingerichtet ist:**
   - Ebenfalls als Redirect zur Hauptdomain hinzufügen

Alternativ funktioniert genauso: **Netlify**, **Cloudflare Pages**, oder
klassisches Hosting (1&1, Hetzner, etc. — dann einfach `dist/` per FTP hochladen).

---

## Was du vor dem Go-Live noch erledigen solltest

| | Erledigt | Was zu tun ist |
|---|---|---|
| 📄 Impressum | ⚠️ | USt-IdNr. eintragen in `src/pages/impressum.astro` (oder Hinweis auf Kleinunternehmerregelung) |
| 📷 Profilbilder | ⚠️ | Aktuell sind Gamma-AI-Bilder eingesetzt. Eigene Fotos in `public/images/` ablegen und in den `.astro`-Dateien austauschen |
| 📷 OG-Bild | ⚠️ | `public/og-default.jpg` durch echtes 1200×630px-Foto ersetzen |
| 🔗 Instagram-URL | ⚠️ | In `src/data/site.ts` → `SOCIAL.instagram` aktuelle URL setzen |
| 💬 Testimonials | ⚠️ | Schriftliche Einverständnisse von Bianca T., Carmela M., Team Rhein-Main einholen |
| 📧 Kontaktformular | ⚠️ | Aktuell zeigt es nur einen Alert. Für echtes Versenden: Formspree, FormSubmit oder Netlify Forms einbinden |
| 📬 Newsletter | ⚠️ | Brevo/Mailchimp/Substack einbinden (aktuell auch nur Alert) |
| 🌐 Domain-Setup | ⚠️ | `danielahamberger.de` als Hauptadresse, `danielabrittahamberger.de` als Weiterleitung |
| 🔍 Search Console | ⚠️ | In Google Search Console verifizieren und sitemap.xml einreichen |

---

## Inhalte ändern

**Texte zentral bearbeiten:**
- Kontaktdaten, Social Media, Navigation → `src/data/site.ts`
- Seiteninhalte → die jeweilige Datei in `src/pages/*.astro`

**Bilder austauschen:**
- Profilbilder: aktuell Links zu `cdn.gamma.app/...`
- Ersetzen durch eigene: Bild in `public/images/` ablegen, dann
  in der jeweiligen `.astro`-Datei den `src=""`-Pfad auf
  `/images/dein-bild.jpg` ändern

**Design-Farben:**
- Alle Farben zentral in `src/styles/global.css` unter `:root { --color-... }`

---

## Projektstruktur

```
.
├── astro.config.mjs       Astro-Konfiguration (Site-URL, Sitemap)
├── package.json           Abhängigkeiten + Scripts
├── public/                Statische Dateien (favicon, og-image, robots.txt)
├── src/
│   ├── components/        Wiederverwendbare Bausteine (Header, Footer, SEO)
│   ├── data/site.ts       Zentrale Daten (Kontakt, Navigation, Texte)
│   ├── layouts/           Layout-Templates
│   ├── pages/             Eine .astro-Datei pro Seite
│   └── styles/global.css  Design-System (Farben, Schriften, Spacing)
└── README.md              Diese Datei
```

---

## Seiten-Übersicht

| URL | Datei | Inhalt |
|---|---|---|
| `/` | index.astro | Startseite mit Hero, Drei Wege, Methoden, Newsletter |
| `/ueber-mich` | ueber-mich.astro | Persönlich: Hunde, Musik, 15 Jahre Erfahrung |
| `/1-zu-1-begleitung` | 1-zu-1-begleitung.astro | KlarheitsSitzung, KlarheitsStart, KlarheitsReset etc. |
| `/teams-workshops` | teams-workshops.astro | Impulsvortrag, TeamBalance, TeamReset |
| `/klarheitsreset` | klarheitsreset.astro | Detail-Seite KlarheitsReset |
| `/teambalance` | teambalance.astro | Detail-Seite TeamBalance |
| `/publikationen-materialien` | publikationen-materialien.astro | 3 Buchprojekte + weitere Planungen |
| `/vision-stiftung` | vision-stiftung.astro | Stiftungs-Vision + Wirkungsbereiche |
| `/fokus-impulse` | fokus-impulse.astro | Blog-Landingpage (Inhalte folgen) |
| `/stimmen` | stimmen.astro | Testimonials |
| `/kontakt` | kontakt.astro | Kontaktformular + Adresse |
| `/impressum` | impressum.astro | §5 DDG |
| `/datenschutz` | datenschutz.astro | DSGVO |
| `/404` | 404.astro | Fehlerseite |

---

## SEO-Features (bereits eingebaut)

- ✅ Sitemap (automatisch generiert: `/sitemap-index.xml`)
- ✅ robots.txt
- ✅ Schema.org JSON-LD (Person, ProfessionalService, Service, FAQPage)
- ✅ OpenGraph + Twitter Cards
- ✅ Canonical URLs
- ✅ Sprachattribut `lang="de"`
- ✅ Meta-Descriptions je Seite
- ✅ Strukturierte Überschriften (h1, h2, h3)
- ✅ Alt-Texte bei Bildern
- ✅ Brotcrumbs

---

## Performance

- Statischer Build (kein JavaScript-Framework, kein Server)
- Schriftarten via Google Fonts (preconnect)
- Bilder lazy-loaded
- CSS minimiert mit Lightning CSS
- View Transitions zwischen Seiten

---

## Bei Fragen

Im Astro-Projekt steckt einiges an Logik — wenn du Anpassungen brauchst, die
über das reine Tauschen von Texten und Bildern hinausgehen, melde dich.
