import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon } from '../components/Icons';

const pillars = [
  { n: '01', w: 'Source', d: 'Original human hair gathered and sorted with consistency in mind, so what you reorder matches what you ordered before.' },
  { n: '02', w: 'Stitch', d: 'Our own stitching unit turns bulk hair into clip-ins, clip-ons, ponytails, buns, clutch hair, tails and wrapped extensions.' },
  { n: '03', w: 'Customize', d: 'Need a specific weight, length, packaging or finish? We build to your brief instead of asking you to pick from a fixed catalogue.' },
  { n: '04', w: 'Supply', d: 'Reliable, prompt dispatch to wholesalers, salons and distributors in India, the GCC, UK, USA, Canada and beyond.' },
];

const values = [
  { t: 'Honest hair', d: 'We sell original human hair and talk plainly about what each product is.' },
  { t: 'Consistency', d: 'Repeat buyers need repeat quality. That is the standard we hold ourselves to on every batch.' },
  { t: 'Long-term thinking', d: 'We would rather earn your tenth order than win a one-off bargain hunter.' },
];

export default function About() {
  useReveal();
  return (
    <>
      <SEO
        title="About Us | Wholesale Human Hair Supplier, Alappuzha"
        description="Learn about Hairy World, a wholesale human hair supplier and exporter from Alappuzha, Kerala with 15+ years of experience, an in-house stitching unit and customers across the GCC, UK, USA and Canada."
        path="/about"
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-ink/50"><Link to="/" className="hover:text-gold-600">Home</Link> / About</nav>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
              We grew up<br />in <span className="gold-text gold-text-anim italic">hair.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
              {company.yearsExperience}+ years supplying human hair from Alappuzha, Kerala. {company.name} is the wholesale partner for businesses that need quality they can count on.
            </p>
          </div>
          <div className="relative lg:col-span-5">
            <div className="grid grid-cols-5 gap-3">
              <img src="/images/model-curls.jpg" alt="Hair extensions styled in soft curls" className="col-span-3 mt-10 aspect-[3/4] w-full rounded-t-full rounded-b-2xl object-cover shadow-lift" />
              <img src="/images/bundles-clip.jpg" alt="Clip-in extension set beside hair bundles" className="col-span-2 aspect-[2/3] w-full rounded-2xl object-cover shadow-lift" />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-ink px-5 py-3 text-gold-300 shadow-lift">
              <p className="font-display text-2xl font-semibold">Alappuzha, Kerala</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STORY (sticky heading + drop cap) */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Our story</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">A trusted name in the human hair trade.</h2>
              <div className="mt-6 h-px w-20 bg-gold-500" />
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-8">
            <p className="reveal first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-gold-500">
              Hairy World is a trusted wholesale human hair supplier based in Alappuzha, Kerala, with over {company.yearsExperience} years of experience in the industry. We supply high-quality bulk hair, hair extensions and ready-to-use hair products to wholesalers, salons, distributors, retailers and hair businesses across India and international markets.
            </p>
            <p className="reveal">
              Our range covers bulk hair, single and double drawn hair, clip-on and clip-in extensions, ponytails, buns, clutch hair, tail extensions, tiruppan hair, wrapped extensions and other customized products. Alongside ready-made pieces, we supply bulk hair bundles in different quantities and specifications for businesses that want dependable wholesale sourcing.
            </p>
            <p className="reveal">
              With extensive experience in international hair trading, we serve customers across the GCC countries, the UK, USA, Canada and other markets. Our focus is consistent quality, professional service, competitive wholesale pricing and reliable supply, the foundations of long-term business relationships.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR S: expanding rows */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="reveal mb-12 max-w-xl">
            <p className="eyebrow !text-gold-300">What we do</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">One supply chain, <span className="gold-text italic">under one roof.</span></h2>
          </div>
          <div className="border-t border-white/15">
            {pillars.map((p) => (
              <div key={p.n} className="reveal group grid items-center gap-4 border-b border-white/15 py-8 transition-colors hover:bg-white/[0.03] md:grid-cols-12 md:gap-8 md:px-4">
                <span className="font-display text-xl text-gold-400 md:col-span-1">{p.n}</span>
                <h3 className="font-display text-5xl font-semibold transition-all duration-500 group-hover:translate-x-3 group-hover:text-gold-300 sm:text-6xl md:col-span-5 lg:text-7xl">{p.w}</h3>
                <p className="max-w-lg text-white/65 md:col-span-6">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PULL QUOTE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 py-20 sm:py-24">
        <img src={company.logos.emblem} alt="" aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 w-[420px] -translate-y-1/2 opacity-20 mix-blend-overlay" />
        <blockquote className="container-x reveal relative mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl font-semibold italic leading-snug text-ink sm:text-5xl">“Consistent quality, professional service and reliable supply, for the long run.”</p>
          <footer className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-ink/70">The Hairy World promise</footer>
        </blockquote>
      </section>

      {/* 5. TWO KINDS OF SUPPLY (split card) */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow">Two ways to buy</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Raw hair or ready-made.</h2>
          </div>
          <div className="reveal mt-14 grid overflow-hidden rounded-[2rem] border border-gold-200 bg-white shadow-lift md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <p className="eyebrow">Bulk sourcing</p>
              <h3 className="mt-3 font-display text-3xl font-semibold">Bundles in your quantities</h3>
              <p className="mt-4 text-ink/70">Bulk, single drawn and double drawn hair in different quantities and specifications for businesses that process or resell hair themselves.</p>
              <ul className="mt-6 space-y-2 text-sm text-ink/80">{['Bulk human hair', 'Single drawn hair', 'Double drawn hair'].map((x) => <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rotate-45 bg-gold-500" />{x}</li>)}</ul>
            </div>
            <div className="bg-ink p-8 text-white sm:p-12">
              <p className="eyebrow !text-gold-300">Ready-to-use</p>
              <h3 className="mt-3 font-display text-3xl font-semibold">Finished products, stitched here</h3>
              <p className="mt-4 text-white/65">Retail and salon-ready extensions manufactured in our own stitching unit and customized to your requirements.</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-white/85">{['Clip-on', 'Clip-in', 'Ponytails', 'Buns', 'Clutch hair', 'Tail extensions', 'Tiruppan', 'Wrapped'].map((x) => <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rotate-45 bg-gold-400" />{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VALUES (offset cards) */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t} className={`reveal rounded-3xl border border-gold-200 bg-gradient-to-b from-white to-gold-50 p-8 shadow-sm ${i === 1 ? 'md:-translate-y-8' : i === 2 ? 'md:translate-y-8' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-xl text-gold-300">{i + 1}</span>
              <h3 className="mt-6 font-display text-3xl font-semibold">{v.t}</h3>
              <p className="mt-3 text-ink/65">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-ivory-deep py-16 sm:py-20">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Let's talk about what your business needs.</h2>
          <div className="flex flex-wrap gap-3">
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-gold"><WhatsAppIcon size={18} /> WhatsApp us</a>
            <Link to="/products" className="btn-ghost border-ink/20 hover:border-gold-500 hover:text-gold-600">See products <ArrowIcon width={16} height={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
