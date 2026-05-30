# Formular-Worker — Setup-Anleitung

Cloudflare Worker, der die drei Modal-Formulare der Website
(`danielabrittahamberger.de`) entgegennimmt und per Resend an
`info@danielabrittahamberger.de` weiterleitet.

## Was du brauchst

1. Cloudflare-Konto mit der Domain `danielabrittahamberger.de` (hast du schon)
2. Resend-Konto (kostenlos): https://resend.com/signup
3. Node.js ≥ 20 auf deinem Rechner

## Setup — Schritt für Schritt

### 1. Resend einrichten

1. Auf https://resend.com/signup anmelden
2. Region **EU (Ireland)** wählen, falls verfügbar (DSGVO)
3. Im Dashboard → **Domains** → **Add Domain** → `danielabrittahamberger.de`
4. Resend zeigt dir DNS-Einträge (SPF, DKIM) — diese in Cloudflare DNS eintragen:
   - In Cloudflare → DNS → `danielabrittahamberger.de` → für jede Resend-Zeile einen TXT/MX-Eintrag anlegen
   - **Wichtig:** für die Resend-Einträge in Cloudflare den **Proxy ausschalten** (graue Wolke, nicht orange)
5. In Resend „Verify" klicken, bis alle Einträge ✅ grün sind (kann 5–30 Min dauern)
6. Im Resend Dashboard → **API Keys** → **Create API Key** → Name "DBH Forms Worker", Permissions "Sending access", Scope "All domains"
7. Den `re_…`-Key kopieren (nur einmal sichtbar)

### 2. Worker deployen

```bash
cd worker/
npm install
npx wrangler login         # einmalig, öffnet Browser
npx wrangler secret put RESEND_API_KEY
# → fragt nach dem Key, eintragen
npx wrangler deploy
```

Wrangler zeigt dir die URL des Workers, z. B.:
`https://dbh-forms.<dein-account>.workers.dev`

### 3. Worker an eigene Domain hängen (optional, empfohlen)

Damit das Formular von `forms.danielabrittahamberger.de` aus läuft (statt von `*.workers.dev`):

1. In Cloudflare → DNS → `danielabrittahamberger.de` → Add record
2. Type: `AAAA`, Name: `forms`, Content: `100::`, Proxied: ✅ (orange)
3. In `wrangler.toml` die `[[routes]]`-Sektion auskommentieren und nochmal `npx wrangler deploy`

### 4. Frontend mit Worker verbinden

In `src/components/Modal.astro` (Frontend-Projekt) die Zeile:

```ts
const WORKER_ENDPOINT = '';
```

ändern zu:

```ts
const WORKER_ENDPOINT = 'https://forms.danielabrittahamberger.de';
```

(oder die `workers.dev`-URL, falls Schritt 3 übersprungen)

Dann Frontend neu builden und deployen.

## Test

1. Auf der Live-Website ein Formular ausfüllen und absenden
2. Innerhalb von Sekunden sollte eine E-Mail bei `info@danielabrittahamberger.de` ankommen
3. Im Resend-Dashboard unter **Logs** ist die Sendung sichtbar
4. Falls es nicht klappt: `npx wrangler tail` zeigt Worker-Logs live

## Datenschutz-Hinweis

Datenschutzerklärung erwähnt jetzt:
- Cloudflare als Worker-Host (sowieso schon drin)
- Resend Inc. (Wilmington, Delaware, USA) als E-Mail-Versender via EU-Region
- Datenverarbeitungsvertrag (AVV) mit Resend nötig — Resend stellt einen DPA bereit: https://resend.com/legal/dpa

## Kosten

- Cloudflare Worker: kostenlos bis 100.000 Requests/Tag (für ein paar Formularsubmits pro Tag deutlich überdimensioniert)
- Resend: kostenlos bis 3.000 E-Mails/Monat (100/Tag) — ausreichend
- Domain: hast du schon

## Wartung

- Resend API-Key rotieren: im Resend Dashboard alten Key löschen, neuen erstellen, `wrangler secret put RESEND_API_KEY` mit neuem Wert
- Worker-Code ändern: `wrangler deploy`
- Submissions persistieren (optional): KV-Namespace anlegen mit `wrangler kv:namespace create SUBMISSIONS`, ID in `wrangler.toml` eintragen, neu deployen
