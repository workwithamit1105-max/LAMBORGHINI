import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { models } from '../data/models'

const colours = [
  { hex: '#0a0a0a', name: 'Nero Aldebaran' },
  { hex: '#1a1a2e', name: 'Blu Sideris' },
  { hex: '#3d1a00', name: 'Arancio Borealis' },
  { hex: '#f0f0e8', name: 'Bianco Monocerus' },
  { hex: '#7a0000', name: 'Rosso Mars' },
  { hex: '#2a2a2a', name: 'Grigio Telesto' },
  { hex: '#1a2800', name: 'Verde Scandal' },
  { hex: '#4a3a00', name: 'Giallo Inti' },
  { hex: '#c0a060', name: 'Oro Elios' },
]

const interiors = [
  { id: 'black', name: 'BLACK', material: 'NERO ADAS', swatch: '#0a0a0a' },
  { id: 'tan', name: 'TAN', material: 'CUOIO NATURALE', swatch: '#a0784a' },
  { id: 'red', name: 'RED', material: 'ROSSO ALALA', swatch: '#7a0000' },
]

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

interface ConfiguratorProps {
  isOpen: boolean
  onClose: () => void
}

export default function Configurator({ isOpen, onClose }: ConfiguratorProps) {
  const [selectedModel, setSelectedModel] = useState<string>('revuelto')
  const [selectedColor, setSelectedColor] = useState<string>('#1a1a2e')
  const [selectedColorName, setSelectedColorName] = useState<string>('Blu Sideris')
  const [selectedInterior, setSelectedInterior] = useState<string>('black')

  const currentModel = models.find(m => m.id === selectedModel) || models[2]
  const currentInterior = interiors.find(i => i.id === selectedInterior) || interiors[0]

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
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-muted)' }}>CONFIGURE</span>
            </div>
            <button onClick={onClose} style={{
              padding: '8px 20px', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' as const,
              color: 'var(--text-muted)', background: 'transparent',
              border: '1px solid var(--border-dim)', borderRadius: 1,
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              transition: 'border-color 0.3s, color 0.3s',
            }}>× CLOSE</button>
          </div>

          {/* Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 68px)' }}>
            {/* Left Panel */}
            <div style={{ backgroundColor: 'var(--bg-surface)', padding: 48, overflowY: 'auto' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 40,
                color: 'var(--text-white)', marginBottom: 40
              }}>YOUR CONFIGURATION</h2>

              {/* Step 1 - Model */}
              <div style={{ marginBottom: 32 }}>
                <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--accent)', display: 'block', marginBottom: 16, fontFamily: 'var(--font-body)' }}>
                  01 / SELECT MODEL
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {models.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m.id)}
                      className={selectedModel === m.id ? '' : 'card-dark'}
                      style={{
                        padding: '10px 18px', borderRadius: 1, fontSize: 9,
                        letterSpacing: '0.2em', cursor: 'pointer',
                        fontFamily: 'var(--font-body)', textTransform: 'uppercase' as const,
                        border: selectedModel === m.id ? 'none' : undefined,
                        background: selectedModel === m.id ? 'var(--accent)' : undefined,
                        color: selectedModel === m.id ? '#060607' : 'var(--text-muted)',
                      }}
                    >{m.name}</button>
                  ))}
                </div>
              </div>

              {/* Step 2 - Colour */}
              <div style={{ marginBottom: 32 }}>
                <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--accent)', display: 'block', marginBottom: 16, fontFamily: 'var(--font-body)' }}>
                  02 / EXTERIOR COLOUR
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                  {colours.map(c => (
                    <button
                      key={c.hex}
                      onClick={() => { setSelectedColor(c.hex); setSelectedColorName(c.name) }}
                      style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: c.hex, cursor: 'pointer',
                        border: selectedColor === c.hex
                          ? '2px solid var(--accent)' : '2px solid transparent',
                        boxShadow: selectedColor === c.hex
                          ? '0 0 12px var(--accent-glow)' : 'none',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  {selectedColorName.toUpperCase()}
                </span>
              </div>

              {/* Step 3 - Interior */}
              <div style={{ marginBottom: 32 }}>
                <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--accent)', display: 'block', marginBottom: 16, fontFamily: 'var(--font-body)' }}>
                  03 / INTERIOR
                </span>
                <div style={{ display: 'flex', gap: 12 }}>
                  {interiors.map(int => (
                    <button
                      key={int.id}
                      onClick={() => setSelectedInterior(int.id)}
                      style={{
                        padding: 14, borderRadius: 1, cursor: 'pointer',
                        background: 'var(--bg-raised)',
                        border: selectedInterior === int.id
                          ? '1px solid var(--accent)' : '1px solid var(--border-dim)',
                        display: 'flex', alignItems: 'center', gap: 10,
                        transition: 'border-color 0.3s',
                      }}
                    >
                      <span style={{
                        width: 20, height: 20, borderRadius: '50%',
                        background: int.swatch, display: 'inline-block',
                      }} />
                      <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: 9, color: 'var(--text-white)', display: 'block', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}>{int.name}</span>
                        <span style={{ fontSize: 8, color: 'var(--text-faint)', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>{int.material}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="card-dark" style={{ padding: 24, marginTop: 40 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 9, color: 'var(--text-faint)', letterSpacing: '0.2em', fontFamily: 'var(--font-body)' }}>MODEL</span>
                  <span style={{ fontSize: 9, color: 'var(--text-white)', letterSpacing: '0.15em', fontFamily: 'var(--font-body)' }}>{currentModel.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 9, color: 'var(--text-faint)', letterSpacing: '0.2em', fontFamily: 'var(--font-body)' }}>COLOUR</span>
                  <span style={{ fontSize: 9, color: 'var(--text-white)', letterSpacing: '0.15em', fontFamily: 'var(--font-body)' }}>{selectedColorName.toUpperCase()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontSize: 9, color: 'var(--text-faint)', letterSpacing: '0.2em', fontFamily: 'var(--font-body)' }}>INTERIOR</span>
                  <span style={{ fontSize: 9, color: 'var(--text-white)', letterSpacing: '0.15em', fontFamily: 'var(--font-body)' }}>{currentInterior.material}</span>
                </div>
                <button className="btn-amber" style={{ width: '100%', justifyContent: 'center' }}>REQUEST A QUOTE</button>
              </div>
            </div>

            {/* Right Panel */}
            <div style={{
              position: 'sticky', top: 68, height: 'calc(100vh - 68px)',
              overflow: 'hidden', display: 'flex', alignItems: 'center',
              justifyContent: 'center', backgroundColor: '#0a0a0a',
            }}>
              <img
                src={currentModel.image}
                alt={currentModel.name}
                style={{ width: '90%', objectFit: 'contain' }}
              />
              {/* Colour overlay tint */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundColor: selectedColor, opacity: 0.12,
                mixBlendMode: 'color', pointerEvents: 'none',
              }} />
              {/* Bottom label */}
              <span style={{
                position: 'absolute', bottom: 40,
                fontFamily: 'var(--font-display)', fontSize: 32,
                color: 'var(--text-white)', letterSpacing: '0.06em',
              }}>{currentModel.name}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
