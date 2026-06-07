import { motion } from 'motion/react'

const pillars = [
  { title: 'DESIGN', body: 'Form follows fury. Every surface cut to command attention.' },
  { title: 'SPEED', body: 'Engineered without compromise. Built for those who demand more.' },
  { title: 'LEGACY', body: 'Six decades of defiance. A heritage built on breaking rules.' },
]

export default function Heritage() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/assets/manifesto-bg.mp4"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(6,6,7,0.6) 0%, rgba(6,6,7,0.3) 50%, rgba(6,6,7,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          minHeight: '100vh',
          alignContent: 'center',
        }}
      >
        {/* Left Column */}
        <div>
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
              HERITAGE
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px,6vw,80px)',
              lineHeight: 0.9,
              color: 'var(--text-white)',
              margin: 0,
            }}
            dangerouslySetInnerHTML={{
              __html: 'SIXTY YEARS<br/>OF FURY<br/>AND <em>ELEGANCE</em>.',
            }}
          />

          {/* Paragraph */}
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.85,
              color: 'var(--text-muted)',
              maxWidth: 360,
              marginTop: 24,
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.06em',
            }}
          >
            In 1963, Ferruccio Lamborghini built a car to settle a personal argument. What he
            created was an obsession. Six decades later, that argument is still the most beautiful
            one in automotive history.
          </p>

          {/* Button */}
          <button className="btn-ghost" style={{ marginTop: 32 }}>
            OUR STORY
          </button>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >


          {/* Pillar Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 12,
              marginTop: 24,
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass"
                style={{ padding: '20px 16px', borderRadius: 2 }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    marginBottom: 8,
                    color: 'var(--text-white)',
                  }}
                >
                  {pillar.title}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {pillar.body}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
