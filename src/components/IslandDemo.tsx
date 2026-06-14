/** @jsxImportSource preact */
import { useState } from 'preact/hooks';

/**
 * Kleine interaktive Demo-Komponente (Preact-Island).
 * Dient nur dazu, das "Inspect Islands"-Tool der Astro Dev Toolbar zu testen.
 * Sobald sie mit einem client:*-Directive eingebunden wird, erkennt das Tool
 * sie als interaktive Island.
 */
export default function IslandDemo() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '2px solid #2e4a36',
        borderRadius: '12px',
        padding: '1.5rem',
        maxWidth: '320px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <p style={{ margin: '0 0 1rem' }}>
        Interaktive Preact-Island. Zählerstand: <strong>{count}</strong>
      </p>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        style={{
          background: '#2e4a36',
          color: '#fff',
          border: 'none',
          borderRadius: '999px',
          padding: '0.6rem 1.2rem',
          cursor: 'pointer',
        }}
      >
        +1 hochzählen
      </button>
    </div>
  );
}
