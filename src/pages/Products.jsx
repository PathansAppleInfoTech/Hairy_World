import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon, CheckIcon } from '../components/Icons';

const filters = ['All', 'Raw Supply', 'Ready-to-use', 'Specialty'];
const photos = ['/images/bundles-clip.jpg', '/images/bundles-silk.jpg', '/images/bundles-natural.jpg', '/images/model-black.jpg', '/images/model-curls.jpg'];

const textures = [
  { name: 'Straight', path: 'M10,5 L10,95', d: 'Sleek and smooth. Easy to style and colour.' },
  { name: 'Wavy', path: 'M10,5 C30,25 -10,40 10,55 S30,80 10,95', d: 'Natural body and movement, our most requested finish.' },
  { name: 'Curly', path: 'M10,5 C32,10 32,28 10,30 C-12,32 -12,50 10,52 C32,54 32,72 10,74 C-12,76 -8,92 10,95', d: 'Defined curls with volume, popular with salons.' },
];

const compare = [
  ['Length', 'Natural mix of lengths', 'Even length, short strands removed'],
  ['Ends', 'Tapered, lighter ends', 'Full, thick ends'],
  ['Feel', 'Natural and soft', 'Dense and voluminous'],
  ['Best for', 'Value-focused volume orders', 'Premium extension lines'],
];

export default function Products() {
  useReveal();
  const [f, setF] = useState('All');
  const shown = useMemo(() => (f === 'All' ? company.products : company.products.filter((p) => p.group === f)), [f]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hairy World wholesale human hair products',
    itemListElement: company.products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, description: p.blurb })),
  };

  return (
    <>
      <SEO
        title="Wholesale Human Hair Products & Extensions"
        description="Browse Hairy World's wholesale range: bulk human hair, single and double drawn hair, clip-in and clip-on extensions, ponytails, buns, clutch hair, tail extensions, tiruppan and wrapped extensions."
        path="/products"
        schema={schema}
      />

      {/* 1. HEADER BAND */}
      <section className="relative overflow-hidden bg-ivory pb-10 pt-16 sm:pt-24">
        <svg className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.18]" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => <path key={i} d={`M ${420 - i * 22},-20 C ${200 - i * 22},120 ${380 - i * 22},260 ${150 - i * 22},420`} fill="none" stroke="#B8922A" strokeWidth="1.2" />)}
        </svg>
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-ink/50"><Link to="/" className="hover:text-gold-600">Home</Link> / Products</nav>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1] sm:text-7xl">The wholesale <span className="gold-text gold-text-anim italic">hair range.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">Twelve product lines, from raw bundles to finished extensions. Tap WhatsApp on any product for wholesale details.</p>
        </div>
      </section>

      {/* 2. FILTERABLE GRID */}
      <section className="bg-ivory pb-20 sm:pb-28">
        <div className="container-x">
          <div className="sticky top-[60px] z-30 -mx-5 mb-10 overflow-x-auto bg-ivory/90 px-5 py-4 backdrop-blur sm:top-[104px] sm:mx-0 sm:px-0">
            <div role="tablist" aria-label="Filter products" className="flex w-max gap-2">
              {filters.map((x) => (
                <button key={x} role="tab" aria-selected={f === x} onClick={() => setF(x)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${f === x ? 'border-ink bg-ink text-gold-300' : 'border-gold-300 bg-white text-ink/70 hover:border-gold-500'}`}>{x}</button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <article key={p.slug} className="group overflow-hidden rounded-3xl border border-gold-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative aspect-[5/4] overflow-hidden bg-ink">
                  <img src={photos[i % photos.length]} alt={`${p.name} wholesale human hair`} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-700 backdrop-blur">{p.group}</span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.blurb}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                    {p.details.map((d) => <li key={d} className="flex items-center gap-2"><CheckIcon width={14} height={14} className="text-gold-500" />{d}</li>)}
                  </ul>
                  <a href={waLink(`Hello ${company.name}, please share wholesale details and pricing for ${p.name}.`)} target="_blank" rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-between rounded-full border border-gold-300 px-5 py-3 text-sm font-medium transition-all group-hover:border-transparent group-hover:bg-ink group-hover:text-gold-300">
                    Enquire on WhatsApp <WhatsAppIcon size={18} className="text-[#25D366]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEXTURES */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Texture guide</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Choose your finish.</h2>
            <p className="mt-4 text-ink/65">Most products are available across these textures. Colour and length options are discussed on enquiry.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-gold-200 bg-gold-200 md:grid-cols-3">
            {textures.map((t) => (
              <div key={t.name} className="reveal group flex items-center gap-6 bg-white p-8 transition-colors hover:bg-gold-50">
                <svg viewBox="-15 0 50 100" className="h-28 w-14 shrink-0" aria-hidden="true">
                  <path d={t.path} fill="none" stroke="url(#tg)" strokeWidth="3" strokeLinecap="round" />
                  <defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E6CB62" /><stop offset="1" stopColor="#9A7620" /></linearGradient></defs>
                </svg>
                <div>
                  <h3 className="font-display text-3xl font-semibold">{t.name}</h3>
                  <p className="mt-2 text-sm text-ink/65">{t.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SINGLE vs DOUBLE DRAWN */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-gold-300">Know the difference</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Single drawn vs <span className="gold-text italic">double drawn.</span></h2>
          </div>
          <div className="reveal mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/15">
            <div className="grid grid-cols-3 bg-white/5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
              <div className="p-4 sm:p-6" />
              <div className="p-4 sm:p-6">Single Drawn</div>
              <div className="p-4 sm:p-6">Double Drawn</div>
            </div>
            {compare.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-3 border-t border-white/10 text-sm">
                <div className="p-4 font-display text-lg text-white sm:p-6 sm:text-xl">{k}</div>
                <div className="p-4 text-white/65 sm:p-6">{a}</div>
                <div className="p-4 text-white/90 sm:p-6">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORDER CTA */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="container-x">
          <div className="reveal flex flex-col items-center gap-6 rounded-[2rem] border border-gold-300 bg-white p-10 text-center shadow-gold sm:p-16">
            <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">Don't see exactly what you need?</h2>
            <p className="max-w-lg text-ink/65">Our stitching unit makes custom pieces to your specification.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/custom-manufacturing" className="btn-gold">Custom manufacturing <ArrowIcon width={16} height={16} /></Link>
              <Link to="/wholesale-enquiry" className="btn-ghost border-ink/20 hover:border-gold-500 hover:text-gold-600">Wholesale enquiry form</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
