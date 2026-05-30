/**
 * Cloudflare Worker — Formular-Empfang für danielabrittahamberger.de
 *
 * Empfängt POSTs der drei Modal-Formulare (1zu1, teams, vormerken),
 * validiert Pflichtfelder und Honeypot, sendet eine E-Mail an Daniela
 * über Resend (https://resend.com).
 *
 * Setup-Variablen (in Cloudflare Dashboard → Worker → Settings → Variables):
 *   RESEND_API_KEY      (Secret) — API-Key aus Resend Dashboard
 *   MAIL_TO             info@danielabrittahamberger.de
 *   MAIL_FROM           formular@danielabrittahamberger.de  (muss bei Resend verifiziert sein)
 *   ALLOWED_ORIGIN      https://danielabrittahamberger.de
 */

export interface Env {
  RESEND_API_KEY: string;
  MAIL_TO: string;
  MAIL_FROM: string;
  ALLOWED_ORIGIN: string;
  SUBMISSIONS?: KVNamespace; // optional: KV-Namespace zum Persistieren (falls eingerichtet)
}

type FormType = '1zu1' | 'teams' | 'vormerken';

interface BasePayload {
  formType: FormType;
  name?: string;
  email?: string;
  consent?: boolean;
  website?: string; // honeypot
  [key: string]: unknown;
}

const FORMAT_LABELS: Record<string, string> = {
  // 1zu1
  orientierung: 'Kostenfreies Orientierungsgespräch',
  klarheit: 'Klarheitsgespräch (60 Min)',
  klarheitsreset: 'KlarheitsReset (intensive Einzelsitzung)',
  folgetermin: '1:1 Begleitung — Folgetermin',
  // teams
  teamvorgespraech: 'Kostenfreies Teamvorgespräch (30 Min)',
  impulsvortrag: 'Impulsvortrag (60–90 Min)',
  teambalance: 'TeamBalance Workshop (Halbtag)',
  teamreset: 'TeamReset (mehrere Wochen)',
  fuehrungskraefte: 'Führungskräftecoaching',
  'team-mentoring': 'Team-Mentoring',
  kleingruppen: 'Kleingruppen-Mentoring',
  veraenderung: 'Begleitung von Veränderungsprozessen',
  unklar: 'Noch unklar — bitte beraten',
};

const FORM_TITLES: Record<FormType, string> = {
  '1zu1': 'Neue Anfrage — 1:1 Begleitung',
  teams: 'Neue Anfrage — Teamformat',
  vormerken: 'Neue Vormerkung — Publikation',
};

function corsHeaders(env: Env): HeadersInit {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function escape(s: unknown): string {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmtField(label: string, value: unknown): string {
  if (value == null || value === '' || value === false) return '';
  const displayed = typeof value === 'boolean' ? 'Ja' : escape(value);
  return `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#666;font-size:13px;white-space:nowrap;"><strong>${escape(label)}</strong></td><td style="padding:6px 0;font-size:14px;line-height:1.5;">${displayed.replace(/\n/g, '<br>')}</td></tr>`;
}

function buildHtml(payload: BasePayload): string {
  const formType = payload.formType;
  const title = FORM_TITLES[formType] ?? 'Neue Anfrage';

  let rows = '';
  if (formType === '1zu1') {
    rows = [
      fmtField('Name', payload.name),
      fmtField('E-Mail', payload.email),
      fmtField('Telefon', payload.phone),
      fmtField('Format', FORMAT_LABELS[payload.format as string] ?? payload.format),
      fmtField('Vorab-Info', payload.message),
      fmtField('Termin­wünsche', payload.timing),
      fmtField('Datenschutz-Einverständnis', payload.consent),
    ].join('');
  } else if (formType === 'teams') {
    rows = [
      fmtField('Name', payload.name),
      fmtField('Firma / Organisation', payload.company),
      fmtField('Position / Rolle', payload.role),
      fmtField('Teamgröße', payload.size),
      fmtField('E-Mail', payload.email),
      fmtField('Telefon', payload.phone),
      fmtField('Format', FORMAT_LABELS[payload.format as string] ?? payload.format),
      fmtField('Hintergrund', payload.background),
      fmtField('Termin­wünsche', payload.timing),
      fmtField('Datenschutz-Einverständnis', payload.consent),
    ].join('');
  } else if (formType === 'vormerken') {
    rows = [
      fmtField('Publikation', payload.publication),
      fmtField('Name', payload.name),
      fmtField('E-Mail', payload.email),
      fmtField('Auch über andere Publikationen informieren', payload.notifyAll),
      fmtField('Datenschutz-Einverständnis', payload.consent),
    ].join('');
  }

  const timestamp = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });

  return `<!doctype html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5efe6;padding:24px;color:#1d211d;">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,0.04);">
  <h2 style="font-family:Georgia,serif;font-weight:400;color:#3a4d3d;margin:0 0 8px;">${escape(title)}</h2>
  <p style="color:#888;font-size:13px;margin:0 0 24px;">Eingegangen am ${escape(timestamp)}</p>
  <table style="width:100%;border-collapse:collapse;border-top:1px solid #e8dfd0;">${rows}</table>
  <p style="color:#888;font-size:12px;margin:32px 0 0;border-top:1px solid #e8dfd0;padding-top:16px;">
    Automatisch generiert von danielabrittahamberger.de — direkt antworten ist möglich (Reply-To ist auf den Absender gesetzt).
  </p>
</div></body></html>`;
}

