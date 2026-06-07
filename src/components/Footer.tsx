const modelLinks = ['Huracán STO', 'Urus Performante', 'Revuelto', 'Sián Roadster']
const brandLinks = ['Heritage', 'Motorsport', 'Ad Personam', 'Squadra Corse', 'Press']

const linkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 9,
  letterSpacing: '0.2em',
  color: 'var(--text-faint)',
  textDecoration: 'none',
  marginBottom: 12,
  fontFamily: 'var(--font-body)',
}

const columnHeaderStyle: React.CSSProperties = {
  fontSize: 8,
  letterSpacing: '0.35em',
  color: 'var(--accent)',
  marginBottom: 20,
  fontFamily: 'var(--font-body)',
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/assets/exhaust-loop.mp4"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(6,6,7,0.4) 0%, rgba(6,6,7,0.6) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)',
        }}
      >
        {/* 3-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            gap: 80,
          }}
        >
          {/* Column 1: Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Bull SVG */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4 C12 4 6 8 4 14 C2 20 4 26 8 28 C10 29 13 28 16 24 C19 28 22 29 24 28 C28 26 30 20 28 14 C26 8 20 4 16 4Z" />
                <path d="M12 14 L10 18" />
                <path d="M20 14 L22 18" />
                <path d="M14 20 C15 21 17 21 18 20" />
                <path d="M4 14 L1 10" />
                <path d="M28 14 L31 10" />
              </svg>

              {/* Wordmark */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  letterSpacing: '0.06em',
                  color: 'var(--text-white)',
                }}
              >
                LAMBORGHINI
              </span>
            </div>
            <p
              style={{
                fontSize: 9,
                letterSpacing: '0.28em',
                color: 'var(--text-faint)',
                marginTop: 16,
                fontFamily: 'var(--font-body)',
              }}
            >
              SINCE 1963. UNCOMPROMISING.
            </p>
          </div>

          {/* Column 2: Models */}
          <div>
            <div style={columnHeaderStyle}>MODELS</div>
            {modelLinks.map((link) => (
              <a key={link} href="#" style={linkStyle}>
                {link}
              </a>
            ))}
          </div>

          {/* Column 3: Brand */}
          <div>
            <div style={columnHeaderStyle}>BRAND</div>
            {brandLinks.map((link) => (
              <a key={link} href="#" style={linkStyle}>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: '1px solid var(--border-dim)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 8,
              color: 'var(--text-faint)',
              letterSpacing: '0.18em',
              fontFamily: 'var(--font-body)',
            }}
          >
            © 2025 AUTOMOBILI LAMBORGHINI S.P.A. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['PRIVACY', 'COOKIES', 'LEGAL'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 8,
                  color: 'var(--text-faint)',
                  letterSpacing: '0.18em',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
