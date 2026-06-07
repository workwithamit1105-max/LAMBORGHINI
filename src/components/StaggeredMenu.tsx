import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface StaggeredMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onModelsPageOpen: () => void;
  onHeritageOpen: () => void;
}

const menuItems = [
  'HOME',
  'MODELS',
  'REVUELTO',
  'URUS',
  'HURACÁN',
  'HERITAGE',
  'CONTACT',
] as const;

const socialLinks = ['Instagram', 'YouTube', 'Facebook', 'LinkedIn'] as const;

export default function StaggeredMenu({
  isOpen,
  onToggle,
  onModelsPageOpen,
  onHeritageOpen,
}: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const handleItemClick = (item: string) => {
    if (item === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onToggle();
    } else if (item === 'MODELS') {
      onModelsPageOpen();
      onToggle();
    } else if (item === 'HERITAGE') {
      onHeritageOpen();
      onToggle();
    }
  };

  useEffect(() => {
    const panel = panelRef.current;
    const pl1 = prelayer1Ref.current;
    const pl2 = prelayer2Ref.current;
    const items = navItemsRef.current.filter(Boolean) as HTMLAnchorElement[];

    if (!panel || !pl1 || !pl2) return;

    if (isOpen) {
      // Kill any existing timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Prelayer 1: slide in from right
      tl.fromTo(
        pl1,
        { x: '100%' },
        { x: '0%', duration: 0.55, ease: 'power4.out' },
        0
      );

      // Prelayer 2: slide in from right
      tl.fromTo(
        pl2,
        { x: '100%' },
        { x: '0%', duration: 0.55, ease: 'power4.out' },
        0.07
      );

      // Panel: slide in from right
      tl.fromTo(
        panel,
        { x: '100%' },
        { x: '0%', duration: 0.75, ease: 'power4.out' },
        0.13
      );

      // Prelayers slide out to the left
      tl.to(
        [pl1, pl2],
        { x: '-100%', duration: 0.45, ease: 'power3.in' },
        0.45
      );

      // Nav items stagger in
      tl.fromTo(
        items,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
          stagger: 0.05,
        },
        0.55
      );
    } else {
      // Close animation
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      if (!panel.style.transform || panel.style.transform === 'translateX(100%)') {
        // Panel was never opened, skip animation
        return;
      }

      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Nav items fade out, stagger from end
      tl.to(items, {
        x: -30,
        opacity: 0,
        duration: 0.3,
        stagger: { each: 0.04, from: 'end' },
      });

      // Panel slides out to right
      tl.to(
        panel,
        { x: '100%', duration: 0.55, ease: 'power4.in' },
        0.2
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        className={`menu-toggle-btn${isOpen ? ' is-open' : ''}`}
        onClick={onToggle}
      >
        <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            lineHeight: 1,
            transition: 'transform 0.4s var(--ease-snap)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            color: 'var(--accent)',
          }}
        >
          +
        </span>
      </button>

      {/* PRELAYER DIVS */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* MENU PANEL */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {menuItems.map((item, i) => (
            <li key={item}>
              <a
                href="#"
                ref={(el) => {
                  navItemsRef.current[i] = el;
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom strip */}
        <div>
          {/* Thin amber line */}
          <div
            style={{
              width: '100%',
              height: 1,
              background: 'var(--accent)',
              marginBottom: 20,
            }}
          />

          <span
            style={{
              display: 'block',
              color: 'var(--accent)',
              fontSize: 8,
              letterSpacing: '0.3em',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            FOLLOW US
          </span>

          <div style={{ display: 'flex', gap: 20 }}>
            {socialLinks.map((name) => (
              <a
                key={name}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: 9,
                  color: 'var(--text-faint)',
                  letterSpacing: '0.2em',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--text-white)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-faint)')
                }
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
