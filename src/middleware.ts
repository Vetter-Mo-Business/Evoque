import { defineMiddleware } from 'astro:middleware';

// Name des Cookies, in dem der Zugang gemerkt wird.
const COOKIE = 'evoque_gate';

// Pfade, die immer erreichbar sein müssen (Login selbst + statische Assets),
// sonst käme man nie zur Login-Seite bzw. das Styling fehlte.
function isPublicPath(pathname: string): boolean {
  return (
    pathname === '/login' ||
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/_image') ||
    pathname.startsWith('/images/') ||
    pathname === '/favicon.svg' ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt'
  );
}

export const onRequest = defineMiddleware(async (context, next) => {
  const password = import.meta.env.SITE_PASSWORD;

  // Kein Passwort gesetzt -> Gate ist aus (praktisch für lokale Entwicklung,
  // wenn keine .env vorhanden ist). Auf Vercel SITE_PASSWORD setzen!
  if (!password) return next();

  const { pathname } = context.url;
  if (isPublicPath(pathname)) return next();

  const authed = context.cookies.get(COOKIE)?.value === password;
  if (authed) return next();

  // Nicht eingeloggt -> zur Login-Seite (mit Rücksprungziel).
  const target = encodeURIComponent(pathname + context.url.search);
  return context.redirect(`/login?next=${target}`);
});
