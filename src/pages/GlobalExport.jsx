import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon, GlobeIcon, TruckIcon, ShieldIcon, TagIcon } from '../components/Icons';

const C = 300;
const nodes = [
  { id: 'gcc', label: 'GCC', sub: 'UAE · Saudi Arabia · Kuwait · Qatar · Bahrain · Oman', a: -28, r: 150 },
  { id: 'uk', label: 'UK', sub: 'United Kingdom', a: -105, r: 215 },
  { id: 'usa', label: 'USA', sub: 'United States', a: 205, r: 255 },
  { id: 'can', label: 'Canada', sub: 'Canada', a: 160, r: 205 },
  { id: 'row', label: '& Beyond', sub: 'Other international markets', a: 62, r: 235 },
];
const pos = (n) => [C + n.r * Math.cos((n.a * Math.PI) / 180), C + n.r * Math.sin((n.a * Math.PI) / 180)];

const how = [
  { Icon: TagIcon, n: '01', t: 'Share your requirement', d: 'Tell us which products you need, your target quantities and destination country.' },
  { Icon: ShieldIcon, n: '02', t: 'Confirm specifications', d: 'Discuss product details, pricing, sampling and the quality checks required before packing.' },
  { Icon: TruckIcon, n: '03', t: 'Pack and dispatch', d: 'Agree on packing and freight arrangements, then coordinate dispatch for your destination.' },
];

const marketImages = [
  'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1100&q=85',
];

const heroImage = 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2200&q=90';
const supplyImage = 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1200&q=85';

