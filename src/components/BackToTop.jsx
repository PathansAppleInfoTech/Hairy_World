import { useEffect, useState } from 'react';
import { ArrowUpIcon } from './Icons';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setShow(window.scrollY > 500);
      setPct(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const r = 20;
  const c = 2 * Math.PI * r;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gold-300 shadow-lift transition-all duration-500 hover:text-white sm:bottom-28 sm:right-8 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(212,175,55,.25)" strokeWidth="2" />
        <circle cx="24" cy="24" r={r} fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100} />
      </svg>
      <ArrowUpIcon width={18} height={18} />
    </button>
  );
}
