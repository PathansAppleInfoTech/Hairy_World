import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon, ScissorsIcon, TagIcon, ShieldIcon, SparkIcon, CheckIcon } from '../components/Icons';

const capabilities = [
  { Icon: ScissorsIcon, t: 'In-house stitching', d: 'Clip-ins, clip-ons, ponytails, buns, clutch hair, tails and wrapped extensions made in our own unit.' },
  { Icon: SparkIcon, t: 'Made to specification', d: 'Tell us the weight, length, texture and finish. We build to your brief.' },
  { Icon: TagIcon, t: 'Your packaging', d: 'Standard packing or packaging prepared for your own brand. Ask us for options.' },
  { Icon: ShieldIcon, t: 'Checked before dispatch', d: 'Each batch is inspected for finish and consistency before it is packed.' },
];

const opts = {
  product: ['Clip-in set', 'Clip-on', 'Ponytail', 'Hair bun', 'Clutch hair', 'Tail extension', 'Wrapped extension', 'Tiruppan', 'Other'],
  texture: ['Straight', 'Wavy', 'Curly'],
  length: ['Short', 'Medium', 'Long', 'Extra long'],
  colour: ['Natural black', 'Natural brown', 'Custom colour'],
  pack: ['Standard packing', 'Private-label packing'],
};

function Chips({ label, items, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-xs font-medium uppercase tracking-[0.22em] text-ink/55">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <button type="button" key={i} onClick={() => onChange(i)} aria-pressed={value === i}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${value === i ? 'border-ink bg-ink text-gold-300' : 'border-gold-300 bg-white text-ink/75 hover:border-gold-500'}`}>{i}</button>
        ))}
      </div>
    </fieldset>
  );
}

const stages = [
  ['Brief', 'You share the product, texture, length, colour and quantity.'],
  ['Sample', 'We discuss a sample so you can confirm the finish.'],
  ['Production', 'Our stitching unit produces your order.'],
  ['Inspection', 'Quality check, then packing as agreed.'],
];

