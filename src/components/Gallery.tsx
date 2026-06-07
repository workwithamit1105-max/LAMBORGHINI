import { useState } from 'react';
import { motion } from 'motion/react';

const cells = [
  { src: '/assets/gallery-1.jpg', gridColumn: 'span 1', gridRow: undefined, height: 280 },
  { src: '/assets/gallery-2.jpg', gridColumn: 'span 2', gridRow: undefined, height: 280 },
  { src: '/assets/gallery-3.jpg', gridColumn: 'span 1', gridRow: 'span 2', height: '100%', minHeight: 568 },
  { src: '/assets/gallery-4.jpg', gridColumn: 'span 3', gridRow: undefined, height: 280 },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-surface)',
        padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
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
            GALLERY
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 96px)',
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            color: 'var(--text-white)',
          }}
        >
          SEEN FROM
          <br />
          EVERY ANGLE.
        </h2>
      </div>

      {/* Masonry Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 8,
        }}
      >
        {cells.map((cell, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              gridColumn: cell.gridColumn,
              gridRow: cell.gridRow,
              height: typeof cell.height === 'number' ? cell.height : cell.height,
              minHeight: (cell as any).minHeight,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={cell.src}
              alt=""
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 1.2s ease-out',
                transform: hoveredIndex === i ? 'scale(1.06)' : 'scale(1)',
              }}
            />
            {/* Hover overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(232,160,32,0.08)',
                border: '1px solid rgba(232,160,32,0.3)',
                opacity: hoveredIndex === i ? 1 : 0,
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
