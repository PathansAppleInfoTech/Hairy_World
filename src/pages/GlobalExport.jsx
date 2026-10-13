import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon, GlobeIcon, TruckIcon, ShieldIcon, TagIcon } from '../components/Icons';

const C = 300;
const nodes = [
  { id: 'gcc', label: 'GCC', sub: 'UAE · Saudi · Kuwait · Qatar · Bahrain · Oman', a: -28, r: 150 },
  { id: 'uk', label: 'UK', sub: 'United Kingdom', a: -105, r: 215 },
  { id: 'usa', label: 'USA', sub: 'United States', a: 205, r: 255 },
  { id: 'can', label: 'Canada', sub: 'Canada', a: 160, r: 205 },
  { id: 'row', label: '& Beyond', sub: 'Other international markets', a: 62, r: 235 },
];
const pos = (n) => [C + n.r * Math.cos((n.a * Math.PI) / 180), C + n.r * Math.sin((n.a * Math.PI) / 180)];

const how = [
  { Icon: TagIcon, t: 'Share requirement', d: 'Products, quantities and destination country.' },
  { Icon: ShieldIcon, t: 'Confirm & prepare', d: 'Specs, pricing and sampling agreed; goods quality-checked.' },
  { Icon: TruckIcon, t: 'Pack & ship', d: 'Export-ready packing, dispatched with your preferred freight arrangement.' },
];

export default function GlobalExport() {
  useReveal();
  const [active, setActive] = useState('gcc');
  const [country, setCountry] = useState('');
  const act = nodes.find((n) => n.id === active);

  return (
    <>
      <SEO
        title="Global Human Hair Export from Kerala, India"
        description="Hairy World exports wholesale human hair and hair extensions from Kerala to the GCC countries, UK, USA, Canada and other international markets for salons, wholesalers and distributors."
        path="/global-export"
      />

      {/* 1. HERO with orbit diagram */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-x grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-white/50"><Link to="/" className="hover:text-gold-300">Home</Link> / Global Export</nav>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] sm:text-7xl">Kerala to <span className="gold-text gold-text-anim italic">the world.</span></h1>
            <p className="mt-6 max-w-lg text-lg text-white/70">With experience in international hair trading, we supply customers across GCC countries, the UK, USA, Canada and other markets. Tap a market to explore.</p>
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-300">Selected market</p>
              <p className="mt-1 font-display text-3xl">{act.label}</p>
              <p className="text-sm text-white/60">{act.sub}</p>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <svg viewBox="0 0 600 600" className="h-full w-full" role="img" aria-label="Hairy World export routes from Kerala to GCC, UK, USA, Canada and other markets">
              <defs>
                <radialGradient id="core" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#F4DD8A" /><stop offset="1" stopColor="#B8922A" /></radialGradient>
              </defs>
              <g className="spin-slow" style={{ transformOrigin: '300px 300px' }}>
                {[110, 190, 270].map((r) => <circle key={r} cx={C} cy={C} r={r} fill="none" stroke="rgba(212,175,55,.22)" strokeDasharray="2 8" />)}
              </g>
              {nodes.map((n) => {
                const [x, y] = pos(n);
                const mx = (C + x) / 2 + (y - C) * 0.18;
                const my = (C + y) / 2 - (x - C) * 0.18;
                const on = active === n.id;
                return (
                  <g key={n.id}>
                    <path d={`M ${C},${C} Q ${mx},${my} ${x},${y}`} fill="none" stroke={on ? '#F0DE95' : 'rgba(212,175,55,.5)'} strokeWidth={on ? 2 : 1.2} className="flow" />
                    <g onClick={() => setActive(n.id)} onMouseEnter={() => setActive(n.id)} className="cursor-pointer" tabIndex={0} role="button" aria-label={n.label} onKeyDown={(e) => (e.key === 'Enter' ? setActive(n.id) : null)}>
                      <circle cx={x} cy={y} r={on ? 34 : 28} fill={on ? '#D4AF37' : '#1A1D20'} stroke="#D4AF37" strokeWidth="1.5" style={{ transition: 'all .3s' }} />
                      <text x={x} y={y + 4} textAnchor="middle" fontSize={n.label.length > 5 ? 11 : 13} fontWeight="600" fill={on ? '#0F1113' : '#F0DE95'} fontFamily="Jost, sans-serif">{n.label}</text>
                    </g>
                  </g>
                );
              })}
              <circle cx={C} cy={C} r="46" fill="url(#core)" />
              <circle cx={C} cy={C} r="46" fill="none" stroke="#F4DD8A" strokeOpacity=".5" className="animate-ping2" style={{ transformOrigin: '300px 300px' }} />
              <text x={C} y={C - 2} textAnchor="middle" fontSize="15" fontWeight="700" fill="#0F1113" fontFamily="Cormorant Garamond, serif">KERALA</text>
              <text x={C} y={C + 14} textAnchor="middle" fontSize="9" letterSpacing="2" fill="#0F1113" fontFamily="Jost, sans-serif">INDIA</text>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. MARKET CARDS */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Markets we serve</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Supply that crosses borders.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {company.markets.map((m, i) => (
              <div key={m} className="reveal group relative overflow-hidden rounded-3xl border border-gold-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lift" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="absolute -right-4 -top-6 font-display text-[7rem] font-semibold leading-none text-gold-100 transition-colors group-hover:text-gold-200">{String(i + 1).padStart(2, '0')}</span>
                <GlobeIcon className="relative text-gold-500" width={26} height={26} />
                <h3 className="relative mt-6 font-display text-3xl font-semibold">{m}</h3>
                <a href={waLink(`Hello ${company.name}, I am interested in wholesale human hair supply to ${m}.`)} target="_blank" rel="noopener noreferrer" className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-700 hover:gap-3 transition-all">Enquire for {m.split(' ')[0]} <ArrowIcon width={14} height={14} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW EXPORT WORKS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow">Export process</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">Simple, professional, on time.</h2>
          </div>
          <div className="space-y-4 lg:col-span-8">
            {how.map(({ Icon, t, d }, i) => (
              <div key={t} className="reveal flex items-start gap-6 rounded-3xl border border-gold-200 bg-gradient-to-r from-white to-gold-50 p-6 sm:p-8" style={{ marginLeft: `${i * 22}px`, transitionDelay: `${i * 90}ms` }}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-gold-300"><Icon width={24} height={24} /></span>
                <div><h3 className="font-display text-2xl font-semibold">{t}</h3><p className="mt-1 text-ink/65">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COUNTRY ENQUIRY */}
      <section className="px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 p-8 text-center sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-5xl">Which country are you in?</h2>
          <p className="mx-auto mt-3 max-w-md text-ink/75">Tell us your destination and we'll reply with export details on WhatsApp.</p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="country" className="sr-only">Your country</label>
            <input id="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. United Arab Emirates" className="w-full rounded-full border-0 bg-white/90 px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ink" />
            <a href={waLink(`Hello ${company.name}, I would like export details for human hair supply to ${country || 'my country'}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5"><WhatsAppIcon size={18} className="text-[#25D366]" /> Send</a>
          </div>
        </div>
      </section>
    </>
  );
}
