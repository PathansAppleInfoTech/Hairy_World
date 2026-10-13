import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon, CheckIcon, ShieldIcon, ScissorsIcon, TagIcon, TruckIcon, GlobeIcon } from '../components/Icons';

/* ───────── small local helpers ───────── */
function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const groups = ['Raw Supply', 'Ready-to-use', 'Specialty'];
const groupMeta = {
  'Raw Supply': { img: '/images/bundles-silk.jpg', line: 'The foundation of every extension: bulk, single drawn and double drawn hair, sorted and supplied in wholesale volume.' },
  'Ready-to-use': { img: '/images/bundles-clip.jpg', line: 'Finished clip-ins, clip-ons, ponytails, buns, clutch and tail pieces, stitched in-house and ready for your shelves.' },
  Specialty: { img: '/images/bundles-natural.jpg', line: 'Tiruppan, wrapped extensions and made-to-order pieces built to your exact brief by our stitching unit.' },
};

const steps = [
  { t: 'Enquire', d: 'Message us on WhatsApp with what you stock and your volumes.', Icon: WhatsAppIcon },
  { t: 'Select & Sample', d: 'Choose texture, length and product type. Samples on request.', Icon: TagIcon },
  { t: 'Stitch & Customize', d: 'Our own unit produces to your specification.', Icon: ScissorsIcon },
  { t: 'Quality Check', d: 'Every batch is checked before it is packed.', Icon: ShieldIcon },
  { t: 'Dispatch', d: 'Packed and shipped across India and overseas.', Icon: TruckIcon },
];

const faqs = [
  { q: 'Do you sell only to businesses?', a: 'Yes. Hairy World is a wholesale supplier. We work with wholesalers, salons, distributors, retailers, exporters and hair extension brands. Contact us on WhatsApp for wholesale rates.' },
  { q: 'Is the hair 100% original human hair?', a: 'Yes. Everything we supply is original human hair, and we are happy to discuss texture, length and finish for your order.' },
  { q: 'Can you make custom hair extensions to my specification?', a: 'Yes. We have our own stitching unit in Kerala, so clip-ins, ponytails, buns, wrapped extensions and other pieces can be made to your brief.' },
  { q: 'Which countries do you export to?', a: 'We supply GCC countries, the UK, USA, Canada and other international markets, as well as buyers across India.' },
  { q: 'How do I place a wholesale enquiry?', a: 'Tap any WhatsApp button on this site, or use the wholesale enquiry form. Tell us your product, quantity and country and we will reply with details.' },
];

