import { motion } from 'motion/react'

const chips = [
  { label: 'CHOOSE COLOUR', top: '25%', left: '15%' },
  { label: 'SELECT INTERIOR', top: '40%', left: '55%' },
  { label: 'ADD CARBON PACK', top: '60%', left: '20%' },
  { label: 'PERSONALISE WHEELS', top: '75%', left: '50%' },
]

interface ConfiguratorTeaserProps {
  onConfigOpen: () => void
}

export default function ConfiguratorTeaser({ onConfigOpen }: ConfiguratorTeaserProps) {
  return (
    <section style={{ backgroundColor: 'var(--bg-surface)', overflow: 'hidden' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '50vh',
        }}
      >
        {/* Left Panel */}
        <div
          style={{
            backgroundColor: 'var(--accent)',
            padding: 'clamp(48px,6vw,88px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px,7vw,96px)',
              color: '#060607',
              lineHeight: 0.88,
              margin: 0,
            }}
          >
            BUILD YOURS.
          </h2>
          <p
            style={{
              fontSize: 12,
              letterSpacing: '0.15em',
              color: 'rgba(6,6,7,0.65)',
              marginTop: 16,
              fontFamily: 'var(--font-body)',
            }}
          >
            Every Lamborghini is unique. Your specification begins here.
          </p>
          <button
            className="btn-amber"
            style={{
              background: '#060607',
              color: 'var(--accent)',
              marginTop: 32,
            }}
            onClick={onConfigOpen}
          >
            CONFIGURE NOW
          </button>
        </div>

        {/* Right Panel */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#0c0a00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video
            src="/assets/wheel-assembly.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'translateZ(0)', willChange: 'transform', filter: 'brightness(0.3) contrast(1.2)' }}
          />
          {/* Radial gradient background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background:
                'radial-gradient(circle at center, rgba(232,160,32,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Large background text */}
          <span
            style={{
              position: 'absolute',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(80px,12vw,160px)',
              color: 'rgba(232,160,32,0.04)',
              userSelect: 'none',
            }}
          >
            BUILD
          </span>

          {/* Floating chips */}
          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              className="glass-mid"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                top: chip.top,
                left: chip.left,
                padding: '12px 20px',
                borderRadius: 2,
                fontSize: 9,
                letterSpacing: '0.2em',
                color: 'var(--text-white)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {chip.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
