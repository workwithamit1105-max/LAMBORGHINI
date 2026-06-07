import { motion } from 'motion/react';

const cards = [
  {
    number: '01',
    category: 'TRACK DAYS',
    title: 'DRIVE LIKE A CHAMPION',
    body: 'Private track days at circuits across Europe with professional instruction and full hospitality.',
  },
  {
    number: '02',
    category: 'BESPOKE',
    title: 'AD PERSONAM',
    body: 'Complete exterior and interior personalisation. Colour, materials, stitching, trim — your vision, our craft.',
  },
  {
    number: '03',
    category: 'OWNERSHIP',
    title: 'CLUB LAMBORGHINI',
    body: 'Members-only events, priority allocation on new models, factory visits, and a community of fellow enthusiasts.',
  },
];

export default function Experience() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        src="/assets/experience-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 36,
              height: 2,
              background:
                'linear-gradient(90deg, var(--accent), var(--accent-hot))',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              color: 'rgba(232,160,32,0.8)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
            }}
          >
            THE LAMBORGHINI EXPERIENCE
          </span>
        </div>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 96px)',
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            color: 'var(--text-white)',
          }}
        >
          MORE THAN
          <br />
          A CAR.
          <br />
          <em style={{ fontStyle: 'italic' }}>A WORLD.</em>
        </h2>

        {/* EXPERIENCE CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 56,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              className="glass-mid"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: 28,
                borderRadius: 2,
              }}
            >
              {/* Large Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 48,
                  color: 'rgba(232,160,32,0.1)',
                  lineHeight: 1,
                }}
              >
                {card.number}
              </div>

              {/* Category */}
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.35em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                  marginBottom: 12,
                }}
              >
                {card.category}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  color: 'var(--text-white)',
                  marginBottom: 12,
                }}
              >
                {card.title}
              </div>

              {/* Body */}
              <div
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.12em',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {card.body}
              </div>

              {/* Learn More */}
              <div
                style={{
                  fontSize: 9,
                  color: 'var(--accent)',
                  marginTop: 20,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                LEARN MORE →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
