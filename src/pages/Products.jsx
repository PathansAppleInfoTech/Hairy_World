import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon, CheckIcon } from '../components/Icons';

const filters = ['All', 'Raw Supply', 'Ready-to-use', 'Specialty'];

// Unsplash demo photography. Replace these with Hairy World's own product photos before launch.
const images = {
  hero: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2200&q=85',
  raw: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',
  ready: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
  specialty: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80',
  straight: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
  waves: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
  salon: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
  portrait: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80',
  detail: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=80',
};

const categoryMeta = {
  'Raw Supply': {
    eyebrow: 'The foundations',
    description: 'Bulk, single-drawn and double-drawn hair for wholesale buyers sourcing by quantity and specification.',
    image: images.raw,
    alt: 'Beauty editorial image for bulk human hair sourcing',
  },
  'Ready-to-use': {
    eyebrow: 'Prepared to style',
    description: 'Finished clip-ins, clip-ons, ponytails, buns and extensions for salons, retailers and product ranges.',
    image: images.ready,
    alt: 'Hair styling and finished extension products in a beauty setting',
  },
  Specialty: {
    eyebrow: 'Made to your brief',
    description: 'Tiruppan, wrapped extensions and selected custom pieces for specific product requirements.',
    image: images.specialty,
    alt: 'Styled hair representing specialty human hair products',
  },
};

const productPhotos = [images.raw, images.ready, images.specialty, images.straight, images.waves, images.salon, images.portrait, images.detail];

const textures = [
  { name: 'Straight', path: 'M10 5 L10 95', description: 'Smooth, sleek strands with a clean, classic finish.', image: images.straight },
  { name: 'Wavy', path: 'M10 5 C30 25 -10 40 10 55 S30 80 10 95', description: 'Soft body and movement for versatile styling.', image: images.waves },
  { name: 'Curly', path: 'M10 5 C32 10 32 28 10 30 C-12 32 -12 50 10 52 C32 54 32 72 10 74 C-12 76 -8 92 10 95', description: 'Defined texture and volume for expressive looks.', image: images.specialty },
];

const compare = [
  ['Length', 'A natural mix of lengths', 'More even lengths throughout'],
  ['Ends', 'Naturally tapered ends', 'Fuller, thicker-looking ends'],
  ['Appearance', 'Soft, graduated finish', 'Dense, more uniform finish'],
  ['Often chosen for', 'Value-focused volume orders', 'Premium extension ranges'],
];

