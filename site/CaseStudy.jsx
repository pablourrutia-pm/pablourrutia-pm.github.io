// CaseStudy — the editorial (cream) overlay for a single project.
const NS2 = window.PabloUrrutiaGridAwarePortfolioDS_6b21cb;
const { DeviceMockup, PageTitle, DashedDivider, SectionMarker, Callout, CircleButton } = NS2;

// Render **bold** spans inside a string.
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function Bullets({ items }) {
  return (
    <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: 'flex', gap: 12, fontSize: 16, lineHeight: 1.5, color: 'var(--ink)' }}>
          <span aria-hidden style={{ color: 'var(--accent-strong)', flex: '0 0 auto', fontWeight: 700, lineHeight: 1.5 }}>—</span>
          <span>{rich(it)}</span>
        </li>
      ))}
    </ul>
  );
}

function Label({ children }) {
  return <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17, color: 'var(--ink)' }}>{children}</p>;
}

function CaseStudy({ data, onClose, mode = 'common', onToggleMode }) {
  const simple = mode === 'grid-aware';
  React.useEffect(() => {
    const el = document.getElementById('case-scroll');
    if (el) el.scrollTop = 0;
  }, [data && data.id]);

  if (!data) return null;
  return (
    <div id="case-scroll" style={{
      background: 'var(--paper)', minHeight: '100%', color: 'var(--ink)',
      fontFamily: 'var(--font-body)', overflowY: 'auto',
    }}>
      <DeviceMockup band={data.band} variant="browser" onClose={onClose} height={188} />

      <div style={{ maxWidth: 390, margin: '0 auto', padding: '24px 24px 44px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <PageTitle eyebrow={data.eyebrow}>{data.title}</PageTitle>
        {data.tldr && (
          <div style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            background: 'var(--surface-fill)', borderLeft: '4px solid var(--accent)',
            borderRadius: 'var(--radius-md)', padding: '14px 16px',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-strong)',
              flex: '0 0 auto', paddingTop: 2,
            }}>TL;DR</span>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.45, color: 'var(--ink)' }}>{data.tldr}</p>
          </div>
        )}

        {simple ? (
          <button type="button" onClick={onToggleMode} style={{
            alignSelf: 'flex-start', marginTop: 4, cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.04em', textTransform: 'uppercase',
            background: 'transparent', border: '1.5px solid var(--accent)',
            color: 'var(--accent-strong)', borderRadius: 'var(--radius-pill)', padding: '9px 16px',
          }}>Read the full version →</button>
        ) : (
        <>
        <DashedDivider />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Label>The challenge:</Label>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5 }}>{rich(data.challenge)}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <Label>My role &amp; solution:</Label>
          <Bullets items={data.role} />
        </div>

        <div style={{ marginTop: 8 }}>
          <SectionMarker icon="🎯">The impact:</SectionMarker>
          <Bullets items={data.impact} />
        </div>

        <Callout>{data.takeaway}</Callout>
        </>
        )}

        <div style={{ marginTop: 20 }}>
          <CircleButton icon="back" tone="black" label="Back" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

window.CaseStudy = CaseStudy;
