import { motion } from 'motion/react';

const specRows = [
  { label: '0–100 KM/H', value: '2.5 SECONDS' },
  { label: 'TOP SPEED', value: '350 KM/H' },
  { label: 'SYSTEM POWER', value: '1,015 CV' },
  { label: 'DOWNFORCE', value: '900 KG' },
  { label: 'WEIGHT', value: '1,772 KG' },
  { label: 'PRODUCTION', value: 'LIMITED' },
];

export default function PerformanceSpecs() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>
      <video
        src="/assets/reveal-industrial.mp4"
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
          objectPosition: 'center top',
          filter: 'brightness(0.65)',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(6,6,7,0.85) 0%, rgba(6,6,7,0.3) 60%, rgba(6,6,7,0.0) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 80,
          alignItems: 'center',
        }}
      >
        {/* LEFT */}
        <div>
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
              BY THE NUMBERS
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
              marginBottom: 24,
            }}
          >
            NUMBERS DON'T
            <br />
            LIE. THESE
            <br />
            DO.
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              fontFamily: 'var(--font-body)',
              marginBottom: 32,
              maxWidth: 420,
            }}
          >
            Every specification is engineered beyond the limit.
            Performance isn't a feature — it's the foundation.
          </p>

          <button className="btn-amber">VISIT THE TRACK</button>
        </div>

        {/* RIGHT — Spec Rows */}
        <div>
          {specRows.map((spec, i) => (
            <motion.div
              key={spec.label}
              className="spec-row"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                padding: '24px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                }}
              >
                {spec.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px,2.5vw,32px)',
                  color: 'var(--accent)',
                }}
              >
                {spec.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