export default function CustomManufacturing() {
  useReveal();
  const [b, setB] = useState({ product: 'Clip-in set', texture: 'Wavy', length: 'Long', colour: 'Natural black', pack: 'Standard packing', qty: '' });
  const set = (k) => (v) => setB((s) => ({ ...s, [k]: v }));

  const message = useMemo(
    () => `Hello ${company.name}, I would like a custom order.\n\nProduct: ${b.product}\nTexture: ${b.texture}\nLength: ${b.length}\nColour: ${b.colour}\nPacking: ${b.pack}\nQuantity: ${b.qty || 'To be discussed'}\n\nPlease share details and pricing.`,
    [b]
  );

  return (
    <>
      <SEO
        title="Custom Hair Extension Manufacturing"
        description="Hairy World has its own stitching unit in Kerala. Get custom clip-in, clip-on, ponytail, bun, clutch, tail and wrapped hair extensions made to your specification for wholesale orders."
        path="/custom-manufacturing"
      />

      {/* 1. HERO diagonal */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-ink/50"><Link to="/" className="hover:text-gold-600">Home</Link> / Custom Manufacturing</nav>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] sm:text-7xl">Made in our own <span className="gold-text gold-text-anim italic">stitching unit.</span></h1>
            <p className="mt-6 max-w-lg text-lg text-ink/70">Skip the guesswork of fixed catalogues. Describe the extension you want to sell and we will manufacture it to your specification.</p>
            <a href="#configurator" className="btn-gold mt-8">Build your brief <ArrowIcon width={16} height={16} /></a>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-gold-300 shadow-lift [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]">
              <img src="/images/bundles-clip.jpg" alt="Clip-in extension set and wavy hair bundles from our stitching unit" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 right-4 rounded-2xl bg-ink px-5 py-4 text-white shadow-lift">
              <p className="font-display text-3xl font-semibold gold-text">In-house</p>
              <p className="text-[11px] uppercase tracking-widest text-white/60">Stitching &amp; customization</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES horizontal strip */}
      <section className="border-y border-gold-200 bg-white">
        <div className="container-x grid gap-px bg-gold-200 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, t, d }) => (
            <div key={t} className="reveal bg-white p-8">
              <Icon width={28} height={28} className="text-gold-500" />
              <h2 className="mt-5 font-display text-2xl font-semibold">{t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CONFIGURATOR */}
      <section id="configurator" className="scroll-mt-28 bg-ivory-deep py-20 sm:py-28">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Brief builder</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Describe it. Send it. Done.</h2>
            <p className="mt-4 text-ink/65">Pick your options and your brief is written for you. One tap sends it to us on WhatsApp.</p>
          </div>
          <div className="reveal mt-12 grid gap-8 lg:grid-cols-12">
            <div className="space-y-8 rounded-3xl border border-gold-200 bg-white p-6 sm:p-10 lg:col-span-7">
              <Chips label="Product" items={opts.product} value={b.product} onChange={set('product')} />
              <Chips label="Texture" items={opts.texture} value={b.texture} onChange={set('texture')} />
              <Chips label="Length" items={opts.length} value={b.length} onChange={set('length')} />
              <Chips label="Colour" items={opts.colour} value={b.colour} onChange={set('colour')} />
              <Chips label="Packing" items={opts.pack} value={b.pack} onChange={set('pack')} />
              <div>
                <label htmlFor="qty" className="text-xs font-medium uppercase tracking-[0.22em] text-ink/55">Approx. quantity</label>
                <input id="qty" value={b.qty} onChange={(e) => set('qty')(e.target.value)} placeholder="e.g. 200 sets / 50 kg" className="mt-3 w-full rounded-xl border border-gold-300 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-gold-600 focus:ring-2 focus:ring-gold-300/50" />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl bg-ink p-8 text-white shadow-lift lg:sticky lg:top-32">
                <p className="eyebrow !text-gold-300">Your brief</p>
                <dl className="mt-5 divide-y divide-white/10 text-sm">
                  {[['Product', b.product], ['Texture', b.texture], ['Length', b.length], ['Colour', b.colour], ['Packing', b.pack], ['Quantity', b.qty || 'To be discussed']].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3"><dt className="text-white/50">{k}</dt><dd className="text-right font-medium text-gold-200">{v}</dd></div>
                  ))}
                </dl>
                <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 w-full"><WhatsAppIcon size={18} /> Send brief on WhatsApp</a>
                <p className="mt-3 text-center text-xs text-white/45">Opens WhatsApp with this brief pre-filled.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. STAGES split with image */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <img src="/images/model-curls.jpg" alt="Finished hair extensions styled in soft curls" loading="lazy" className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-lift" />
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-gold-300 bg-white px-5 py-3 shadow-lift sm:block"><p className="font-display text-xl">Finished to <span className="gold-text italic">your standard</span></p></div>
          </div>
          <div>
            <p className="eyebrow">From brief to box</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">How a custom order runs.</h2>
            <ol className="mt-8 space-y-6">
              {stages.map(([t, d], i) => (
                <li key={t} className="reveal flex gap-5" style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400 font-display text-lg text-gold-600">{i + 1}</span>
                  <div><h3 className="font-display text-2xl font-semibold">{t}</h3><p className="mt-1 text-ink/65">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5. Good fit list */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="container-x reveal flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Great for brands, salons &amp; wholesalers who want:</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-2 text-white/75 sm:grid-cols-2">
              {['A signature product line', 'Consistent specs on every reorder', 'Packaging that carries their brand', 'A supplier who answers on WhatsApp'].map((x) => <li key={x} className="flex items-center gap-2"><CheckIcon width={16} height={16} className="text-gold-400" />{x}</li>)}
            </ul>
          </div>
          <Link to="/wholesale-enquiry" className="btn-gold shrink-0">Full wholesale enquiry <ArrowIcon width={16} height={16} /></Link>
        </div>
      </section>
    </>
  );
}
