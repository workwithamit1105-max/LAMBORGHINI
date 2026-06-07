const testimonials = [
  {
    name: 'MARCUS VOSS',
    role: 'COLLECTOR & RACER',
    quote:
      'THE HURACÁN STO HAS RUINED EVERY OTHER CAR FOR ME. NOTHING ELSE FEELS ALIVE IN THE SAME WAY.',
    owns: 'HURACÁN STO',
  },
  {
    name: 'ELENA ROSSI',
    role: 'AUTOMOTIVE JOURNALIST',
    quote:
      'THE REVUELTO IS NOT A HYBRID COMPROMISE. IT IS THE FUTURE OF DRIVING, AND IT IS TERRIFYING IN THE BEST POSSIBLE WAY.',
    owns: 'REVUELTO',
  },
  {
    name: 'JAMES BLACKWOOD',
    role: 'VENTURE CAPITALIST',
    quote:
      'THE URUS PERFORMANTE IS MY DAILY DRIVER. MY CHILDREN THINK EVERY SCHOOL RUN SHOULD INVOLVE A LAUNCH CONTROL.',
    owns: 'URUS PERFORMANTE',
  },
  {
    name: 'SOFIA MARCHETTI',
    role: 'DESIGN DIRECTOR',
    quote:
      'I CHOSE MY LAMBORGHINI FOR ITS DESIGN FIRST. THEN I DROVE IT. NOW I CHOOSE IT FOR BOTH.',
    owns: 'SIÁN ROADSTER',
  },
]

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-void)',
        padding: 'clamp(80px,10vw,140px) 0',
      }}
    >
      {/* Header */}
      <div style={{ padding: '0 clamp(24px,6vw,96px)', marginBottom: 48 }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 28, height: 1, backgroundColor: 'var(--accent)' }} />
          <span
            style={{
              fontSize: 9,
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              fontFamily: 'var(--font-body)',
            }}
          >
            TESTIMONIALS
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px,6vw,80px)',
            color: 'var(--text-white)',
            margin: 0,
            lineHeight: 0.9,
          }}
        >
          THOSE WHO DRIVE.
        </h2>
      </div>

      {/* Horizontal Scroll Rail */}
      <div
        className="scrollbar-hide"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 16,
          padding: '0 clamp(24px,6vw,96px) 32px',
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="card-dark"
            style={{
              flexShrink: 0,
              width: 'clamp(300px,35vw,400px)',
              scrollSnapAlign: 'start',
              borderRadius: 2,
              padding: 36,
            }}
          >
            {/* Quote Mark */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 64,
                color: 'var(--accent)',
                lineHeight: 0.6,
                marginBottom: 8,
              }}
            >
              &ldquo;
            </div>

            {/* Quote Text */}
            <p
              style={{
                fontStyle: 'italic',
                fontSize: 13,
                lineHeight: 1.85,
                color: 'var(--text-muted)',
                marginBottom: 24,
                fontFamily: 'var(--font-body)',
              }}
            >
              {t.quote}
            </p>

            {/* Divider */}
            <div
              style={{
                width: 20,
                height: 1,
                backgroundColor: 'var(--accent)',
                marginBottom: 20,
              }}
            />

            {/* Name */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                letterSpacing: '0.08em',
                marginBottom: 4,
                color: 'var(--text-white)',
              }}
            >
              {t.name}
            </div>

            {/* Role */}
            <div
              style={{
                fontSize: 9,
                letterSpacing: '0.2em',
                color: 'var(--text-faint)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
