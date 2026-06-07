const publications = [
  'TOP GEAR',
  'MOTOR TREND',
  'AUTOCAR',
  'ENZO AUTOMOBILE',
  'ROBB REPORT',
  'CAR AND DRIVER',
]

export default function PressStrip() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-dim)',
        borderBottom: '1px solid var(--border-dim)',
        padding: 'clamp(24px,3vw,36px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Label */}
      <span
        style={{
          fontSize: 8,
          letterSpacing: '0.35em',
          color: 'var(--text-faint)',
          textAlign: 'center',
          display: 'block',
          marginBottom: 16,
          fontFamily: 'var(--font-body)',
        }}
      >
        AS FEATURED IN
      </span>

      {/* Press Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px 28px',
        }}
      >
        {publications.map((pub, i) => (
          <span key={pub} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {i > 0 && (
              <span
                style={{
                  color: 'rgba(240,237,232,0.12)',
                  fontSize: 9,
                  fontFamily: 'var(--font-body)',
                }}
              >
                ·
              </span>
            )}
            <span
              style={{
                fontSize: 9,
                letterSpacing: '0.3em',
                color: 'var(--text-faint)',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              {pub}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
