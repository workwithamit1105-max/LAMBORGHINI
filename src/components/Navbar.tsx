import { useState, useEffect } from 'react';

interface NavbarProps {
  menuOpen: boolean;
  onToggle: () => void;
  onConfigOpen: () => void;
  onHeritageOpen: () => void;
  onModelsPageOpen: () => void;
}

const navLinks = ['MODELS', 'HERITAGE', 'MOTORSPORT', 'CONFIGURE', 'OWNERSHIP'] as const;

export default function Navbar({
  menuOpen,
  onToggle,
  onConfigOpen,
  onHeritageOpen,
  onModelsPageOpen,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    if (link === 'MODELS') onModelsPageOpen();
    else if (link === 'HERITAGE') onHeritageOpen();
    else if (link === 'CONFIGURE') onConfigOpen();
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {/* LEFT — Logo block */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8a020"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4c-1.5 0-3 .8-4.2 2C6.2 7.8 5 10 5 12c0 1.5.5 2.8 1.5 3.8.8.8 2 1.2 3 1.2h5c1 0 2.2-.4 3-1.2C18.5 14.8 19 13.5 19 12c0-2-1.2-4.2-2.8-6C15 4.8 13.5 4 12 4z" />
          <path d="M8 14c.5-1 1.5-3 4-3s3.5 2 4 3" />
          <path d="M5 12c-1.5-.5-2.5-1-3-1.5" />
          <path d="M19 12c1.5-.5 2.5-1 3-1.5" />
          <path d="M12 4V2" />
          <path d="M10 5L9 3" />
          <path d="M14 5l1-2" />
        </svg>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            letterSpacing: '0.06em',
            color: 'var(--text-white)',
          }}
        >
          LAMBORGHINI
        </span>
      </div>

      {/* CENTER — Nav links (hidden below 1024px) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
        className="nav-links-center"
      >
        <style>{`
          @media (max-width: 1023px) {
            .nav-links-center { display: none !important; }
          }
        `}</style>
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link);
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--text-white)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--text-muted)')
            }
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* RIGHT — Configure button + Hamburger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button
          className="btn-amber"
          onClick={onConfigOpen}
          style={{
            fontSize: 10,
            padding: '10px 22px',
            opacity: menuOpen ? 0 : 1,
            pointerEvents: menuOpen ? 'none' : 'auto',
            transition: 'opacity 0.3s',
          }}
        >
          CONFIGURE YOURS
        </button>

        {/* Hamburger icon */}
        <button
          onClick={onToggle}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            padding: 6,
          }}
        >
          <span
            style={{
              display: 'block',
              width: 22,
              height: 1.5,
              background: 'var(--accent)',
              borderRadius: 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 1.5,
              background: 'var(--accent)',
              borderRadius: 1,
            }}
          />
        </button>
      </div>
    </nav>
  );
}
