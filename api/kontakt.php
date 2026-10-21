<?php
/**
 * Kontaktformular von evoque-yourself.com
 *
 * - Versendet die Nachricht per PHP mail() an das Postfach bei netcup.
 * - Speichert nichts: keine Datenbank, keine Datei, kein Log.
 * - Spamschutz nur lokal: Honeypot-Feld "website" + Mindest-Ausfüllzeit.
 *   Kein reCAPTCHA, kein externer Dienst.
 * - Antwortet mit JSON (Formular mit JavaScript) oder mit einer kleinen
 *   HTML-Seite (Formular ohne JavaScript).
 */

declare(strict_types=1);

// --- Einstellungen ---------------------------------------------------------
// Empfänger und Absender (Absender muss ein Postfach dieser Domain sein,
// sonst landen die Mails bei manchen Anbietern im Spam).
const EMPFAENGER = 'coaching@evoque-yourself.com';
const ABSENDER = 'coaching@evoque-yourself.com';
const ABSENDER_NAME = 'EVOQUE Website';
// Schneller als in so vielen Sekunden ausgefüllt = Bot.
const MIN_SEKUNDEN = 3;
// ---------------------------------------------------------------------------

date_default_timezone_set('Europe/Berlin');
header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');

$wantsJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
$lang = (($_POST['lang'] ?? '') === 'en') ? 'en' : 'de';

$texte = [
    'de' => [
        'ok_title' => 'Vielen Dank!',
        'ok' => 'Die Nachricht ist angekommen. Ich melde mich so bald wie möglich.',
        'invalid_title' => 'Angaben unvollständig',
        'invalid' => 'Bitte füllen Sie alle Felder aus und prüfen Sie die E-Mail-Adresse.',
        'error_title' => 'Nachricht nicht gesendet',
        'error' => 'Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie direkt eine E-Mail.',
        'back' => 'Zurück zur Website',
        'back_href' => '/kontakt#kontaktformular',
    ],
    'en' => [
        'ok_title' => 'Thank you!',
        'ok' => 'Your message has arrived. I will get back to you as soon as possible.',
        'invalid_title' => 'Incomplete details',
        'invalid' => 'Please fill in all fields and check the email address.',
        'error_title' => 'Message not sent',
        'error' => 'Unfortunately, the message could not be sent. Please try again later or write an email directly.',
        'back' => 'Back to the website',
        'back_href' => '/en/kontakt#kontaktformular',
    ],
][$lang];

/** Antwort senden und Skript beenden. $art: ok | invalid | error */
function antwort(string $art, int $status, array $t, bool $json): void
{
    http_response_code($status);
    if ($json) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['ok' => $art === 'ok']);
        exit;
    }
    header('Content-Type: text/html; charset=UTF-8');
    $titel = htmlspecialchars($t[$art . '_title'], ENT_QUOTES, 'UTF-8');
    $text = htmlspecialchars($t[$art], ENT_QUOTES, 'UTF-8');
    $zurueck = htmlspecialchars($t['back'], ENT_QUOTES, 'UTF-8');
    $href = htmlspecialchars($t['back_href'], ENT_QUOTES, 'UTF-8');
    echo <<<HTML
<!doctype html>
<html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>{$titel} · EVOQUE yourself</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f2ede3;color:#152c1a;font-family:Jost,'Century Gothic',sans-serif;padding:1rem}
main{max-width:34rem;background:#fff;border-radius:9px;padding:2rem;box-shadow:0 14px 40px rgba(21,44,26,.1)}
h1{font-family:'Playfair Display',Georgia,serif;margin-top:0}a{color:#152c1a}</style></head>
<body><main><h1>{$titel}</h1><p>{$text}</p><p><a href="{$href}">{$zurueck}</a></p></main></body></html>
HTML;
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    antwort('error', 405, $texte, $wantsJson);
}

// --- Spamschutz -------------------------------------------------------------
// Bots bekommen eine Erfolgsmeldung, damit sie nicht weiter probieren.
$honeypot = trim((string)($_POST['website'] ?? ''));
$gestartet = (int)($_POST['t'] ?? 0);
if ($honeypot !== '' || ($gestartet > 0 && time() - $gestartet < MIN_SEKUNDEN)) {
    antwort('ok', 200, $texte, $wantsJson);
}

// --- Eingaben prüfen --------------------------------------------------------
$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$nachricht = trim(str_replace("\r\n", "\n", (string)($_POST['message'] ?? '')));

$laenge = static function (string $s): int {
    return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen($s);
};

$gueltig =
    $name !== '' && $laenge($name) <= 100
    // keine Steuerzeichen (verhindert u. a. eingeschleuste Mail-Header)
    && !preg_match('/[\x00-\x1F\x7F]/', $name)
    && $email !== '' && strlen($email) <= 254
    && filter_var($email, FILTER_VALIDATE_EMAIL) !== false
    && $nachricht !== '' && $laenge($nachricht) <= 5000
    && preg_match('//u', $name . $nachricht) === 1; // gültiges UTF-8

if (!$gueltig) {
    antwort('invalid', 422, $texte, $wantsJson);
}

// --- Mail zusammenbauen -----------------------------------------------------
$betreff = 'Kontaktformular: Nachricht von ' . $name;
$betreff = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($betreff, 'UTF-8', 'B', "\r\n")
    : '=?UTF-8?B?' . base64_encode($betreff) . '?=';

$absenderName = '=?UTF-8?B?' . base64_encode(ABSENDER_NAME) . '?=';

$text = "Neue Nachricht über das Kontaktformular auf evoque-yourself.com\n\n"
    . "Name: {$name}\n"
    . "E-Mail: {$email}\n"
    . 'Sprache der Website: ' . ($lang === 'en' ? 'Englisch' : 'Deutsch') . "\n"
    . 'Gesendet am: ' . date('d.m.Y, H:i') . " Uhr\n\n"
    . "Nachricht:\n{$nachricht}\n\n"
    . "-- \nTipp: Einfach auf „Antworten“ klicken – die Antwort geht direkt an {$email}.\n"
    . "Die Nachricht wird auf dem Webserver nicht gespeichert.\n";

$kopfzeilen = [
    'From' => "{$absenderName} <" . ABSENDER . '>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => 'quoted-printable',
    'X-Mailer' => 'evoque-yourself.com Kontaktformular',
];

// Mail-Zeilen enden mit CRLF; sonst kodiert quoted-printable die
// Zeilenumbrüche mit und die Nachricht kommt als ein Block an.
$text = str_replace("\n", "\r\n", $text);

$gesendet = @mail(
    EMPFAENGER,
    $betreff,
    quoted_printable_encode($text),
    $kopfzeilen,
    '-f' . ABSENDER
);

if (!$gesendet) {
    antwort('error', 500, $texte, $wantsJson);
}

antwort('ok', 200, $texte, $wantsJson);
