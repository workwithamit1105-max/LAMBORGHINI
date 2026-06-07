import { motion } from 'motion/react'
import { models } from '../data/models'

export default function ModelShowcase() {
  return (
    <section style={{ backgroundColor: 'var(--bg-void)', paddingTop: 'clamp(80px,10vw,140px)' }}>
      {/* Section Header */}
      <div style={{ padding: '0 clamp(24px,6vw,96px)', marginBottom: 'clamp(48px,6vw,80px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div className="accent-line" />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.35em',
            color: 'var(--accent)', textTransform: 'uppercase'
          }}>THE LINEUP</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,8vw,112px)',
          lineHeight: 0.9, letterSpacing: '0.02em', color: 'var(--text-white)'
        }}>
          CHOOSE YOUR<br />WEAPON.
        </h2>
      </div>

      {/* Model Blocks */}
      {models.map((model, index) => {
        const reversed = index % 2 === 1

        return (
          <div
            key={model.id}
            className="model-card"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '90vh',
              cursor: 'pointer',
            }}
          >
            {/* Left Panel (text) or Right Panel (image) based on reversed */}
            {reversed ? (
              <>
                <ImagePanel model={model} index={index} side="left" />
                <TextPanel model={model} index={index} side="right" />
              </>
            ) : (
              <>
                <TextPanel model={model} index={index} side="left" />
                <ImagePanel model={model} index={index} side="right" />
              </>
            )}
          </div>
        )
      })}
    </section>
  )
}

function TextPanel({ model, index, side }: { model: typeof models[0]; index: number; side: 'left' | 'right' }) {
  const xInit = side === 'left' ? -40 : 40

  return (
    <motion.div
      initial={{ opacity: 0, x: xInit }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      style={{
        backgroundColor: model.color,
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(48px,6vw,88px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        order: side === 'left' ? 0 : 1,
      }}
    >
      {/* Ghost Number */}
      <span className="model-number">{model.number}</span>

      {/* Model Info */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Category Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: model.accentColor, display: 'inline-block'
          }} />
          <span style={{
            fontSize: 9, letterSpacing: '0.35em',
            color: model.accentColor, textTransform: 'uppercase',
            fontFamily: 'var(--font-body)'
          }}>{model.category}</span>
        </div>

        {/* Model Name */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px,5vw,80px)',
          color: 'var(--text-white)',
          letterSpacing: '0.03em',
          lineHeight: 0.9,
          marginBottom: 16,
        }}>{model.name}</h3>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: 'clamp(13px,1.2vw,16px)',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          marginBottom: 32,
        }}>{model.tagline}</p>

        {/* Spec Row */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 40, flexWrap: 'wrap' }}>
          {Object.entries(model.specs).map(([key, value]) => (
            <div key={key}>
              <span style={{
                fontSize: 8, letterSpacing: '0.3em',
                color: 'var(--text-faint)', display: 'block',
                textTransform: 'uppercase', fontFamily: 'var(--font-body)',
                marginBottom: 4
              }}>{key.toUpperCase()}</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                color: model.accentColor,
                letterSpacing: '0.04em'
              }}>{value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            className="btn-amber"
            style={{ borderColor: model.accentColor, background: model.accentColor }}
          >EXPLORE</button>
          <button className="btn-ghost">FULL SPECS</button>
        </div>
      </div>
    </motion.div>
  )
}

function ImagePanel({ model, index, side }: { model: typeof models[0]; index: number; side: 'left' | 'right' }) {
  const xInit = side === 'right' ? 40 : -40

  return (
    <motion.div
      initial={{ opacity: 0, x: xInit }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
      viewport={{ once: true, margin: '-100px' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: model.color,
        order: side === 'right' ? 1 : 0,
      }}
    >
      <img
        src={model.image}
        alt={model.name}
        loading="lazy"
        decoding="async"
        className="model-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
      {/* Bottom gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        background: 'linear-gradient(to top, rgba(6,6,7,0.9) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </motion.div>
  )
}
