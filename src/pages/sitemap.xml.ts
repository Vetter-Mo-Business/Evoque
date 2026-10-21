// Sitemap für Suchmaschinen (https://evoque-yourself.com/sitemap.xml).
// Wird beim Bauen aus allen deutschen Seiten in src/pages erzeugt; zu jeder
// Seite ist die englische Fassung als Sprach-Alternative eingetragen.
import type { APIRoute } from 'astro';
import { localizePath } from '../i18n/ui';

// Deutsche Seiten = alle .astro-Dateien direkt in src/pages, außer 404.
const seiten = Object.keys(import.meta.glob('./*.astro'))
  .map((datei) => datei.replace(/^\.\//, '').replace(/\.astro$/, ''))
  .filter((name) => name !== '404')
  .map((name) => (name === 'index' ? '/' : '/' + name))
  .sort();

export const GET: APIRoute = ({ site }) => {
  const basis = site?.origin ?? '';
  const eintraege = seiten
    .map((pfad) => {
      const de = basis + localizePath(pfad, 'de');
      const en = basis + localizePath(pfad, 'en');
      const alternativen =
        `    <xhtml:link rel="alternate" hreflang="de" href="${de}"/>\n` +
        `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n`;
      return [de, en]
        .map((loc) => `  <url>\n    <loc>${loc}</loc>\n${alternativen}  </url>`)
        .join('\n');
    })
    .join('\n');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    eintraege +
    '\n</urlset>\n';

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
