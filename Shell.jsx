// Shell — the consumption-aware (deep) home: intro, selected case studies, bio timeline.
const NS = window.PabloUrrutiaGridAwarePortfolioDS_6b21cb;
const { GridAwareLockup, TimelineItem, Eyebrow, Tag, CircleButton } = NS;

function CaseRow({ c, onOpen }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={() => onOpen(c.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: '100%', textAlign: 'left', cursor: 'pointer',
        background: hover ? 'rgba(233,99,26,0.10)' : 'transparent',
        border: 'none', borderTop: '1px solid var(--hairline-dark)',
        borderLeft: `3px solid ${hover ? 'var(--accent)' : 'transparent'}`,
        padding: '18px 16px 18px 18px',
        display: 'flex', alignItems: 'center', gap: 14,
        transition: 'background 140ms ease, border-color 140ms ease',
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6,
        }}>{c.eyebrow}</div>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19,
          color: 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1.18,
        }}>{c.title}</div>
      </div>
      <span aria-hidden style={{
        color: hover ? 'var(--accent)' : 'var(--text-faint)',
        fontSize: 22, transform: hover ? 'translateX(3px)' : 'none',
        transition: 'transform 120ms ease, color 120ms ease',
      }}>→</span>
    </button>
  );
}

function ModeToggle({ mode, onToggle }) {
  const opts = [['common', 'Full'], ['grid-aware', 'Simple']];
  return (
    <div style={{
      display: 'inline-flex', border: '1px solid var(--hairline-dark)',
      borderRadius: 'var(--radius-pill)', padding: 3, gap: 2,
    }}>
      {opts.map(([val, label]) => {
        const on = mode === val;
        return (
          <button key={val} type="button" onClick={() => !on && onToggle()}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
              padding: '5px 11px', borderRadius: 'var(--radius-pill)', border: 'none',
              background: on ? 'var(--accent)' : 'transparent',
              color: on ? 'var(--on-accent)' : 'var(--text-faint)',
              transition: 'background 140ms ease, color 140ms ease',
            }}>{label}</button>
        );
      })}
    </div>
  );
}

function Shell({ onOpenCase, mode = 'common', onToggleMode }) {
  const D = window.PORTFOLIO_DATA;
  const simple = mode === 'grid-aware';
  return (
    <div style={{ background: 'var(--canvas)', minHeight: '100%', color: 'var(--cream)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 390, margin: '0 auto', padding: '28px 24px 40px' }}>

        {/* header mark */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
          <img src="assets/logo-anchor-cut.png" alt="Pablo Urrutia anchor mark" style={{ height: 46 }} />
          <ModeToggle mode={mode} onToggle={onToggleMode} />
        </div>

        {/* intro hero */}
        <h1 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: simple ? 400 : 700,
          fontSize: simple ? 38 : 46, lineHeight: 1.05, letterSpacing: simple ? '0' : '-0.025em',
        }}>
          {D.intro.greetingTop}<br />
          <span style={{ color: 'var(--accent)' }}>{D.intro.greetingAccent}</span>
        </h1>
        <p style={{
          margin: '22px 0 0', fontSize: 16, lineHeight: 1.5,
          color: 'var(--text-secondary)',
        }}>{simple ? D.intro.blurbSimple : D.intro.blurb}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
          {D.intro.tags.map((t) => <Tag key={t} tone="outline">{t}</Tag>)}
        </div>

        {/* selected case studies */}
        <div style={{ marginTop: 48 }}>
          <Eyebrow marker tone="cream">Selected case studies</Eyebrow>
          <div style={{ marginTop: 14, borderBottom: '1px solid var(--hairline-dark)' }}>
            {D.cases.map((c) => <CaseRow key={c.id} c={c} onOpen={onOpenCase} />)}
          </div>
        </div>

        {/* bio & education */}
        <div style={{ marginTop: 52 }}>
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 36, letterSpacing: '-0.02em',
          }}>Bio &amp; Education</h2>
          <div style={{ height: 1, background: 'var(--cream)', margin: '16px 0 18px' }} />
          <div style={{ marginBottom: 14 }}>
            <Eyebrow marker tone="cream">Click the work boxes to see more ↓</Eyebrow>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {D.timeline.map((t, i) => (
              <TimelineItem
                key={i}
                year={t.year}
                title={t.title}
                org={t.org}
                category={t.category}
                span={t.span}
                onClick={t.caseId ? () => onOpenCase(t.caseId) : undefined}
                style={{ marginBottom: 10 }}
              />
            ))}
          </div>
        </div>

        {/* footer lockup */}
        <div style={{ marginTop: 52, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
            Drinking unhealthy amounts of coffee to keep this prototype fresh. Write to me if you need anything.
          </p>
          <GridAwareLockup surface="dark" scale={0.85} />
        </div>

      </div>
    </div>
  );
}

window.Shell = Shell;
