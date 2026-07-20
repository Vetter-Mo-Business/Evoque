// SVGO-Config nur fuer die grossen Logo-SVGs (Affinity/Serif-Exporte).
// Ziel: Datei < 1 MB, OHNE die Optik oder die <text>-Elemente (echte
// Schriften) zu zerstoeren. Wir reduzieren vor allem die uebertriebene
// Koordinaten-Praezision der Pflanzen-Pfade und werfen Editor-Ballast raus.
export default {
  multipass: true,
  // 2 Nachkommastellen sind bei diesen fein aufskalierten Pfaden nicht
  // sichtbar verlustbehaftet, sparen aber sehr viel.
  floatPrecision: 2,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // viewBox MUSS bleiben, sonst skaliert das SVG nicht mehr richtig.
          removeViewBox: false,
          // Text NICHT in Pfade wandeln oder zusammenlegen -> Schriften bleiben.
          // (preset-default rastert/konvertiert Text ohnehin nicht, wir sind
          //  hier nur explizit sicher.)
          convertPathData: {
            floatPrecision: 2,
            // keine Kurven in Geraden zwingen, damit die Blaetter rund bleiben
            straightCurves: false,
          },
          cleanupNumericValues: { floatPrecision: 2 },
        },
      },
    },
    // Affinity/Serif-spezifische Attribute und leere Gruppen entfernen.
    { name: 'removeDimensions' }, // width/height=100% raus -> nutzt viewBox
    { name: 'cleanupIds' },
  ],
};
