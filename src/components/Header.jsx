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
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const desktopLinkClass = ({ isActive }) =>
    `group relative inline-flex items-center whitespace-nowrap py-3 text-[11px] font-semibold uppercase tracking-[0.12em] xl:tracking-[0.17em] transition-colors duration-200 after:absolute after:bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-gold-500 after:transition-all after:duration-300 ${
      isActive
        ? 'text-ink after:w-full'
        : 'text-ink/65 after:w-0 hover:text-ink hover:after:w-full'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `group flex items-center justify-between border-b border-white/10 py-4 font-display text-[1.35rem] tracking-tight transition-colors duration-200 ${
      isActive ? 'text-gold-300' : 'text-white/90 hover:text-gold-200'
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* Slim contact strip */}
      <div className="hidden bg-ink text-white/75 md:block">
        <div className="container-x flex min-h-9 items-center justify-between gap-6 text-[11px] tracking-wide">
          <p className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2 items-center justify-center" aria-hidden="true">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-gold-400/50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
            <span>Original human hair wholesale</span>
            <span className="text-white/25">/</span>
            <span>{company.yearsExperience}+ years of experience</span>
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
            >
              <PhoneIcon width={13} height={13} />
              {company.phone}
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-gold-300"
            >
              {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-gold-200/70 bg-white/95 shadow-[0_10px_35px_-24px_rgba(15,17,19,.45)] backdrop-blur-xl'
            : 'border-ink/[0.06] bg-[#fffdf9]/95 backdrop-blur-lg'
        }`}
      >
        <div className="container-x flex min-h-[76px] items-center justify-between gap-5 py-3 lg:grid lg:min-h-[84px] lg:grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
          <Link
            to="/"
            aria-label={`${company.name} home`}
            className="group inline-flex min-w-0 shrink-0 items-center justify-self-start rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
          >
            <img
              src={company.logos.horizontal}
              alt={`${company.name} — original human hair wholesale`}
              className="h-10 w-auto max-w-[185px] object-contain transition-transform duration-300 group-hover:scale-[1.015] sm:h-11 sm:max-w-[220px] lg:h-12 lg:max-w-[236px]"
              width="236"
              height="60"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-4 justify-self-center lg:flex xl:gap-7" aria-label="Primary navigation">
            {company.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={desktopLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center justify-self-end gap-3">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2.5 rounded-full bg-ink px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-white xl:px-5 shadow-[0_6px_18px_-10px_rgba(15,17,19,.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#292b2c] hover:shadow-lg sm:inline-flex"
            >
              <WhatsAppIcon size={17} className="text-gold-300 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden xl:inline">Wholesale enquiry</span>
              <span className="xl:hidden">Enquire</span>
              <ArrowIcon width={14} height={14} className="text-gold-300 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/80 bg-white text-ink transition-colors hover:border-gold-500 hover:bg-ivory lg:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 h-full w-full cursor-default bg-ink/65 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          aria-modal="true"
          role="dialog"
          inert={!open}
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[390px] flex-col overflow-y-auto bg-ink px-6 pb-7 pt-6 text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:px-8 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
            <Link to="/" onClick={() => setOpen(false)} aria-label={`${company.name} home`}>
              <img
                src={company.logos.horizontalWhite}
                alt={`${company.name} logo`}
                className="h-10 w-auto max-w-[220px] object-contain"
                width="236"
                height="60"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-gold-300">
            <span className="h-px w-7 bg-gold-400" />
            Explore Hairy World
          </div>

          <nav className="mt-3 flex flex-1 flex-col" aria-label="Mobile primary navigation">
            {[...company.nav, { label: 'Wholesale Enquiry', to: '/wholesale-enquiry' }]
              .filter((item, index, items) => items.findIndex((candidate) => candidate.to === item.to) === index)
              .map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + index * 35}ms` : '0ms' }}
                  className={({ isActive }) =>
                    `${mobileLinkClass({ isActive })} transition-[color,transform,opacity] duration-300 ${
                      open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowIcon
                    width={17}
                    height={17}
                    className={`transition-transform duration-300 group-hover:translate-x-1 ${
                      pathname === item.to ? 'text-gold-300' : 'text-white/35 group-hover:text-gold-300'
                    }`}
                  />
                </NavLink>
              ))}
          </nav>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="font-display text-xl text-white">Looking for wholesale supply?</p>
            <p className="mt-1 text-sm leading-relaxed text-white/55">
              Tell us your product needs, quantities and destination. We’ll help you find the right option.
            </p>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold-400 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-300"
            >
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-5 flex flex-col items-center gap-2 text-center text-xs text-white/50">
            <a href={`tel:${company.phoneRaw}`} className="transition-colors hover:text-gold-300">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold-300">
              {company.email}
            </a>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/30">
              Alappuzha · Kerala · India
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}