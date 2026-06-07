import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
  },
} as const;

const specs = [
  { label: '0–100 KM/H', value: '2.8S' },
  { label: 'TOP SPEED', value: '355 KM/H' },
  { label: 'HORSEPOWER', value: '850 HP' },
];

export default function Hero({ menuOpen }: { menuOpen: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setPhase((p) => (p + 1) % 3);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      {/* FIXED VIDEO BACKGROUND */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          src="/assets/hero-main.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />
        {/* Overlay 1 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(6,6,7,0.92) 0%, rgba(6,6,7,0.55) 50%, rgba(6,6,7,0.1) 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Overlay 2 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(6,6,7,0.7) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? 'visible' : 'hidden'}
          style={{
            position: 'absolute',
            top: '50%',
            left: 'clamp(24px, 7vw, 120px)',
            transform: 'translateY(-50%)',
            maxWidth: 'clamp(360px, 50vw, 680px)',
          }}
        >
          {/* EYEBROW */}
          <motion.div
            variants={itemVariants}
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
                height: 1,
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
              SINCE 1963 · SANT'AGATA BOLOGNESE
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.div variants={itemVariants}>
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(60px, 11vw, 148px)',
                  lineHeight: 0.88,
                  letterSpacing: '0.02em',
                  color: 'var(--text-white)',
                  textShadow: '0 2px 40px rgba(0,0,0,0.6)',
                }}
              >
                RAW POWER.
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(60px, 11vw, 148px)',
                  lineHeight: 0.88,
                  letterSpacing: '0.02em',
                  color: 'var(--text-white)',
                  textShadow: '0 2px 40px rgba(0,0,0,0.6)',
                }}
              >
                PURE FORM.
              </div>
            </div>
          </motion.div>

          {/* ITALIC SUBLINE */}
          <motion.div
            variants={itemVariants}
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(13px, 1.4vw, 18px)',
              letterSpacing: '0.08em',
              color: 'rgba(232,160,32,0.7)',
              marginBottom: 32,
              fontFamily: 'var(--font-body)',
            }}
          >
            BUILT FOR THOSE WHO REFUSE ORDINARY AT EVERY SPEED
          </motion.div>

          {/* BUTTONS ROW */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: 16,
              pointerEvents: 'auto',
            }}
          >
            <button className="btn-amber">EXPLORE MODELS</button>
            <button className="btn-ghost">WATCH FILM &nbsp;▶</button>
          </motion.div>
        </motion.div>
      </div>

      {/* SPEC STRIP */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0 clamp(24px,5vw,80px) 36px',
            gap: 48,
          }}
        >
          {specs.map((s) => (
            <div key={s.label} style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.35em',
                  color: 'var(--text-faint)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