export default function GlobalExport() {
  useReveal();
  const [active, setActive] = useState('gcc');
  const [country, setCountry] = useState('');
  const act = nodes.find((n) => n.id === active) ?? nodes[0];

  return (
    <>
      <SEO
        title="Global Human Hair Export from Kerala, India"
        description="Hairy World supplies wholesale human hair and hair extensions from Alappuzha, Kerala to GCC countries, the UK, USA, Canada and other international markets for salons, wholesalers and distributors."
        path="/global-export"
      />

      {/* Compact full-width photographic hero */}
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#191612] sm:min-h-[350px] lg:min-h-[390px]">
        <img
          src={heroImage}
          alt="Premium beauty and hair styling setting"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17140f]/90 via-[#17140f]/70 to-[#17140f]/25" aria-hidden="true" />
        <div className="container-x relative w-full py-10 sm:py-14 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/65">
            <Link to="/" className="transition-colors hover:text-[#f0d99b]">Home</Link>
            <span className="mx-2 text-white/35">/</span>
            <span className="text-[#f0d99b]">Global Export</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
            Kerala to <span className="italic text-[#e8c77d]">the world.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            Wholesale human hair and finished extensions for business buyers across India and international markets—with product details and supply arrangements discussed around your requirements.
          </p>
        </div>
      </section>

      {/* Export approach and interactive market selector */}
      <section className="overflow-hidden bg-[#f7f3e9] py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a682b]">Markets we serve</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#211c16] sm:text-5xl">
              A supply partner for <span className="italic text-[#9a742d]">global buyers.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#685f52]">
              Hairy World works with salons, wholesalers, distributors and retailers looking for human hair products for their markets. Choose a destination to see the regions we currently highlight.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="border border-[#e3d5b7] bg-white/75 p-4">
                <p className="font-display text-3xl font-semibold text-[#211c16]">15+</p>
                <p className="mt-1 text-xs leading-5 text-[#766d60]">Years in the trade</p>
              </div>
              <div className="border border-[#e3d5b7] bg-white/75 p-4">
                <p className="font-display text-2xl font-semibold text-[#211c16]">B2B</p>
                <p className="mt-1 text-xs leading-5 text-[#766d60]">Wholesale focused</p>
              </div>
              <div className="border border-[#e3d5b7] bg-white/75 p-4 sm:col-span-2 lg:col-span-2 xl:col-span-1">
                <p className="font-display text-2xl font-semibold text-[#211c16]">Custom</p>
                <p className="mt-1 text-xs leading-5 text-[#766d60]">Product discussions</p>
              </div>
            </div>
            <div className="mt-7 rounded-2xl border border-[#dfd0ad] bg-white p-5 shadow-sm" aria-live="polite">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a742d]">Selected destination</p>
              <div className="mt-1 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#211c16]">{act.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#716758]">{act.sub}</p>
                </div>
                <GlobeIcon width={26} height={26} className="mt-1 shrink-0 text-[#b18a3e]" />
              </div>
              <a
                href={waLink(`Hello ${company.name}, I am interested in wholesale human hair supply to ${act.label} (${act.sub}). Please share product and shipping details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#785a25] transition-colors hover:text-[#211c16]"
              >
                Enquire about this market <ArrowIcon width={15} height={15} />
              </a>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[570px] lg:col-span-7">
            <div className="absolute inset-5 rounded-full border border-[#c6a45c]/25" aria-hidden="true" />
            <div className="relative aspect-square rounded-[2rem] border border-[#c6a45c]/25 bg-[#201c16] p-2 shadow-[0_24px_70px_-35px_rgba(30,23,12,.6)] sm:p-4">
              <div className="absolute inset-0 overflow-hidden rounded-[1.7rem] opacity-[0.09]" aria-hidden="true">
                <img src={supplyImage} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
              <svg viewBox="0 0 600 600" className="relative h-full w-full" role="group" aria-label="Interactive market selector for Hairy World export destinations">
                <defs>
                  <radialGradient id="export-core" cx="40%" cy="35%" r="75%">
                    <stop offset="0%" stopColor="#f3df9b" />
                    <stop offset="100%" stopColor="#a77c2f" />
                  </radialGradient>
                </defs>
                <g aria-hidden="true" className="spin-slow" style={{ transformOrigin: '300px 300px' }}>
                  {[100, 165, 230, 280].map((r) => <circle key={r} cx={C} cy={C} r={r} fill="none" stroke="rgba(212,175,55,.25)" strokeDasharray="2 9" />)}
                </g>
                {nodes.map((n) => {
                  const [x, y] = pos(n);
                  const mx = (C + x) / 2 + (y - C) * 0.18;
                  const my = (C + y) / 2 - (x - C) * 0.18;
                  const on = active === n.id;
                  return (
                    <g key={n.id}>
                      <path d={`M ${C},${C} Q ${mx},${my} ${x},${y}`} fill="none" stroke={on ? '#f0de95' : 'rgba(212,175,55,.42)'} strokeWidth={on ? 2.2 : 1.1} strokeDasharray={on ? '0' : '4 6'} />
                      <g
                        className="cursor-pointer outline-none"
                        tabIndex={0}
                        role="button"
                        aria-label={`Select ${n.label} export market`}
                        aria-pressed={on}
                        onClick={() => setActive(n.id)}
                        onMouseEnter={() => setActive(n.id)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(n.id); } }}
                      >
                        <circle cx={x} cy={y} r={on ? 36 : 29} fill={on ? '#d4af57' : '#211d17'} stroke={on ? '#f4df9e' : '#b8924b'} strokeWidth={on ? 2 : 1.3} />
                        <circle cx={x} cy={y} r={on ? 42 : 33} fill="none" stroke="#e8c77d" strokeOpacity={on ? 0.55 : 0.18} />
                        <text x={x} y={y + 4} textAnchor="middle" fontSize={n.label.length > 5 ? 10 : 13} fontWeight="600" fill={on ? '#211c16' : '#f0de95'} fontFamily="Jost, sans-serif">{n.label}</text>
                      </g>
                    </g>
                  );
                })}
                <circle cx={C} cy={C} r="49" fill="url(#export-core)" />
                <circle cx={C} cy={C} r="56" fill="none" stroke="#f0d99b" strokeOpacity=".55" />
                <text x={C} y={C - 3} textAnchor="middle" fontSize="15" fontWeight="700" fill="#211c16" fontFamily="Cormorant Garamond, serif">KERALA</text>
                <text x={C} y={C + 15} textAnchor="middle" fontSize="9" letterSpacing="2" fill="#211c16" fontFamily="Jost, sans-serif">INDIA</text>
              </svg>
              <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">Select a node to explore a market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destination cards */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a682b]">Our reach</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#211c16] sm:text-5xl">Supporting business across borders.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#716758]">Discuss your market, required product range and preferred supply arrangements with our team.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {company.markets.map((m, i) => (
              <article key={m} className="reveal group overflow-hidden rounded-[1.5rem] border border-[#e8dec9] bg-[#fbf9f4] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_-34px_rgba(52,39,19,.55)]" style={{ transitionDelay: `${i * 65}ms` }}>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e6ddcc]">
                  <img src={marketImages[i % marketImages.length]} alt={`${m} market destination`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191612]/65 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-4 left-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85">Market {String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold text-[#211c16] sm:text-3xl">{m}</h3>
                    <GlobeIcon width={23} height={23} className="mt-1 shrink-0 text-[#ad8537]" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#716758]">Wholesale human hair and extension supply discussions for local business needs.</p>
                  <a href={waLink(`Hello ${company.name}, I am interested in wholesale human hair supply to ${m}. Please share product and shipping details.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#785a25] transition-all hover:gap-3">
                    Enquire about {m.split(' ')[0]} <ArrowIcon width={15} height={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Export process */}
      <section className="relative overflow-hidden bg-[#191612] py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#c6a45c]/20" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#c6a45c]/15" aria-hidden="true" />
        <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8c77d]">Export process</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">Clear steps. Practical coordination.</h2>
            <p className="mt-5 text-sm leading-7 text-white/60">We align on product details and destination requirements before dispatch, helping buyers understand the next steps for their order.</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img src={supplyImage} alt="Beauty product preparation in a softly lit studio" loading="lazy" decoding="async" className="aspect-[5/3] w-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 lg:col-span-8">
            {how.map(({ Icon, n, t, d }, i) => (
              <article key={t} className="reveal group grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-[#c6a45c]/50 hover:bg-white/[0.06] sm:grid-cols-[auto_1fr] sm:gap-5 sm:p-7" style={{ transitionDelay: `${i * 85}ms` }}>
                <div className="flex items-center gap-4 sm:block">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d7b56b]/15 text-[#e8c77d]"><Icon width={23} height={23} /></span>
                  <span className="font-display text-3xl font-semibold text-[#d7b56b]/45 sm:hidden">{n}</span>
                </div>
                <div>
                  <div className="hidden items-center gap-3 sm:flex"><span className="font-display text-3xl font-semibold text-[#d7b56b]/45">{n}</span><h3 className="font-display text-2xl font-semibold sm:text-3xl">{t}</h3></div>
                  <h3 className="font-display text-2xl font-semibold sm:hidden">{t}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Destination enquiry */}
      <section className="bg-[#f7f3e9] px-4 py-16 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ead39a] via-[#d9b96b] to-[#b98d3c] p-7 shadow-[0_24px_70px_-38px_rgba(52,39,19,.55)] sm:p-12 lg:p-14">
          <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-[#211c16]/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-2 -top-6 h-44 w-44 rounded-full border border-[#211c16]/10" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#5f481f]">Start a conversation</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#211c16] sm:text-5xl">Where do you need your supply?</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[#51432c] sm:text-base">Share your destination and we'll discuss wholesale product availability and shipping arrangements with you.</p>
            </div>
            <form className="rounded-2xl border border-white/40 bg-white/55 p-4 backdrop-blur-sm sm:p-5" onSubmit={(e) => { e.preventDefault(); window.open(waLink(`Hello ${company.name}, I would like export details for human hair supply to ${country.trim() || 'my country'}. Please share product availability and shipping arrangements.`), '_blank', 'noopener,noreferrer'); }}>
              <label htmlFor="country" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f481f]">Destination country</label>
              <input id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. United Arab Emirates" className="mt-3 w-full rounded-full border border-[#d9c79d] bg-white px-5 py-3.5 text-sm text-[#211c16] outline-none placeholder:text-[#938775] focus:border-[#806027] focus:ring-2 focus:ring-[#806027]/20" />
              <button type="submit" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#211c16] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4b3920] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211c16] focus-visible:ring-offset-2">
                <WhatsAppIcon size={18} className="text-[#25D366]" /> Send export enquiry
              </button>
              <p className="mt-3 text-center text-xs text-[#6f5a37]">Opens WhatsApp with your destination included.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