export default function Home() {
  useReveal();
  const [tab, setTab] = useState(groups[0]);
  const [open, setOpen] = useState(0);
  const list = company.products.filter((p) => p.group === tab);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <SEO path="/" schema={faqSchema} />

      {/* ═════════ 1. HERO ═════════ */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-gold-200/40 blur-3xl" />
          <div className="absolute -bottom-52 right-0 h-[560px] w-[560px] rounded-full bg-gold-100/70 blur-3xl" />
          <svg className="absolute left-0 top-0 h-full w-full opacity-[0.14]" viewBox="0 0 1200 800" preserveAspectRatio="none">
            {Array.from({ length: 9 }).map((_, i) => (
              <path key={i} d={`M -50,${120 + i * 70} C 250,${20 + i * 70} 450,${260 + i * 70} 700,${140 + i * 70} S 1100,${40 + i * 70} 1260,${160 + i * 70}`} fill="none" stroke="#B8922A" strokeWidth="1" />
            ))}
          </svg>
        </div>

        <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-gold-500" />Wholesale human hair · Alappuzha, Kerala</p>
            <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-[4.6rem]">
              Original human hair,<br />
              supplied <span className="gold-text gold-text-anim italic">to the world's</span><br />
              hair businesses.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {company.name} is a wholesale human hair supplier and exporter with {company.yearsExperience}+ years in the trade. Bulk hair, drawn hair and ready-made extensions, stitched in our own unit and shipped to salons, wholesalers and distributors worldwide.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-gold"><WhatsAppIcon size={18} /> Get wholesale rates</a>
              <Link to="/products" className="btn-ghost border-ink/20 text-ink hover:border-gold-500 hover:text-gold-600">Explore products <ArrowIcon width={16} height={16} /></Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/70">
              {['100% original human hair', 'Own stitching unit', 'Export to GCC · UK · USA · Canada'].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckIcon width={16} height={16} className="text-gold-500" />{t}</li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative mx-auto aspect-[4/5] w-[88%] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border border-gold-300 bg-ink p-2 shadow-lift">
              <img src="/images/model-black.jpg" alt="Model with long wavy black human hair extensions" width="564" height="664" className="h-full w-full rounded-t-[999px] rounded-b-[1.5rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-2 h-36 w-36 overflow-hidden rounded-full border-[6px] border-ivory shadow-lift sm:h-44 sm:w-44">
              <img src="/images/bundles-silk.jpg" alt="Bundles of raw human hair on silk" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-0 top-8 animate-floaty rounded-2xl border border-gold-200 bg-white px-4 py-3 shadow-lift">
              <p className="font-display text-3xl font-semibold leading-none gold-text">{company.yearsExperience}+</p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-ink/60">Years of trust</p>
            </div>
            <div className="absolute -right-1 bottom-14 rounded-full bg-ink px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-300 shadow-lift">100% Original</div>
          </div>
        </div>
      </section>

      {/* ═════════ 2. MARQUEE ═════════ */}
      <section aria-label="Product range" className="overflow-hidden border-y border-gold-500/30 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...company.products, ...company.products].map((p, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 font-display text-xl font-semibold text-ink sm:text-2xl">
              {p.name}<span className="h-1.5 w-1.5 rotate-45 bg-ink/70" />
            </span>
          ))}
        </div>
      </section>

      {/* ═════════ 3. WHO WE ARE (editorial + counters) ═════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <p className="eyebrow">Who we are</p>
            <p className="mt-4 font-display text-[7rem] font-semibold leading-none gold-text sm:text-[10rem]">15<span className="text-5xl align-top sm:text-7xl">+</span></p>
            <p className="-mt-2 font-display text-2xl italic text-ink/70">years inside the hair trade</p>
          </div>
          <div className="reveal lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">A wholesale partner, not a middleman.</h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
              From our base in Alappuzha we source, sort, stitch and ship human hair for businesses that depend on consistency. Because we run our own stitching unit, the hair you order is made the way you need it, not whatever a third party had in stock.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-sm font-medium uppercase tracking-widest text-gold-600 hover:gap-3 transition-all">Read our story <ArrowIcon width={16} height={16} /></Link>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold-200 bg-gold-200 sm:grid-cols-4">
              {company.stats.map((s) => (
                <div key={s.label} className="bg-ivory p-5 sm:p-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-4xl font-semibold text-ink"><Counter to={s.value} suffix={s.suffix} /></dd>
                  <p className="mt-1 text-xs leading-snug text-ink/60">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═════════ 4. RANGE (tabbed showcase) ═════════ */}
      <section className="bg-ivory-deep py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">The range</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">Everything a hair business needs to stock.</h2>
            </div>
            <Link to="/products" className="btn-ghost w-fit border-ink/20 hover:border-gold-500 hover:text-gold-600">View all products <ArrowIcon width={16} height={16} /></Link>
          </div>

          <div className="reveal mt-12 grid overflow-hidden rounded-[2rem] border border-gold-200 bg-white shadow-lift lg:grid-cols-12">
            <div className="p-6 sm:p-10 lg:col-span-7">
              <div role="tablist" className="flex flex-wrap gap-2">
                {groups.map((g) => (
                  <button key={g} role="tab" aria-selected={tab === g} onClick={() => setTab(g)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${tab === g ? 'bg-ink text-gold-300' : 'bg-ivory text-ink/70 hover:bg-gold-100'}`}>{g}</button>
                ))}
              </div>
              <p className="mt-6 max-w-lg text-ink/70">{groupMeta[tab].line}</p>
              <ul className="mt-6 divide-y divide-gold-100">
                {list.map((p) => (
                  <li key={p.slug} className="group flex items-start justify-between gap-4 py-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-gold-600">{p.name}</h3>
                      <p className="mt-1 text-sm text-ink/60">{p.details.join(' · ')}</p>
                    </div>
                    <a href={waLink(`Hello ${company.name}, please share wholesale details for ${p.name}.`)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${p.name} on WhatsApp`}
                      className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-300 text-gold-600 transition-all group-hover:bg-gold-400 group-hover:text-ink"><WhatsAppIcon size={16} /></a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[320px] bg-ink lg:col-span-5">
              <img key={tab} src={groupMeta[tab].img} alt={`${tab} human hair products`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-display text-3xl italic text-white">{tab}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ 5. WHY PARTNER (dark, staggered) ═════════ */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <img src={company.logos.emblemWhite} alt="" aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 w-[520px] opacity-[0.04]" />
        <div className="container-x relative">
          <div className="reveal max-w-2xl">
            <p className="eyebrow !text-gold-300">Why partner with us</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">Four reasons buyers <span className="gold-text italic">stay</span> with us.</h2>
          </div>
          <div className="mt-14 grid gap-x-12 gap-y-4 md:grid-cols-2">
            {company.whyUs.map((w, i) => (
              <div key={w.title} className={`reveal group relative border-t border-white/15 py-8 ${i % 2 ? 'md:mt-16' : ''}`} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="font-display text-6xl font-semibold text-gold-400/30 transition-colors group-hover:text-gold-400">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{w.title}</h3>
                <p className="mt-3 max-w-md text-white/65">{w.text}</p>
                <span className="absolute left-0 top-0 h-px w-0 bg-gold-400 transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ 6. PROCESS (timeline) ═════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow">How ordering works</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">From first message to dispatch.</h2>
          </div>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-4">
            <span className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold-300 to-gold-100 max-md:block md:left-[10%] md:right-[10%] md:top-[27px] md:h-px md:w-auto md:bg-gradient-to-r" aria-hidden="true" />
            {steps.map(({ t, d, Icon }, i) => (
              <li key={t} className="reveal relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-400 bg-white text-gold-600 shadow-gold"><Icon width={22} height={22} /></span>
                <div className="md:mt-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-600">Step {i + 1}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═════════ 7. WHO WE SUPPLY + MARKETS ═════════ */}
      <section className="bg-ivory-deep py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="grid grid-cols-6 grid-rows-6 gap-3">
              <img src="/images/model-curls.jpg" alt="Voluminous curled hair extensions" loading="lazy" className="col-span-4 row-span-4 h-full w-full rounded-2xl object-cover shadow-lift" />
              <img src="/images/bundles-natural.jpg" alt="Natural wavy and curly hair bundles" loading="lazy" className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover shadow-lift" />
              <div className="col-span-2 row-span-3 flex flex-col justify-center rounded-2xl bg-ink p-4 text-center text-white">
                <GlobeIcon className="mx-auto text-gold-400" width={28} height={28} />
                <p className="mt-2 font-display text-xl leading-tight">Shipping worldwide</p>
              </div>
              <div className="col-span-4 row-span-2 flex items-center rounded-2xl border border-gold-300 bg-white p-5">
                <p className="font-display text-xl leading-snug sm:text-2xl">GCC · UK · USA · Canada <span className="text-gold-600">&amp; beyond</span></p>
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Who we supply</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">Built for people who sell hair.</h2>
            <p className="mt-5 text-ink/70">Whether you run a salon chain, a wholesale counter or an extension brand, we supply in the quantities and specifications your business needs.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {company.buyers.map((b) => (
                <span key={b} className="rounded-full border border-gold-400/60 bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-sm">{b}</span>
              ))}
            </div>
            <Link to="/global-export" className="mt-9 inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-sm font-medium uppercase tracking-widest text-gold-600 transition-all hover:gap-3">Our export network <ArrowIcon width={16} height={16} /></Link>
          </div>
        </div>
      </section>

      {/* ═════════ 8. FAQ ═════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow">Good to know</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">Frequently asked.</h2>
            <p className="mt-4 text-ink/60">Something else on your mind? Ask us directly on WhatsApp.</p>
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6"><WhatsAppIcon size={18} /> Ask a question</a>
          </div>
          <div className="reveal lg:col-span-8">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-gold-200">
                <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display text-xl font-semibold sm:text-2xl">{f.q}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400 text-gold-600 transition-transform duration-300 ${open === i ? 'rotate-45 bg-gold-400 text-ink' : ''}`}>+</span>
                </button>
                <div className={`grid transition-all duration-500 ${open === i ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden text-ink/70">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ 9. WHATSAPP CTA ═════════ */}
      <section className="px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 p-8 sm:p-14">
          <img src={company.logos.emblem} alt="" aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 w-[380px] opacity-20 mix-blend-overlay" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">Tell us what you need. We'll reply on WhatsApp.</h2>
              <p className="mt-4 max-w-md text-ink/75">Pick a topic to open a pre-written message, or write your own.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Bulk & drawn hair rates', 'Hello, I would like wholesale rates for bulk / drawn human hair.'],
                ['Clip-in / clip-on sets', 'Hello, I would like wholesale details for clip-in and clip-on extensions.'],
                ['Custom stitching order', 'Hello, I would like to discuss a custom hair product order.'],
                ['Export / shipping', 'Hello, I would like to know about export and shipping to my country.'],
              ].map(([l, m]) => (
                <a key={l} href={waLink(m)} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-2xl bg-ink px-5 py-4 text-sm font-medium text-white transition-all hover:-translate-y-1 hover:shadow-lift">
                  {l}<WhatsAppIcon size={18} className="text-[#25D366] transition-transform group-hover:scale-125" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
