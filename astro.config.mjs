// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://evoque-yourself.com',
  // Zweisprachigkeit: Deutsch unter "/", Englisch unter "/en/...".
  // Jede /en-Seite liegt als eigene Datei unter src/pages/en/ und rendert
  // den deutschen Seitenaufbau mit englischen Texten.
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Rein statische Ausgabe: Der Ordner dist/ wird 1:1 auf das
  // netcup-Webhosting hochgeladen. Bilder werden beim Bauen lokal
  // optimiert (sharp), es wird kein fremder Bild-Dienst genutzt.
  // Das Kontaktformular und das Einwilligungs-Protokoll laufen als
  // kleine PHP-Skripte (public/api/) auf demselben Server.
  output: 'static',
});
