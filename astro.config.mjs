// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://evoque-yourself.example',
  // On-Demand-Rendering, damit das Passwort-Gate (Middleware) bei jeder
  // Anfrage greift und geschützte Seiten gar nicht erst ausgeliefert werden.
  output: 'server',
  adapter: vercel(),
  // Astros Origin-Check (CSRF) deaktivieren: hinter Vercels Proxy stimmen
  // Origin- und Host-Header nicht überein, wodurch das Login-POST sonst als
  // "cross-site" abgelehnt wird ("Cross-site POST form submissions are
  // forbidden"). Der Login-Cookie nutzt bereits sameSite: 'lax' als Schutz.
  security: {
    checkOrigin: false,
  },
  integrations: [preact()],
});
