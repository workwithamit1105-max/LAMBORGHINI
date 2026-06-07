import { motion, AnimatePresence } from 'motion/react'
import { models } from '../data/models'

function BullSvg({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8 C2 8 4 2 7 4 C8 5 8 7 9 8 L12 10 L15 8 C16 7 16 5 17 4 C20 2 22 8 22 8" />
      <path d="M7 4 C5 6 4 10 5 14 C6 17 9 20 12 21 C15 20 18 17 19 14 C20 10 19 6 17 4" />
      <path d="M9 12 L12 15 L15 12" />
      <circle cx="9" cy="9" r="0.5" fill="#e8a020" />
      <circle cx="15" cy="9" r="0.5" fill="#e8a020" />
    </svg>
  )
}

interface ModelsPageProps {
  isOpen: boolean
  onClose: () => void
}

export default function ModelsPage({ isOpen, onClose }: ModelsPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'var(--bg-void)', overflowY: 'auto',
          }}
        >
          {/* Sticky Header */}
          <div style={{
            position: 'sticky', top: 0, zIndex: 10, height: 68,
            backgroundColor: 'rgba(6,6,7,0.92)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            borderBottom: '1px solid var(--border-dim)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 clamp(24px,5vw,80px)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <BullSvg />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '0.06em', color: 'var(--text-white)' }}>LAMBORGHINI</span>
              <span style={{ color: 'var(--text-faint)', fontSize: 12 }}>/</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-muted)' }}>MODELS</span>
            </div>
            <button onClick={onClose} style={{
              padding: '8px 20px', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' as const,
              color: 'var(--text-muted)', background: 'transparent',
              border: '1px solid var(--border-dim)', borderRadius: 1,
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              transition: 'border-color 0.3s, color 0.3s',
            }}>× CLOSE</button>
          </div>

          {/* Intro */}
          <div style={{
            padding: 'clamp(48px,6vw,80px)',
            borderBottom: '1px solid var(--border-dim)',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px,6vw,80px)',
              color: 'var(--text-white)',
            }}>THE COMPLETE LINEUP.</h2>
            <p style={{
              fontSize: 12, color: 'var(--text-muted)',
              letterSpacing: '0.12em', marginTop: 12,
              fontFamily: 'var(--font-body)',
            }}>Four extraordinary machines. One philosophy.</p>
          </div>

          {/* Model Rows */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {models.map((model, i) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                style={{
                  display: 'contents',
                }}
              >
                {/* Left - Text */}
                <div style={{
                  minHeight: 320, position: 'relative', overflow: 'hidden',
                  backgroundColor: 'var(--bg-surface)', padding: 48,
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                }}>
                  {/* Ghost Number */}
                  <span style={{
                    position: 'absolute', top: 24, left: 48,
                    fontFamily: 'var(--font-display)', fontSize: 80,
                    color: 'rgba(240,237,232,0.04)', lineHeight: 1,
                  }}>{model.number}</span>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    {/* Category */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: model.accentColor, display: 'inline-block' }} />
                      <span style={{ fontSize: 9, letterSpacing: '0.35em', color: model.accentColor, fontFamily: 'var(--font-body)' }}>{model.category}</span>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,56px)',
                      color: 'var(--text-white)', letterSpacing: '0.03em', lineHeight: 0.9, marginBottom: 12,
                    }}>{model.name}</h3>

                    <p style={{
                      fontFamily: 'var(--font-body)', fontStyle: 'italic',
                      fontSize: 13, color: 'var(--text-muted)',
                      letterSpacing: '0.08em', marginBottom: 24,
                    }}>{model.tagline}</p>

                    {/* Quick Specs */}
                    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                      {Object.entries(model.specs).map(([key, value]) => (
                        <div key={key}>
                          <span style={{ fontSize: 8, letterSpacing: '0.3em', color: 'var(--text-faint)', display: 'block', fontFamily: 'var(--font-body)', marginBottom: 3, textTransform: 'uppercase' as const }}>{key.toUpperCase()}</span>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: model.accentColor, letterSpacing: '0.04em' }}>{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Full Specs Table */}
                    <div style={{ marginTop: 24 }}>
                      {Object.entries(model.fullSpecs).map(([key, value]) => (
                        <div key={key} className="spec-row" style={{
                          display: 'flex', justifyContent: 'space-between',
                          alignItems: 'center', padding: '10px 0',
                        }}>
                          <span style={{ fontSize: 9, letterSpacing: '0.15em', color: 'var(--text-faint)', fontFamily: 'var(--font-body)' }}>{key.toUpperCase()}</span>
                          <span style={{ fontSize: 10, letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Image */}
                <div style={{
                  minHeight: 320, position: 'relative', overflow: 'hidden',
                  backgroundColor: model.color,
                }}>
                  <img
                    src={model.image}
                    alt={model.name}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
