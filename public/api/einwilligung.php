<?php
/**
 * Protokoll der Cookie-Einwilligungen (Nachweis nach Art. 7 Abs. 1 DSGVO).
 *
 * Wird vom Cookie-Banner (src/lib/consent.ts) bei jeder Entscheidung
 * aufgerufen. Gespeichert werden NUR:
 *   Zeitpunkt (UTC), Banner-Version, Auswahl (Cal.com ja/nein,
 *   Instagram ja/nein), Quelle des Klicks.
 * Keine IP-Adresse, kein Browser, keine sonstigen Daten.
 *
 * Ablage: eine Datei pro Monat (JSON Lines). Bevorzugt AUSSERHALB des
 * öffentlichen Web-Ordners; geht das nicht, in einem per .htaccess
 * gesperrten Ordner. Dateien älter als AUFBEWAHRUNG_MONATE werden
 * automatisch gelöscht.
 */

declare(strict_types=1);

const AUFBEWAHRUNG_MONATE = 12;
const MAX_DATEIGROESSE = 20 * 1024 * 1024; // Schutz gegen Volllaufen (20 MB/Monat)
const QUELLEN = [
    'banner-alle',
    'banner-notwendig',
    'einstellungen',
    'platzhalter-cal',
    'platzhalter-instagram',
];

header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');

function ende(int $status): void
{
    http_response_code($status);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    ende(405);
}

$roh = file_get_contents('php://input', false, null, 0, 1024);
$d = json_decode((string)$roh, true);
if (!is_array($d)) {
    ende(400);
}

$version = $d['version'] ?? null;
$cal = $d['cal'] ?? null;
$instagram = $d['instagram'] ?? null;
$quelle = $d['source'] ?? null;

if (
    !is_string($version) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $version)
    || !is_bool($cal) || !is_bool($instagram)
    || !is_string($quelle) || !in_array($quelle, QUELLEN, true)
) {
    ende(400);
}

/** Ordner für das Protokoll finden (außerhalb des Web-Ordners bevorzugt). */
function protokollOrdner(): ?string
{
    $docroot = rtrim((string)($_SERVER['DOCUMENT_ROOT'] ?? ''), '/\\');
    $kandidaten = [];
    if ($docroot !== '') {
        $kandidaten[] = dirname($docroot) . '/einwilligungen';
    }
    $kandidaten[] = __DIR__ . '/_protokoll';

    foreach ($kandidaten as $ordner) {
        if (!is_dir($ordner) && !@mkdir($ordner, 0750, true)) {
            continue;
        }
        if (!is_writable($ordner)) {
            continue;
        }
        // Falls der Ordner im Web-Ordner liegt: Zugriff von außen sperren.
        $sperre = $ordner . '/.htaccess';
        if (!is_file($sperre)) {
            @file_put_contents(
                $sperre,
                "<IfModule mod_authz_core.c>\n  Require all denied\n</IfModule>\n"
                . "<IfModule !mod_authz_core.c>\n  Deny from all\n</IfModule>\n"
            );
        }
        return $ordner;
    }
    return null;
}

$ordner = protokollOrdner();
if ($ordner === null) {
    ende(500);
}

// Alte Monatsdateien löschen.
$grenze = (new DateTimeImmutable('first day of this month', new DateTimeZone('UTC')))
    ->modify('-' . AUFBEWAHRUNG_MONATE . ' months')
    ->format('Y-m');
foreach (glob($ordner . '/einwilligungen-*.jsonl') ?: [] as $datei) {
    if (preg_match('/einwilligungen-(\d{4}-\d{2})\.jsonl$/', $datei, $m) && $m[1] < $grenze) {
        @unlink($datei);
    }
}

$datei = $ordner . '/einwilligungen-' . gmdate('Y-m') . '.jsonl';
if (is_file($datei) && filesize($datei) > MAX_DATEIGROESSE) {
    ende(507);
}

$zeile = json_encode([
    'zeit' => gmdate('Y-m-d\TH:i:s\Z'),
    'banner_version' => $version,
    'cal' => $cal,
    'instagram' => $instagram,
    'quelle' => $quelle,
], JSON_UNESCAPED_UNICODE) . "\n";

if (@file_put_contents($datei, $zeile, FILE_APPEND | LOCK_EX) === false) {
    ende(500);
}

ende(204);
