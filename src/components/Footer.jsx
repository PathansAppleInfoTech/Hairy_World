import { Link } from 'react-router-dom';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, SocialIcon, WhatsAppIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-white/75">
      <img src={company.logos.emblemWhite} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-[0.05]" />
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* CTA band */}
      <div className="container-x relative py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-gold-300">Let's do business</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-white sm:text-4xl">
              Ready to stock <span className="gold-text gold-text-anim italic">original human hair</span>?
            </h2>
          </div>
          <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0 whitespace-nowrap">
            <WhatsAppIcon size={18} /> Start a WhatsApp enquiry
          </a>
        </div>

        <div className="grid gap-x-8 gap-y-12 pt-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div className="md:order-1">
            <img src={company.logos.horizontal} alt={`${company.name} logo`} className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{company.shortDescription}</p>
            <div className="mt-6 flex gap-3">
              {company.social.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300">
                  <SocialIcon name={s.key} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:order-3 lg:order-2">
            <h3 className="eyebrow !text-gold-300">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[...company.nav, { label: 'Wholesale Enquiry', to: '/wholesale-enquiry' }].map((n) => (
                <li key={n.to}><Link to={n.to} className="transition-colors hover:text-gold-300">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:order-4 lg:order-3">
            <h3 className="eyebrow !text-gold-300">Products</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {company.products.slice(0, 6).map((p) => (
                <li key={p.slug}><Link to="/products" className="transition-colors hover:text-gold-300">{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:order-2 lg:order-4">
            <h3 className="eyebrow !text-gold-300">Reach us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3"><PinIcon className="mt-0.5 shrink-0 text-gold-400" /><a href={company.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">{company.address.full}</a></li>
              <li className="flex gap-3"><PhoneIcon className="mt-0.5 shrink-0 text-gold-400" /><a href={`tel:${company.phoneRaw}`} className="hover:text-gold-300">{company.phone}</a></li>
              <li className="flex gap-3"><MailIcon className="mt-0.5 shrink-0 text-gold-400" /><a href={`mailto:${company.email}`} className="hover:text-gold-300">{company.email}</a></li>
              <li className="flex gap-3"><ClockIcon className="mt-0.5 shrink-0 text-gold-400" />{company.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:pr-20">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <p>{company.tagline}</p>
          <p> <a href="https://pathansapple.com" className="hover:text-gold-300">Powered by Pathans Apple Info Tech</a></p>
        </div>
      </div>
    </footer>
  );
}