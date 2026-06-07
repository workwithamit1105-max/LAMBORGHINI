import { motion, AnimatePresence } from 'motion/react'

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

const timelineData = [
  { year: '1963', event: 'Ferruccio Lamborghini founds Automobili Lamborghini S.p.A in Sant\'Agata Bolognese. The 350 GT is the first model — already a masterpiece.' },
  { year: '1966', event: 'The Miura is unveiled, creating the concept of the mid-engine supercar. It redefines what a road car can be.' },
  { year: '1974', event: 'The Countach arrives. Its wedge form, scissor doors, and raw power make it the poster car of a generation — and the template for every Lamborghini since.' },
  { year: '1987', event: 'The LM002 previews the Urus by thirty years: a Lamborghini engineered for extreme versatility, not just the track.' },
  { year: '2001', event: 'The Murciélago launches the modern era: Audi Group investment brings precision engineering without compromising the Lamborghini soul.' },
  { year: '2011', event: 'The Aventador replaces the Murciélago, with a full carbon monocoque chassis and a 700 CV V12. It becomes the definitive supercar of its decade.' },
  { year: '2023', event: 'The Revuelto redefines the future: V12 + three electric motors, 1,015 CV, and a new chapter for one of the world\'s most extraordinary brands.' },
]

const values = [
  { title: 'STYLE', body: 'Form is never incidental. Every surface, every angle is a deliberate provocation — designed to arrest attention and refuse compromise.' },
  { title: 'VELOCITY', body: 'Speed is not a feature. It is the foundation. Every component exists to deliver a visceral, unfiltered connection to the road.' },
  { title: 'OBSESSION', body: 'No detail is too small. From the thread of each stitch to the calibration of each cylinder, perfection is pursued relentlessly.' },
  { title: 'HERITAGE', body: 'Six decades of defiance. Each Lamborghini carries the DNA of every model before it — a legacy forged in passion and engineering.' },
]

interface HeritagePageProps {
  isOpen: boolean
  onClose: () => void
}

export default function HeritagePage({ isOpen, onClose }: HeritagePageProps) {
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
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-muted)' }}>HERITAGE</span>
            </div>
            <button onClick={onClose} style={{
              padding: '8px 20px', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' as const,
              color: 'var(--text-muted)', background: 'transparent',
              border: '1px solid var(--border-dim)', borderRadius: 1,
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              transition: 'border-color 0.3s, color 0.3s',
            }}>× CLOSE</button>
          </div>

          {/* Section 1 — Hero Text */}
          <div style={{
            padding: 'clamp(48px,6vw,80px)',
            backgroundColor: 'var(--bg-void)',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '0.55fr 1fr',
              gap: 80, alignItems: 'start',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px,7vw,96px)',
                lineHeight: 0.88,
                color: 'var(--text-white)',
              }}>SIXTY YEARS.</h2>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 32,
              }}>
                {[
                  { number: '1963', label: 'FOUNDED' },
                  { number: '63+', label: 'MODELS' },
                  { number: '40,000+', label: 'CARS BUILT' },
                  { number: '9', label: 'CHAMPIONSHIPS' },
                ].map(stat => (
                  <div key={stat.label}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: 48,
                      color: 'var(--accent)', display: 'block', lineHeight: 1,
                    }}>{stat.number}</span>
                    <span style={{
                      fontSize: 9, letterSpacing: '0.2em',
                      color: 'var(--text-muted)', fontFamily: 'var(--font-body)',
                      marginTop: 4, display: 'block',
                    }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 — Ferruccio Quote */}
          <div style={{
            padding: 'clamp(32px,5vw,64px)',
            backgroundColor: 'var(--bg-surface)',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,4vw,52px)',
              lineHeight: 1.1,
              color: 'var(--text-white)',
              fontStyle: 'italic',
            }}>
              "IF I COULD DRIVE A FERRARI, JUST IMAGINE WHAT I COULD BUILD."
            </p>
            <span style={{
              fontSize: 10, color: 'var(--accent)',
              letterSpacing: '0.25em', marginTop: 20,
              display: 'block', fontFamily: 'var(--font-body)',
            }}>— FERRUCCIO LAMBORGHINI, 1963</span>
          </div>

          {/* Section 3 — Timeline */}
          <div style={{
            padding: 'clamp(32px,5vw,64px)',
            backgroundColor: 'var(--bg-void)',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px,4vw,56px)',
              color: 'var(--text-white)',
              marginBottom: 48,
            }}>THE MILESTONES.</h2>

            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr',
                  gap: 24, padding: '24px 0',
                  borderBottom: '1px solid var(--border-dim)',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 24,
                  color: 'var(--accent)', letterSpacing: '0.05em',
                }}>{item.year}</span>
                <p style={{
                  fontSize: 11, lineHeight: 1.85,
                  color: 'var(--text-muted)', letterSpacing: '0.1em',
                  fontFamily: 'var(--font-body)',
                }}>{item.event}</p>
              </motion.div>
            ))}
          </div>

          {/* Section 4 — Values */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            padding: 'clamp(32px,5vw,64px)',
            backgroundColor: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-dim)',
            gap: 24,
          }}>
            {values.map(v => (
              <div key={v.title} style={{ borderTop: '2px solid var(--accent)', paddingTop: 20 }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 24,
                  color: 'var(--text-white)', marginBottom: 10,
                }}>{v.title}</h3>
                <p style={{
                  fontSize: 10, lineHeight: 1.8,
                  color: 'var(--text-muted)', fontFamily: 'var(--font-body)',
                }}>{v.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