function buildPlainText(payload: BasePayload): string {
  const title = FORM_TITLES[payload.formType] ?? 'Neue Anfrage';
  const lines: string[] = [title, '='.repeat(title.length), ''];
  const pushField = (label: string, value: unknown) => {
    if (value == null || value === '' || value === false) return;
    const display = typeof value === 'boolean' ? 'Ja' : String(value);
    lines.push(`${label}: ${display}`);
  };

  if (payload.formType === '1zu1') {
    pushField('Name', payload.name);
    pushField('E-Mail', payload.email);
    pushField('Telefon', payload.phone);
    pushField('Format', FORMAT_LABELS[payload.format as string] ?? payload.format);
    pushField('Vorab-Info', payload.message);
    pushField('Terminwünsche', payload.timing);
  } else if (payload.formType === 'teams') {
    pushField('Name', payload.name);
    pushField('Firma / Organisation', payload.company);
    pushField('Position / Rolle', payload.role);
    pushField('Teamgröße', payload.size);
    pushField('E-Mail', payload.email);
    pushField('Telefon', payload.phone);
    pushField('Format', FORMAT_LABELS[payload.format as string] ?? payload.format);
    pushField('Hintergrund', payload.background);
    pushField('Terminwünsche', payload.timing);
  } else if (payload.formType === 'vormerken') {
    pushField('Publikation', payload.publication);
    pushField('Name', payload.name);
    pushField('E-Mail', payload.email);
    pushField('Auch über andere Publikationen', payload.notifyAll);
  }
  pushField('Datenschutz-Einverständnis', payload.consent);
  return lines.join('\n');
}

function getSubject(payload: BasePayload): string {
  const prefix =
    payload.formType === '1zu1' ? '[1:1]' : payload.formType === 'teams' ? '[Teams]' : '[Vormerken]';
  const name = payload.name ? ` — ${payload.name}` : '';
  const extra =
    payload.formType === 'teams' && payload.company
      ? ` (${payload.company})`
      : payload.formType === 'vormerken' && payload.publication
      ? ` — ${payload.publication}`
      : '';
  return `${prefix} Neue Anfrage${name}${extra}`;
}

async function sendMail(payload: BasePayload, env: Env): Promise<void> {
  const html = buildHtml(payload);
  const text = buildPlainText(payload);
  const subject = getSubject(payload);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [env.MAIL_TO],
      reply_to: payload.email ? [String(payload.email)] : undefined,
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API ${res.status}: ${body}`);
  }
}

function validate(payload: BasePayload): { ok: boolean; error?: string } {
  // Honeypot — wenn ausgefüllt: bot
  if (payload.website && String(payload.website).trim() !== '') {
    return { ok: false, error: 'honeypot' };
  }
  if (!payload.formType || !['1zu1', 'teams', 'vormerken'].includes(payload.formType)) {
    return { ok: false, error: 'invalid formType' };
  }
  if (!payload.name || String(payload.name).trim().length < 2) {
    return { ok: false, error: 'name required' };
  }
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email))) {
    return { ok: false, error: 'valid email required' };
  }
  if (!payload.consent) {
    return { ok: false, error: 'consent required' };
  }
  if (payload.formType === '1zu1' && !payload.format) {
    return { ok: false, error: 'format required' };
  }
  if (payload.formType === 'teams') {
    if (!payload.company) return { ok: false, error: 'company required' };
    if (!payload.format) return { ok: false, error: 'format required' };
  }
  // Längenbegrenzung gegen Missbrauch
  const totalLength = JSON.stringify(payload).length;
  if (totalLength > 12000) {
    return { ok: false, error: 'payload too large' };
  }
  return { ok: true };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const headers = corsHeaders(env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers });
    }

    // Origin check
    const origin = request.headers.get('Origin') ?? '';
    if (env.ALLOWED_ORIGIN && origin && origin !== env.ALLOWED_ORIGIN) {
      return new Response('Forbidden origin', { status: 403, headers });
    }

    let payload: BasePayload;
    try {
      payload = (await request.json()) as BasePayload;
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const v = validate(payload);
    if (!v.ok) {
      // Bei Honeypot: still 200 zurück, als wäre alles gut
      if (v.error === 'honeypot') {
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify({ error: v.error }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    try {
      await sendMail(payload, env);

      // Optionales Persistieren in KV (wenn eingerichtet)
      if (env.SUBMISSIONS) {
        const id = `${payload.formType}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        await env.SUBMISSIONS.put(id, JSON.stringify({ ...payload, _at: new Date().toISOString() }), {
          expirationTtl: 60 * 60 * 24 * 90, // 90 Tage
        });
      }

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.error('Form submission error:', err);
      return new Response(
        JSON.stringify({ error: 'Konnte Anfrage nicht versenden. Bitte E-Mail direkt schicken.' }),
        {
          status: 500,
          headers: { ...headers, 'Content-Type': 'application/json' },
        }
      );
    }
  },
};