function SectionLabel({ children, light = false }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] ${light ? 'text-[#e8c77d]' : 'text-[#8c692b]'}`}>
      <span className={`h-px w-8 ${light ? 'bg-[#d7b56b]' : 'bg-[#b8924b]'}`} />
      {children}
    </p>
  );
}

export default function Products() {
  useReveal();
  const [filter, setFilter] = useState('All');
  const shown = useMemo(
    () => (filter === 'All' ? company.products : company.products.filter((product) => product.group === filter)),
    [filter],
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hairy World wholesale human hair products',
    itemListElement: company.products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      description: product.blurb,
    })),
  };

  return (
    <>
      <SEO
        title="Wholesale Human Hair Products & Extensions | Hairy World"
        description="Explore Hairy World's wholesale human hair range, from bulk and drawn hair to clip-in extensions, ponytails, buns, wrapped extensions and customised products. Based in Alappuzha, Kerala, India."
        path="/products"
        schema={schema}
      />

      {/* Compact, full-width page hero */}
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#211c16] sm:min-h-[350px] lg:min-h-[390px]">
        <img
          src={images.hero}
          alt="Beauty editorial portrait representing the Hairy World human hair collection"
          width="2200"
          height="1000"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17130f]/90 via-[#17130f]/65 to-[#17130f]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#17130f]/60 via-transparent to-black/10" />
        <div className="container-x relative w-full pb-10 pt-14 sm:pb-14 sm:pt-16 lg:pb-16">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/65">
            <Link to="/" className="transition hover:text-[#f0d99d]">Home</Link>
            <span className="mx-3 text-[#e8c77d]">/</span>
            <span aria-current="page" className="text-white">Products</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            {/* <SectionLabel light>Our wholesale collection</SectionLabel> */}
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Hair for every <span className="italic text-[#e8c77d]">kind of business.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-lg sm:leading-8">
              Explore raw hair, ready-to-use extensions and specialty pieces, with wholesale options for salons, retailers, distributors and hair businesses.
            </p>
            {/* <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink(`Hello ${company.name}, please share your wholesale product catalogue and pricing.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d7b56b] px-5 py-3 text-sm font-semibold text-[#211c16] transition hover:bg-[#f0d99d]">
                Request wholesale details <WhatsAppIcon size={17} />
              </a>
              <a href="#product-range" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10">
                Explore the range <ArrowIcon width={15} height={15} />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Product-category discovery cards */}
      <section className="bg-[#faf7f0] py-14 sm:py-20">
        <div className="container-x">
          <div className="reveal mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Explore by category</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#211c16] sm:text-5xl">Start with what your business needs.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6b6255]">From wholesale hair bundles to finished pieces, find the category that fits your customers and your product range.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(categoryMeta).map(([category, meta], index) => (
              <button
                type="button"
                key={category}
                onClick={() => {
                  setFilter(category);
                  document.getElementById('product-range')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="reveal group relative min-h-[290px] overflow-hidden rounded-[1.5rem] bg-[#211c16] text-left sm:min-h-[340px]"
                style={{ transitionDelay: `${index * 90}ms` }}
                aria-label={`View ${category} products`}
              >
                <img src={meta.image} alt={meta.alt} loading="lazy" decoding="async" width="1000" height="1200" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/90 via-[#17130f]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#f0d99d]">{meta.eyebrow}</p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold sm:text-3xl">{category}</h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition group-hover:border-[#d7b56b] group-hover:bg-[#d7b56b] group-hover:text-[#211c16]"><ArrowIcon width={17} height={17} /></span>
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{meta.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable product grid */}
      <section id="product-range" className="scroll-mt-28 bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Wholesale product range</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#211c16] sm:text-5xl">Find your next best-seller.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#6b6255] sm:text-base">Select a category to browse the range. Product specifications, availability and wholesale pricing can be discussed directly with our team.</p>
            </div>
            <span className="text-sm text-[#766d60]">Showing <strong className="text-[#211c16]">{shown.length}</strong> {shown.length === 1 ? 'product' : 'products'}</span>
          </div>

          <div className="sticky top-[68px] z-30 -mx-5 mt-8 overflow-x-auto border-y border-[#e9dfcc] bg-[#faf7f0]/95 px-5 py-3 backdrop-blur-md sm:top-[104px] sm:mx-0 sm:rounded-full sm:border sm:px-3">
            <div role="tablist" aria-label="Filter products by category" className="flex w-max gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={filter === item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold transition sm:text-sm ${filter === item ? 'bg-[#211c16] text-[#f0d99d] shadow-sm' : 'text-[#6b6255] hover:bg-white hover:text-[#211c16]'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {shown.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map((product, index) => {
                const photo = product.group === 'Raw Supply'
                  ? (index % 2 === 0 ? images.raw : images.detail)
                  : product.group === 'Ready-to-use'
                    ? (index % 2 === 0 ? images.ready : images.waves)
                    : (index % 2 === 0 ? images.specialty : images.salon);
                return (
                  <article key={product.slug} className="reveal group overflow-hidden rounded-[1.4rem] border border-[#e9dfcc] bg-[#fffdfa] transition duration-500 hover:-translate-y-1.5 hover:border-[#c8a258]/70 hover:shadow-[0_22px_55px_-34px_rgba(42,31,15,.35)]" style={{ transitionDelay: `${(index % 3) * 70}ms` }}>
                    <div className="relative aspect-[5/4] overflow-hidden bg-[#e8dfcf]">
                      <img src={photo || productPhotos[index % productPhotos.length]} alt={`${product.name} human hair product`} loading="lazy" decoding="async" width="1000" height="800" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-[#fffdfa]/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#755721] backdrop-blur">{product.group}</span>
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-2xl font-semibold leading-tight text-[#211c16]">{product.name}</h3>
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e1d1ae] text-[#8c692b] transition group-hover:bg-[#d7b56b] group-hover:text-[#211c16]"><ArrowIcon width={14} height={14} /></span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#6b6255]">{product.blurb}</p>
                      {product.details?.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {product.details.slice(0, 3).map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-xs leading-5 text-[#4d453a]">
                              <CheckIcon width={14} height={14} className="mt-0.5 shrink-0 text-[#a47c32]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                      <a
                        href={waLink(`Hello ${company.name}, please share wholesale details and pricing for ${product.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-between rounded-full border border-[#d8c49b] px-4 py-3 text-xs font-semibold text-[#4d3b1d] transition hover:border-[#211c16] hover:bg-[#211c16] hover:text-[#f0d99d]"
                      >
                        Enquire about this product <WhatsAppIcon size={17} className="text-[#25D366]" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="mt-10 rounded-2xl border border-[#e9dfcc] bg-[#faf7f0] p-8 text-center text-[#6b6255]">No products are listed in this category yet. Contact us for help with your requirements.</p>
          )}
        </div>
      </section>

      {/* Hair texture guide */}
      <section className="bg-[#faf7f0] py-16 sm:py-24">
        <div className="container-x">
          <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>Texture guide</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#211c16] sm:text-5xl">Different textures. Different possibilities.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#6b6255] lg:col-span-5 lg:justify-self-end">Texture, colour, length and finish can be discussed during your wholesale enquiry, based on the product and current availability.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {textures.map((texture, index) => (
              <article key={texture.name} className="reveal group overflow-hidden rounded-[1.4rem] border border-[#e9dfcc] bg-white" style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="relative aspect-[5/3] overflow-hidden bg-[#e8dfcf]">
                  <img src={texture.image} alt={`${texture.name} hair texture inspiration`} loading="lazy" decoding="async" width="1000" height="600" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#fffdfa]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#755721]">{texture.name}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <svg viewBox="-15 0 50 100" className="h-16 w-8 shrink-0" aria-hidden="true">
                      <path d={texture.path} fill="none" stroke="#b8924b" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-[#211c16]">{texture.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#6b6255]">{texture.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Single-drawn versus double-drawn guide */}
      <section className="relative overflow-hidden bg-[#1c1813] py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-[#d7b56b]/10 sm:h-[560px] sm:w-[560px]" aria-hidden="true" />
        <div className="container-x relative">
          <div className="reveal mx-auto max-w-2xl text-center">
            <SectionLabel light>Know the difference</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">Single drawn <span className="italic text-[#e8c77d]">vs.</span> double drawn.</h2>
            <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base">A simple comparison to help you discuss the right specification for your product range.</p>
          </div>
          <div className="reveal mx-auto mt-10 max-w-5xl overflow-x-auto rounded-[1.4rem] border border-white/15">
            <div className="min-w-[540px]">
              <div className="grid grid-cols-3 bg-white/[0.06] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e8c77d] sm:text-xs sm:tracking-[0.2em]">
                <div className="p-4 sm:p-6">Feature</div>
                <div className="p-4 sm:p-6">Single drawn</div>
                <div className="p-4 sm:p-6">Double drawn</div>
              </div>
              {compare.map(([label, single, double]) => (
                <div key={label} className="grid grid-cols-3 border-t border-white/10 text-xs sm:text-sm">
                  <div className="p-4 font-display text-base text-white sm:p-6 sm:text-xl">{label}</div>
                  <div className="p-4 leading-6 text-white/65 sm:p-6">{single}</div>
                  <div className="p-4 leading-6 text-white/85 sm:p-6">{double}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-5 text-white/45">Descriptions are general guidance; exact characteristics depend on the hair batch and product specification.</p>
        </div>
      </section>

      {/* Wholesale custom-order CTA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="reveal grid overflow-hidden rounded-[1.8rem] border border-[#e5d6b6] bg-[#faf7f0] lg:grid-cols-2">
            <div className="relative min-h-[260px] bg-[#211c16] sm:min-h-[340px]">
              <img src={images.salon} alt="Professional salon setting representing custom hair product preparation" loading="lazy" decoding="async" width="1200" height="900" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17130f]/35 to-transparent" />
            </div>
            <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-14">
              <SectionLabel>Have a specific brief?</SectionLabel>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#211c16] sm:text-5xl">Your requirements deserve a closer conversation.</h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[#6b6255] sm:text-base">Tell us the product type, length, finish and quantity you have in mind. Our team can discuss suitable wholesale and custom-stitching options.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waLink(`Hello ${company.name}, I would like to discuss a customised human hair product order.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#211c16] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8b682c]">
                  <WhatsAppIcon size={17} /> Discuss a custom order
                </a>
                <Link to="/wholesale-enquiry" className="inline-flex items-center gap-2 rounded-full border border-[#cbb98e] px-5 py-3 text-sm font-semibold text-[#4d3b1d] transition hover:bg-white">
                  Enquiry form <ArrowIcon width={15} height={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
