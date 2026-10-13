import { useEffect, useState } from 'react';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloat() {
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setTip(true), 4000);
    const hide = setTimeout(() => setTip(false), 11000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7">
      <div
        className={`hidden max-w-[220px] rounded-2xl rounded-br-sm border border-gold-200 bg-white px-4 py-3 text-sm shadow-lift transition-all duration-500 sm:block ${
          tip ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'
        }`}
      >
        <p className="font-medium text-ink">Need wholesale rates?</p>
        <p className="text-xs text-ink/60">Chat with {company.name} on WhatsApp.</p>
      </div>
      <a
        href={waLink(DEFAULT_WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTip(true)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,.7)] transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping2" aria-hidden="true" />
        <WhatsAppIcon size={28} className="relative" />
      </a>
    </div>
  );
}
