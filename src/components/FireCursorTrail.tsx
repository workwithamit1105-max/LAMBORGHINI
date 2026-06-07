import { useEffect, useRef } from 'react';

interface Particle {
  el: HTMLDivElement | null;
  active: boolean;
  x: number;
  y: number;
  age: number;
  size: number;
}

const POOL_SIZE = 24;
const MIN_DISTANCE = 30;
const MIN_INTERVAL = 16;

export default function FireCursorTrail() {
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const lastPointRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);

  useEffect(() => {
    // Create particle pool
    const particles: Particle[] = [];
    for (let i = 0; i < POOL_SIZE; i++) {
      const el = document.createElement('div');
      el.style.position = 'fixed';
      el.style.borderRadius = '50%';
      el.style.pointerEvents = 'none';
      el.style.zIndex = '9999';
      el.style.background =
        'radial-gradient(circle at 30% 30%, #fff5e0, #ff8c00, transparent)';
      el.style.mixBlendMode = 'screen';
      el.style.willChange = 'transform, opacity';
      el.style.opacity = '0';
      el.style.width = '8px';
      el.style.height = '8px';
      document.body.appendChild(el);

      particles.push({
        el,
        active: false,
        x: 0,
        y: 0,
        age: 0,
        size: 8,
      });
    }
    particlesRef.current = particles;

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastPointRef.current.x;
      const dy = e.clientY - lastPointRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > MIN_DISTANCE && now - lastTimeRef.current > MIN_INTERVAL) {
        lastPointRef.current = { x: e.clientX, y: e.clientY };
        lastTimeRef.current = now;

        // Find first inactive particle
        for (let i = 0; i < POOL_SIZE; i++) {
          const p = particles[i];
          if (!p.active && p.el) {
            const size = 6 + Math.random() * 10;
            p.active = true;
            p.age = 0;
            p.x = e.clientX;
            p.y = e.clientY;
            p.size = size;
            p.el.style.width = size + 'px';
            p.el.style.height = size + 'px';
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // rAF loop
    const animate = () => {
      for (let i = 0; i < POOL_SIZE; i++) {
        const p = particles[i];
        if (!p.active || !p.el) continue;

        p.age += 0.025;
        const opacity = Math.max(0, 1 - Math.pow(p.age, 0.8));
        const halfSize = p.size / 2;

        p.el.style.transform = `translate(${p.x - halfSize}px, ${
          p.y - halfSize - p.age * 20
        }px)`;
        p.el.style.opacity = String(opacity);

        if (p.age >= 1) {
          p.active = false;
          p.el.style.opacity = '0';
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      for (let i = 0; i < particles.length; i++) {
        const el = particles[i].el;
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    };
  }, []);

  return null;
}
