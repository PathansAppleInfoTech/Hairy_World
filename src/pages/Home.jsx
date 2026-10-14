import { useState } from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import {
  ArrowIcon,
  WhatsAppIcon,
  CheckIcon,
  ShieldIcon,
  ScissorsIcon,
  TagIcon,
  TruckIcon,
  GlobeIcon,
} from '../components/Icons';

const unsplash = (photo, width = 1200, height = 900) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&h=${height}&q=82`;

const images = {
  hero: '/images/hero.png',
  story: '/images/story.png',
  detail: '/images/detail.png',
  texture: '/images/texture.png',
  waves: '/images/waves.png',
  raw: '/images/raw-supply.png',
  ready: '/images/ready-to-use.png',
  specialty:'/images/speciality.png',
  salon: 'images/salon.png',
};

const groups = ['Raw Supply', 'Ready-to-use', 'Specialty'];

const groupMeta = {
  'Raw Supply': {
    img: images.raw,
    alt: 'Beauty editorial photograph representing natural human hair products',
    eyebrow: 'The essentials',
    line: 'The foundation of every extension: bulk, single-drawn and double-drawn hair for businesses buying wholesale quantities.',
  },
  'Ready-to-use': {
    img: images.ready,
    alt: 'Fashion and hair styling editorial image',
    eyebrow: 'Ready for styling',
    line: 'Finished clip-ins, clip-ons, ponytails, buns, clutch and tail pieces, stitched in-house and prepared for your product range.',
  },
  Specialty: {
    img: images.specialty,
    alt: 'Close-up beauty portrait with styled hair',
    eyebrow: 'Made to your brief',
    line: 'Tiruppan, wrapped extensions and made-to-order pieces created to suit your product specifications.',
  },
};

const steps = [
  { t: 'Tell us what you need', d: 'Share the product type, preferred length, texture, quantity and destination.', Icon: WhatsAppIcon },
  { t: 'Select your range', d: 'Discuss available options and request samples where appropriate.', Icon: TagIcon },
  { t: 'Custom stitching', d: 'Our own stitching unit supports agreed product specifications.', Icon: ScissorsIcon },
  { t: 'Quality review', d: 'Orders are checked and prepared before packing and dispatch.', Icon: ShieldIcon },
  { t: 'Dispatch', d: 'We coordinate supply for customers across India and international markets.', Icon: TruckIcon },
];

const faqs = [
  {
    q: 'Do you sell only to businesses?',
    a: 'Hairy World focuses on wholesale supply for salons, wholesalers, distributors, retailers, exporters and hair extension brands. Contact us for product details and wholesale pricing.',
  },
  {
    q: 'What types of human hair products do you offer?',
    a: 'Our range includes bulk human hair, single-drawn and double-drawn hair, clip-on and clip-in extensions, ponytails, hair buns, clutch hair, tail extensions, Tiruppan, wrapped extensions and customised products.',
  },
  {
    q: 'Can you make products to our specifications?',
    a: 'Yes. Hairy World has its own stitching unit and can discuss customised products and specifications based on your requirements.',
  },
  {
    q: 'Which markets do you serve?',
    a: 'We serve customers across India and international markets including GCC countries, the UK, the USA and Canada. Contact us to discuss your destination and order requirements.',
  },
  {
    q: 'How do I request wholesale rates?',
    a: 'Message us on WhatsApp with the product you are interested in, approximate quantity and destination country. Our team can then share relevant information.',
  },
];

const reasons = [
  {
    no: '01',
    title: '15+ years of experience',
    text: 'Industry experience informs how we discuss product choices, specifications and wholesale needs.',
  },
  {
    no: '02',
    title: 'Our own stitching unit',
    text: 'In-house stitching provides more flexibility when discussing custom products and finishes.',
  },
  {
    no: '03',
    title: 'Wholesale-first approach',
    text: 'We work with businesses looking for a dependable product range and practical supply conversations.',
  },
  {
    no: '04',
    title: 'International supply',
    text: 'We support enquiries from India, GCC markets, the UK, the USA, Canada and beyond.',
  },
];

function SectionEyebrow({ children, light = false }) {
  return (
    <p className={`flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${light ? 'text-[#e8c77d]' : 'text-[#94702d]'}`}>
      <span className={`h-px w-8 ${light ? 'bg-[#e8c77d]' : 'bg-[#b8924b]'}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  useReveal();
  const [tab, setTab] = useState(groups[0]);
  const [openFaq, setOpenFaq] = useState(0);

  const products = company.products ?? [];
  const activeProducts = products.filter((product) => product.group === tab);
  const buyers = company.buyers ?? ['Salons', 'Wholesalers', 'Distributors', 'Retailers'];
  const whyUs = company.whyUs?.length ? company.whyUs : reasons.map((reason) => ({ title: reason.title, text: reason.text }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <SEO path="/" schema={faqSchema} />

      {/* Full-width editorial hero */}
      <section className="relative isolate flex min-h-[690px] items-center overflow-hidden bg-[#141210] text-white sm:min-h-[740px] lg:min-h-[790px]">
        <img
          src={images.hero}
          alt="Beauty editorial portrait representing premium hair styling"
          width="2200"
          height="1500"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[center_34%]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(12,11,10,0.96)_0%,rgba(12,11,10,0.85)_39%,rgba(12,11,10,0.47)_70%,rgba(12,11,10,0.32)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(12,11,10,0.76)_0%,transparent_42%,rgba(12,11,10,0.18)_100%)]" />
        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#b58a3b]/15 blur-3xl" />

        <div className="container-x relative grid w-full items-center gap-12 py-24 sm:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="max-w-3xl lg:col-span-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#e7c77e] shadow-[0_0_16px_rgba(231,199,126,0.8)]" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/90">Human hair wholesale · Kerala, India</span>
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[5.4rem]">
              A better source for <span className="italic text-[#e8c77d]">beautiful hair.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {company.name} supplies original human hair and ready-to-use extensions to salons, wholesalers, distributors and retailers—with 15+ years of experience and an in-house stitching unit.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d6b267] px-6 py-3 text-sm font-semibold text-[#19150f] shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#efda9e] focus:outline-none focus:ring-2 focus:ring-[#f4dc9e] focus:ring-offset-2 focus:ring-offset-[#141210]"
              >
                <WhatsAppIcon size={18} /> Request wholesale rates
              </a>
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[#e8c77d] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#f4dc9e]"
              >
                Explore our range <ArrowIcon width={16} height={16} />
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85 sm:gap-x-8">
              {['Original human hair', 'In-house stitching', 'Wholesale & export'].map((label) => (
                <li key={label} className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className="shrink-0 text-[#e8c77d]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <aside className="hidden lg:col-span-4 lg:block" aria-label="Hairy World at a glance">
            <div className="ml-auto max-w-[310px] rounded-[1.75rem] border border-white/20 bg-[#171512]/65 p-6 shadow-2xl backdrop-blur-md xl:max-w-[340px]">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
                <div>
                  <p className="font-display text-5xl font-semibold leading-none text-[#e8c77d]">15<span className="text-3xl">+</span></p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/65">Years of experience</p>
                </div>
                <img src={company.logos.emblemWhite} alt="" aria-hidden="true" className="h-14 w-14 object-contain opacity-80" />
              </div>
              <p className="mt-5 font-display text-2xl leading-snug text-white">Made for the people who make hair their business.</p>
              <p className="mt-3 text-sm leading-6 text-white/65">Bulk supply, finished extensions and product customisation from Alappuzha, Kerala.</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-[#d6b267]/60">
                  <img src={images.texture} alt="" aria-hidden="true" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Hairy World</p>
                  <p className="mt-0.5 text-xs text-white/55">Original human hair wholesale</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-black/25 backdrop-blur-sm">
          <div className="container-x grid grid-cols-2 gap-4 py-4 sm:grid-cols-4 sm:py-5">
            {[
              ['01', 'Original human hair'],
              ['02', 'Own stitching unit'],
              ['03', 'Wholesale focused'],
              ['04', 'Global markets'],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-3">
                <span className="font-display text-sm text-[#e8c77d]">{number}</span>
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.13em] text-white/75 sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial introduction */}
      <section className="overflow-hidden bg-[#f8f5ee] py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal relative lg:col-span-5">
            <div className="relative mr-8 aspect-[4/5] overflow-hidden rounded-t-[11rem] rounded-b-[1.75rem] bg-[#e6dcc8] sm:mr-12">
              <img
                src={images.story}
                alt="Beauty portrait with long, styled hair"
                width="1000"
                height="1250"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
              <p className="absolute bottom-6 left-6 font-display text-2xl italic text-white sm:text-3xl">Made with care. Supplied with confidence.</p>
            </div>
            <div className="absolute -bottom-5 right-0 w-36 overflow-hidden rounded-2xl border-[5px] border-[#f8f5ee] shadow-xl sm:w-44">
              <img src={images.detail} alt="Hair styling detail" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover" />
            </div>
            <div className="absolute left-0 top-8 rounded-full border border-[#cdb985] bg-[#f8f5ee]/95 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#705321] shadow-sm">
              Alappuzha · Kerala
            </div>
          </div>

          <div className="reveal lg:col-span-7">
            <SectionEyebrow>Who we are</SectionEyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl lg:text-[3.6rem]">
              A wholesale partner built around <span className="italic text-[#9a742d]">your business.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#625a4e] sm:text-lg sm:leading-8">
              Based in Alappuzha, Kerala, Hairy World combines industry experience with product expertise and in-house stitching. We work with buyers to find human hair products that fit their ranges, specifications and markets.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#625a4e]">
              From bulk hair to ready-made extensions and customised pieces, our focus is on quality, competitive wholesale pricing, reliable supply and long-term business relationships.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['15+', 'Years in the trade'],
                ['In-house', 'Stitching unit'],
                ['B2B', 'Wholesale focus'],
                ['Global', 'Market reach'],
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-[#c6a45c] pl-3 py-1">
                  <p className="font-display text-xl font-semibold text-[#211c16] sm:text-2xl">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#766d60]">{label}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-9 inline-flex items-center gap-2 border-b border-[#b8924b] pb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#755721] transition-all hover:gap-3">
              Discover our story <ArrowIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product range image cards */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Explore the range</SectionEyebrow>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">
                The right products for every <span className="italic text-[#9a742d]">hair business.</span>
              </h2>
            </div>
            <Link to="/products" className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d8c9a7] px-5 py-3 text-sm font-semibold text-[#31281b] transition hover:border-[#9a742d] hover:bg-[#f8f5ee]">
              View all products <ArrowIcon width={16} height={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
            {groups.map((group, index) => {
              const meta = groupMeta[group];
              const count = products.filter((product) => product.group === group).length;
              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => {
                    setTab(group);
                    document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="reveal group relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[#1e1a14] text-left shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#b8924b] focus:ring-offset-2"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <img src={meta.img} alt={meta.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-black/20 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {meta.eyebrow}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#e8c77d]">Collection 0{index + 1}</span>
                      {count > 0 && <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">{count} {count === 1 ? 'product' : 'products'}</span>}
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">{group}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{meta.line}</p>
                    <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 text-white transition duration-300 group-hover:border-[#e8c77d] group-hover:bg-[#e8c77d] group-hover:text-[#211c16]">
                      <ArrowIcon width={17} height={17} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabbed product showcase */}
      <section id="product-showcase" className="scroll-mt-24 bg-[#f1ece1] py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionEyebrow>Wholesale product catalogue</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">
              Find the range that fits your market.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6b6255]">
              Explore our product groups, then message us with your preferred styles, quantities and destination for a wholesale discussion.
            </p>
          </div>

          <div className="reveal mt-10 overflow-hidden rounded-[1.75rem] border border-[#e0d4bb] bg-white shadow-[0_18px_70px_rgba(52,39,17,0.08)] lg:grid lg:grid-cols-12">
            <div className="p-6 sm:p-9 lg:col-span-7 lg:p-11">
              <div role="tablist" aria-label="Product categories" className="flex flex-wrap gap-2">
                {groups.map((group) => (
                  <button
                    key={group}
                    type="button"
                    role="tab"
                    aria-selected={tab === group}
                    onClick={() => setTab(group)}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#b8924b] focus:ring-offset-2 ${tab === group ? 'bg-[#241f18] text-[#e8c77d]' : 'bg-[#f5f1e8] text-[#6c6254] hover:bg-[#ebe1cc] hover:text-[#241f18]'}`}
                  >
                    {group}
                  </button>
                ))}
              </div>
              <div className="mt-7 border-b border-[#e9dfcc] pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a742d]">{groupMeta[tab].eyebrow}</p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b6255] sm:text-base">{groupMeta[tab].line}</p>
              </div>

              {activeProducts.length > 0 ? (
                <ul className="divide-y divide-[#eee6d8]">
                  {activeProducts.map((product) => (
                    <li key={product.slug ?? product.name} className="group flex items-center justify-between gap-4 py-5">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-[#282219] transition-colors group-hover:text-[#8c6728] sm:text-2xl">{product.name}</h3>
                        {Array.isArray(product.details) && product.details.length > 0 && (
                          <p className="mt-1.5 text-sm leading-6 text-[#807669]">{product.details.join(' · ')}</p>
                        )}
                      </div>
                      <a
                        href={waLink(`Hello ${company.name}, please share wholesale details for ${product.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${product.name} on WhatsApp`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c18e] text-[#8a6728] transition duration-300 hover:border-[#241f18] hover:bg-[#241f18] hover:text-[#e8c77d]"
                      >
                        <WhatsAppIcon size={17} />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-8 text-sm leading-6 text-[#6b6255]">
                  Contact us to discuss available products and custom requirements in this category.
                </div>
              )}
              <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#755721] transition-all hover:gap-3">
                Ask for wholesale pricing <ArrowIcon width={16} height={16} />
              </a>
            </div>

            <div className="relative min-h-[380px] overflow-hidden bg-[#211b13] lg:col-span-5 lg:min-h-full">
              <img key={tab} src={groupMeta[tab].img} alt={groupMeta[tab].alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/90 via-[#17130f]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8c77d]">Hairy World collection</p>
                <p className="mt-3 max-w-sm font-display text-3xl font-semibold text-white sm:text-4xl">{tab}</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">Wholesale supply and customised options for professional buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-[#191612] py-20 text-white sm:py-28">
        <img src={company.logos.emblemWhite} alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -right-32 -top-28 w-[440px] opacity-[0.045] sm:w-[560px]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <SectionEyebrow light>Why Hairy World</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl">
              A thoughtful approach to <span className="italic text-[#e8c77d]">wholesale.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
              We understand that product consistency, flexibility and communication matter when you are building a business. Our goal is to make every wholesale conversation practical and clear.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10">
              <img src={images.salon} alt="Beauty editorial image representing hair styling and salon professionals" loading="lazy" decoding="async" className="aspect-[5/3] w-full object-cover opacity-90" />
            </div>
          </div>

          <div className="grid gap-x-8 md:grid-cols-2 lg:col-span-7">
            {whyUs.slice(0, 4).map((item, index) => (
              <article key={item.title} className="reveal group border-t border-white/15 py-7 sm:py-8" style={{ transitionDelay: `${index * 80}ms` }}>
                <span className="font-display text-5xl font-semibold text-[#d7b56b]/35 transition-colors group-hover:text-[#d7b56b]">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
                <span className="mt-6 block h-px w-10 bg-[#c8a258] transition-all duration-500 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image-led craft / customisation section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal order-2 lg:order-1">
            <SectionEyebrow>Made for your brief</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">
              Product flexibility, backed by <span className="italic text-[#9a742d]">in-house stitching.</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-[#6b6255] sm:text-lg">
              Need a particular style or finish? Share your specifications with our team. We can discuss clip-in and clip-on extensions, ponytails, hair buns, clutch hair, tail extensions, Tiruppan, wrapped extensions and other customised products.
            </p>
            <div className="mt-7 space-y-4">
              {[
                'Discuss product type, length and finish',
                'Clarify quantity and wholesale requirements',
                'Coordinate customised stitching where available',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[#4d453a]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0e5cb] text-[#856226]"><CheckIcon width={13} height={13} /></span>
                  {item}
                </div>
              ))}
            </div>
            <a href={waLink('Hello Hairy World, I would like to discuss a customised human hair product order.')} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#211c16] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8b682c]">
              Discuss a custom order <WhatsAppIcon size={18} />
            </a>
          </div>

          <div className="reveal order-1 grid grid-cols-12 gap-3 lg:order-2">
            <div className="col-span-7 overflow-hidden rounded-t-[8rem] rounded-b-2xl bg-[#e8dfcf]">
              <img src={images.texture} alt="Close-up beauty image representing hair texture" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
            <div className="col-span-5 mt-12 overflow-hidden rounded-2xl bg-[#e8dfcf] sm:mt-20">
              <img src={images.waves} alt="Fashion editorial portrait with styled hair" loading="lazy" decoding="async" className="aspect-[3/4] h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
            <div className="col-span-12 flex items-center justify-between gap-5 rounded-2xl bg-[#f5f0e5] p-5 sm:p-6">
              <div>
                <p className="font-display text-xl font-semibold text-[#211c16] sm:text-2xl">Your product. Your requirements.</p>
                <p className="mt-1 text-sm text-[#766d60]">Custom discussions for wholesale buyers.</p>
              </div>
              <ScissorsIcon width={30} height={30} className="shrink-0 text-[#9a742d]" />
            </div>
          </div>
        </div>
      </section>

      {/* Ordering process */}
      <section className="bg-[#f6f2e9] py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">From first enquiry to dispatch.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6b6255]">A straightforward conversation helps us understand your business, your product needs and the best next step.</p>
          </div>

          <ol className="relative mt-12 grid gap-7 sm:mt-16 md:grid-cols-5 md:gap-4">
            <span className="absolute bottom-8 left-6 top-8 w-px bg-[#d9c38e] md:bottom-auto md:left-[10%] md:right-[10%] md:top-7 md:h-px md:w-auto" aria-hidden="true" />
            {steps.map(({ t, d, Icon }, index) => (
              <li key={t} className="reveal relative flex gap-4 md:flex-col md:items-center md:text-center" style={{ transitionDelay: `${index * 75}ms` }}>
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c4a45d] bg-[#fffdf8] text-[#886426] shadow-[0_5px_20px_rgba(75,54,17,0.08)]">
                  <Icon width={21} height={21} />
                </span>
                <div className="md:mt-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9a742d]">Step 0{index + 1}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#211c16] sm:text-2xl">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#766d60]">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Buyers and international reach */}
      <section className="overflow-hidden bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal relative lg:col-span-6">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              <div className="col-span-7 overflow-hidden rounded-[1.5rem] rounded-tl-[7rem] bg-[#e7ddca]">
                <img src={images.ready} alt="Fashion portrait representing hair styling and extensions" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
              </div>
              <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-[1.5rem] bg-[#e7ddca]">
                  <img src={images.raw} alt="Beauty photograph representing human hair products" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col justify-center rounded-[1.5rem] bg-[#211c16] p-4 text-white sm:p-5">
                  <GlobeIcon width={27} height={27} className="text-[#e8c77d]" />
                  <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">Serving buyers beyond borders.</p>
                </div>
              </div>
              <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#e8ddc6] bg-[#f8f5ee] p-5 sm:p-6">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#94702d]">Our markets</p>
                  <p className="mt-2 font-display text-xl font-semibold text-[#211c16] sm:text-2xl">India · GCC · UK · USA · Canada</p>
                </div>
                <GlobeIcon width={30} height={30} className="text-[#a17a31]" />
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-6">
            <SectionEyebrow>Who we serve</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">
              Built for people who <span className="italic text-[#9a742d]">sell hair.</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-[#6b6255] sm:text-lg">
              Whether you manage a salon, wholesale counter, retail business or extension brand, we can discuss the products and quantities that suit your business needs.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {buyers.map((buyer) => (
                <span key={buyer} className="rounded-full border border-[#dfd1b3] bg-[#fbf9f4] px-4 py-2.5 text-sm font-medium text-[#4d453a]">{buyer}</span>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#e7dece] py-6">
              <div>
                <p className="font-display text-2xl font-semibold text-[#211c16]">15+ years</p>
                <p className="mt-1 text-sm text-[#766d60]">Industry experience</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-[#211c16]">Made-to-brief</p>
                <p className="mt-1 text-sm text-[#766d60]">Custom product discussions</p>
              </div>
            </div>
            <Link to="/global-export" className="mt-8 inline-flex items-center gap-2 border-b border-[#b8924b] pb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#755721] transition-all hover:gap-3">
              Explore our export network <ArrowIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f5ee] py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <SectionEyebrow>Good to know</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">Frequently asked.</h2>
            <p className="mt-5 text-base leading-7 text-[#6b6255]">Need a product detail or wholesale quote? Talk to our team directly.</p>
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#211c16] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8b682c]">
              <WhatsAppIcon size={18} /> Ask us on WhatsApp
            </a>
            <div className="mt-9 hidden overflow-hidden rounded-[1.5rem] lg:block">
              <img src={images.detail} alt="Beauty editorial image" loading="lazy" decoding="async" className="aspect-[5/3] w-full object-cover" />
            </div>
          </div>

          <div className="reveal lg:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `home-faq-answer-${index}`;
              return (
                <div key={faq.q} className="border-b border-[#dfd3bb] first:border-t">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                  >
                    <span className="font-display text-xl font-semibold text-[#211c16] sm:text-2xl">{faq.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9ad70] text-xl font-light text-[#856226] transition duration-300 ${isOpen ? 'rotate-45 bg-[#d6b267] text-[#211c16]' : ''}`} aria-hidden="true">+</span>
                  </button>
                  <div id={answerId} hidden={!isOpen} className="pb-6 pr-10 text-sm leading-7 text-[#6b6255] sm:text-base">
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-16 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#211c16] text-white">
          <img src={images.hero} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17130f]/95 via-[#211c16]/90 to-[#211c16]/65" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#d6b267]/20" />
          <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-[#d6b267]/15" />

          <div className="relative grid gap-9 p-7 sm:p-10 md:p-14 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <SectionEyebrow light>Start a conversation</SectionEyebrow>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl">
                Tell us what your business needs.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                Share the product, quantity and destination you have in mind. We’ll help you explore suitable wholesale options.
              </p>
              <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#d6b267] px-6 py-3 text-sm font-semibold text-[#211c16] transition hover:bg-[#efda9e]">
                <WhatsAppIcon size={18} /> Get in touch
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-6">
              {[
                ['Bulk & drawn hair', 'Hello Hairy World, please share wholesale rates for bulk and drawn human hair.'],
                ['Clip-in & clip-on', 'Hello Hairy World, please share wholesale details for clip-in and clip-on extensions.'],
                ['Custom stitching', 'Hello Hairy World, I would like to discuss a customised human hair product order.'],
                ['Export & shipping', 'Hello Hairy World, I would like to discuss wholesale supply and shipping to my country.'],
              ].map(([label, message]) => (
                <a key={label} href={waLink(message)} target="_blank" rel="noopener noreferrer" className="group flex min-h-[78px] items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#d6b267]/70 hover:bg-white/[0.1]">
                  <span>{label}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b267]/15 text-[#e8c77d] transition group-hover:bg-[#d6b267] group-hover:text-[#211c16]"><WhatsAppIcon size={17} /></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compact contact strip */}
      <section className="border-t border-[#e5dac3] bg-white py-8">
        <div className="container-x flex flex-col gap-3 text-sm text-[#6b6255] sm:flex-row sm:items-center sm:justify-between">
          <p><span className="font-semibold text-[#211c16]">Hairy World</span> · Avalookkunnu P.O., Alappuzha – 688006, Kerala, India</p>
          <a href={`tel:${company.phoneRaw ?? company.phone}`} className="font-semibold text-[#755721] hover:underline">{company.phone}</a>
        </div>
      </section>
    </>
  );
}
