import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const faqs = [
  {
    question: 'WHAT IS THE CURRENT FLAGSHIP MODEL?',
    answer:
      "The Lamborghini Revuelto is the company's flagship supercar, combining a naturally aspirated 6.5L V12 with three electric motors for a combined 1,015 CV. It succeeds the legendary Aventador.",
  },
  {
    question: 'HOW DO I CONFIGURE A LAMBORGHINI?',
    answer:
      'Every Lamborghini can be personalised through our Ad Personam programme. From exterior colour to bespoke interior materials — our team works with you from initial concept through to delivery.',
  },
  {
    question: 'IS THE URUS A REAL LAMBORGHINI?',
    answer:
      "Absolutely. The Urus Performante was engineered under the same Sant'Agata Bolognese philosophy as every other model in the range. It is the world's fastest series-production SUV.",
  },
  {
    question: 'HOW DO I EXPERIENCE A LAMBORGHINI BEFORE BUYING?',
    answer:
      'The Lamborghini Squadra Corse offers private track days, test drives, and factory tours for prospective buyers and existing owners. Contact your nearest dealer to arrange.',
  },
  {
    question: 'WHAT DOES OWNERSHIP INCLUDE?',
    answer:
      'Lamborghini ownership includes membership of the global Owners Club, access to exclusive events, priority on future allocations, and a dedicated aftersales team.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-void)',
        maxWidth: 760,
        margin: '0 auto',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
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
            FAQ
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px,5vw,64px)',
            color: 'var(--text-white)',
            margin: 0,
            lineHeight: 0.9,
          }}
          dangerouslySetInnerHTML={{ __html: 'WHAT YOU<br/>WANT TO KNOW.' }}
        />
      </div>

      {/* FAQ Items */}
      {faqs.map((faq, i) => {
        const open = openIndex === i
        return (
          <div key={i} className="faq-border">
            {/* Question Row */}
            <div
              onClick={() => setOpenIndex(open ? null : i)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer',
                padding: '20px 0',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: '0.14em',
                  color: open ? 'var(--text-white)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.3s',
                }}
              >
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  color: 'var(--accent)',
                  flexShrink: 0,
                  marginLeft: 16,
                }}
              >
                ▼
              </motion.span>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      lineHeight: 1.85,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.12em',
                      paddingBottom: 20,
                      margin: 0,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </section>
  )
}
