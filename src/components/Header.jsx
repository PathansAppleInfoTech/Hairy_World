import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import { MenuIcon, CloseIcon, WhatsAppIcon, PhoneIcon, ArrowIcon } from './Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const linkCls = ({ isActive }) =>
    `relative py-2 text-[13px] font-medium uppercase tracking-[0.16em] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 ${
      isActive ? 'text-gold-600 after:w-full' : 'text-ink/75 after:w-0 hover:text-ink hover:after:w-full'
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* top strip */}
      <div className="hidden bg-ink text-[12px] tracking-wide text-white/80 md:block">
        <div className="container-x flex items-center justify-between py-2">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Wholesale human hair supplier &amp; exporter · {company.yearsExperience}+ years
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 transition-colors hover:text-gold-300">
              <PhoneIcon width={14} height={14} /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold-300">{company.email}</a>
          </div>
        </div>
      </div>

      <div className={`border-b transition-all duration-300 ${scrolled ? 'border-gold-200/70 bg-white/90 shadow-[0_10px_30px_-20px_rgba(15,17,19,.4)] backdrop-blur-xl' : 'border-transparent bg-white/95 backdrop-blur'}`}>
        <div className="container-x flex items-center justify-between py-3">
          <Link to="/" aria-label={`${company.name} home`} className="shrink-0">
            <img src={company.logos.horizontal} alt={`${company.name} logo`} className="h-10 w-auto sm:h-12" width="236" height="60" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {company.nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex"
            >
              <WhatsAppIcon size={18} /> Enquire
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-300 text-ink lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
        <aside className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ink px-7 pb-8 pt-6 text-white shadow-2xl transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <img src={company.logos.horizontalWhite} alt={company.name} className="h-10 w-auto" />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
              <CloseIcon />
            </button>
          </div>
          <nav className="mt-10 flex flex-1 flex-col" aria-label="Mobile">
            {[...company.nav, { label: 'Wholesale Enquiry', to: '/wholesale-enquiry' }].map((n, i) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'} ${isActive ? 'text-gold-300' : 'text-white/90'}`
                }
              >
                {n.label} <ArrowIcon width={18} height={18} className="text-gold-400" />
              </NavLink>
            ))}
          </nav>
          <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 w-full">
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>
          <p className="mt-4 text-center text-xs text-white/50">{company.phone} · {company.email}</p>
        </aside>
      </div>
    </header>
  );
}
