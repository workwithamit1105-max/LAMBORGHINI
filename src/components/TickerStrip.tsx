const items = [
  'HURACÁN STO',
  'REVUELTO',
  'URUS PERFORMANTE',
  'SIÁN ROADSTER',
  'LAMBORGHINI MOTORSPORT',
  '0–100 IN 2.8S',
  'V12 HYBRID FLAGSHIP',
  'EST. 1963',
];

function TickerItems() {
  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 40,
            paddingRight: 40,
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.3em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            {item}
          </span>
          <span style={{ color: 'var(--accent)', fontSize: 8 }}>✦</span>
        </span>
      ))}
    </>
  );
}

export default function TickerStrip() {
  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-dim)',
        borderBottom: '1px solid var(--border-dim)',
        zIndex: 15,
        position: 'relative',
        height: 44,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="ticker-inner" style={{ display: 'flex' }}>
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}
