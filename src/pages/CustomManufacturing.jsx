import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import {
  ArrowIcon,
  WhatsAppIcon,
  ScissorsIcon,
  TagIcon,
  ShieldIcon,
  SparkIcon,
  CheckIcon,
} from '../components/Icons';

// Unsplash demo photography. Replace these URLs with Hairy World's own images before launch.
const images = {
  hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2200&q=85',
  detail: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=82',
  workshop: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=82',
  styling: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=82',
  waves: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=82',
  portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=82',
};

const capabilities = [
  {
    Icon: ScissorsIcon,
    title: 'In-house stitching',
    description: 'Discuss finished products such as clip-ins, clip-ons, ponytails, buns, clutch hair, tail extensions and wrapped pieces.',
  },
  {
    Icon: SparkIcon,
    title: 'Made to specification',
    description: 'Share the product type, preferred length, texture, finish and quantity you need for your range.',
  },
  {
    Icon: TagIcon,
    title: 'Packing options',
    description: 'Tell us how you plan to sell your products and ask about standard or private-label packing options.',
  },
  {
    Icon: ShieldIcon,
    title: 'Checked before dispatch',
    description: 'Orders are checked for finish and consistency before packing, according to the agreed requirements.',
  },
];

const options = {
  product: ['Clip-in set', 'Clip-on', 'Ponytail', 'Hair bun', 'Clutch hair', 'Tail extension', 'Wrapped extension', 'Tiruppan', 'Other'],
  texture: ['Straight', 'Wavy', 'Curly'],
  length: ['Short', 'Medium', 'Long', 'Extra long'],
  colour: ['Natural black', 'Natural brown', 'Custom colour'],
  packing: ['Standard packing', 'Private-label packing', 'To be discussed'],
};

const stages = [
  {
    title: 'Share your brief',
    description: 'Choose a product type and share your preferred texture, length, colour, packing and approximate quantity.',
  },
  {
    title: 'Confirm the details',
    description: 'Discuss specifications, samples where available, order quantities and the next steps with our team.',
  },
  {
    title: 'Stitch & prepare',
    description: 'Once the details are agreed, the order can be prepared through our stitching and finishing process.',
  },
  {
    title: 'Inspect & dispatch',
    description: 'The finished order is checked and packed according to the confirmed requirements before dispatch.',
  },
];

const buyerNeeds = [
  'A product line tailored to your customers',
  'Specifications you can discuss before ordering',
  'Finished pieces for salons or resale',
  'A wholesale conversation with clear requirements',
];

function SectionLabel({ children, light = false }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] ${light ? 'text-[#e8c77d]' : 'text-[#8c692b]'}`}>
      <span className={`h-px w-8 ${light ? 'bg-[#d7b56b]' : 'bg-[#b8924b]'}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function OptionChips({ label, items, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-[#766d60]">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => {
          const selected = value === item;
          return (
            <button
              type="button"
              key={item}
              onClick={() => onChange(item)}
              aria-pressed={selected}
              className={`rounded-full border px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8924b] focus-visible:ring-offset-2 ${selected
                ? 'border-[#211c16] bg-[#211c16] text-[#f0dca8]'
                : 'border-[#dfd1b1] bg-white text-[#5f574b] hover:border-[#b8924b] hover:bg-[#faf6ed]'
                }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function CustomManufacturing() {
  useReveal();
  const [brief, setBrief] = useState({
    product: 'Clip-in set',
    texture: 'Wavy',
    length: 'Long',
    colour: 'Natural black',
    packing: 'Standard packing',
    quantity: '',
    notes: '',
  });

  const update = (key) => (value) => setBrief((current) => ({ ...current, [key]: value }));

  const message = useMemo(
    () =>
      `Hello ${company.name}, I would like to discuss a custom human hair order.\n\nProduct: ${brief.product}\nTexture: ${brief.texture}\nLength: ${brief.length}\nColour: ${brief.colour}\nPacking: ${brief.packing}\nApprox. quantity: ${brief.quantity.trim() || 'To be discussed'}\nAdditional requirements: ${brief.notes.trim() || 'To be discussed'}\n\nPlease share availability, specifications and wholesale pricing.`,
    [brief],
  );

  return (
    <>
      <SEO
        title="Custom Human Hair Extensions & Manufacturing"
        description="Discuss custom human hair extensions with Hairy World in Alappuzha, Kerala. Our in-house stitching unit supports wholesale enquiries for clip-ins, clip-ons, ponytails, buns, wrapped extensions and more."
        path="/custom-manufacturing"
      />

      {/* Compact full-width hero banner */}
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
            <span aria-current="page" className="text-white">Custom manufacturing</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Your vision. Our <span className="italic text-[#e8c77d]">stitching expertise.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-lg sm:leading-8">
              Premium human hair products, tailored to your business needs.            </p>
          </div>
        </div>
      </section>

      {/* Image-led introduction */}
      <section className="overflow-hidden bg-[#faf7f0] py-16 sm:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal relative lg:col-span-6">
            <div className="grid grid-cols-12 items-start gap-3 sm:gap-4">
              <div className="col-span-7 overflow-hidden rounded-t-[7rem] rounded-b-2xl bg-[#e8dfcf] sm:rounded-t-[9rem]">
                <img src={images.detail} alt="Close-up of glossy hair texture for a custom extension finish" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]" />
              </div>
              <div className="col-span-5 mt-12 overflow-hidden rounded-2xl bg-[#e8dfcf] sm:mt-20">
                <img src={images.workshop} alt="Hair studio setting representing professional finishing" loading="lazy" decoding="async" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]" />
              </div>
              <div className="col-span-12 flex items-center justify-between gap-4 rounded-2xl border border-[#e5d7b7] bg-white px-5 py-4 sm:px-6">
                <div>
                  <p className="font-display text-xl font-semibold text-[#211c16] sm:text-2xl">Made to discuss. Made to fit.</p>
                  <p className="mt-1 text-sm text-[#766d60]">Custom options for wholesale buyers.</p>
                </div>
                <ScissorsIcon width={30} height={30} className="shrink-0 text-[#9a742d]" />
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-6">
            <SectionLabel>Custom manufacturing</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">
              Move beyond a fixed catalogue with <span className="italic text-[#9a742d]">in-house stitching.</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-[#625a4e] sm:text-lg">
              Hairy World works with salons, wholesalers, distributors, retailers and hair brands to discuss products that suit their ranges. Share your preferred style, texture, length, finish and approximate order quantity so the details can be reviewed with our team.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Product type and finish',
                'Length and texture options',
                'Quantity and wholesale needs',
                'Packing requirements',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-[#e8deca] bg-white px-4 py-3 text-sm text-[#4d453a]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0e5cb] text-[#856226]"><CheckIcon width={14} height={14} /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-[#e8deca] bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <SectionLabel>What we can discuss</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#211c16] sm:text-5xl">The details that make a product yours.</h2>
            <p className="mt-4 text-base leading-7 text-[#6b6255]">Each brief is different. We’ll discuss your requested product and confirm feasible options before an order is agreed.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {capabilities.map(({ Icon, title, description }, index) => (
              <article key={title} className="reveal group rounded-2xl border border-[#e8deca] bg-[#fcfaf6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a258] hover:bg-white hover:shadow-[0_18px_45px_-32px_rgba(47,35,15,.45)] sm:p-7" style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e6ca] text-[#8e6d2e] transition-colors group-hover:bg-[#211c16] group-hover:text-[#f0dca8]">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#211c16] sm:text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6b6255]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive configurator */}
      <section id="configurator" className="scroll-mt-28 bg-[#f3eee3] py-16 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Wholesale brief builder</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">Start with the product you have in mind.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6b6255] sm:text-base">Choose a few starting details below. Your selections are assembled into a WhatsApp message that you can review before sending.</p>
          </div>

          <div className="mt-10 grid items-start gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
            <div className="reveal space-y-8 rounded-[1.75rem] border border-[#e4d8be] bg-white p-5 shadow-[0_20px_55px_-42px_rgba(38,29,13,.35)] sm:p-8 lg:col-span-7 lg:p-10">
              <OptionChips label="Product type" items={options.product} value={brief.product} onChange={update('product')} />
              <div className="h-px bg-[#eee6d7]" />
              <OptionChips label="Texture" items={options.texture} value={brief.texture} onChange={update('texture')} />
              <div className="h-px bg-[#eee6d7]" />
              <OptionChips label="Length" items={options.length} value={brief.length} onChange={update('length')} />
              <div className="h-px bg-[#eee6d7]" />
              <OptionChips label="Colour" items={options.colour} value={brief.colour} onChange={update('colour')} />
              <div className="h-px bg-[#eee6d7]" />
              <OptionChips label="Packing preference" items={options.packing} value={brief.packing} onChange={update('packing')} />

              <div className="grid gap-5 border-t border-[#eee6d7] pt-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="custom-quantity" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#766d60]">Approximate quantity</label>
                  <input
                    id="custom-quantity"
                    value={brief.quantity}
                    onChange={(event) => update('quantity')(event.target.value)}
                    placeholder="e.g. 200 sets / 50 kg"
                    className="mt-3 w-full rounded-xl border border-[#dfd1b1] bg-[#fcfaf6] px-4 py-3.5 text-sm text-[#211c16] outline-none transition placeholder:text-[#9d9486] focus:border-[#b8924b] focus:ring-2 focus:ring-[#b8924b]/20"
                  />
                </div>
                <div>
                  <label htmlFor="custom-notes" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#766d60]">Additional requirements</label>
                  <textarea
                    id="custom-notes"
                    value={brief.notes}
                    onChange={(event) => update('notes')(event.target.value)}
                    rows={3}
                    placeholder="Any details about finish, packaging or specifications"
                    className="mt-3 w-full resize-y rounded-xl border border-[#dfd1b1] bg-[#fcfaf6] px-4 py-3.5 text-sm text-[#211c16] outline-none transition placeholder:text-[#9d9486] focus:border-[#b8924b] focus:ring-2 focus:ring-[#b8924b]/20"
                  />
                </div>
              </div>
            </div>

            <aside className="reveal lg:col-span-5">
              <div className="overflow-hidden rounded-[1.75rem] bg-[#211c16] text-white shadow-[0_24px_60px_-30px_rgba(30,23,12,.55)] lg:sticky lg:top-28">
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <img src={images.styling} alt="Finished hair styling inspiration for a custom product brief" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211c16] via-[#211c16]/15 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <SectionLabel light>Your brief</SectionLabel>
                    <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Ready to discuss.</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <dl className="divide-y divide-white/10 text-sm">
                    {[
                      ['Product', brief.product],
                      ['Texture', brief.texture],
                      ['Length', brief.length],
                      ['Colour', brief.colour],
                      ['Packing', brief.packing],
                      ['Quantity', brief.quantity.trim() || 'To be discussed'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-4 py-3">
                        <dt className="text-white/50">{label}</dt>
                        <dd className="max-w-[65%] text-right font-medium text-[#f0dca8]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  {brief.notes.trim() && (
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">Additional requirements</p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/80">{brief.notes}</p>
                    </div>
                  )}
                  <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#d6b66d] px-5 py-3.5 text-sm font-semibold text-[#211c16] transition hover:bg-[#f0dca8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#211c16]">
                    <WhatsAppIcon size={18} /> Send brief on WhatsApp
                  </a>
                  <p className="mt-3 text-center text-xs leading-5 text-white/45">WhatsApp opens with your brief pre-filled. You can review it before sending.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal relative lg:col-span-6">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#e8dfcf]">
              <img src={images.portrait} alt="Styled hair in a beauty studio, representing finished extension options" loading="lazy" decoding="async" className="aspect-[5/4] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[80%] rounded-2xl border border-[#e5d7b7] bg-white px-5 py-4 shadow-[0_18px_40px_-28px_rgba(38,29,13,.45)] sm:right-7">
              <p className="font-display text-xl font-semibold text-[#211c16]">Details agreed before production</p>
              <p className="mt-1 text-sm text-[#766d60]">A clearer brief helps guide the conversation.</p>
            </div>
          </div>

          <div className="reveal pt-4 lg:col-span-6 lg:pt-0">
            <SectionLabel>From brief to dispatch</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">A clear process, from first enquiry to finished order.</h2>
            <ol className="mt-8 space-y-6 sm:mt-10">
              {stages.map((stage, index) => (
                <li key={stage.title} className="flex gap-4" style={{ transitionDelay: `${index * 80}ms` }}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c8a258] font-display text-lg font-semibold text-[#8c692b]">0{index + 1}</span>
                  <div className="border-b border-[#eee6d7] pb-5 last:border-0">
                    <h3 className="font-display text-xl font-semibold text-[#211c16] sm:text-2xl">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#6b6255] sm:text-base">{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Good-fit audience and final CTA */}
      <section className="relative isolate overflow-hidden bg-[#211c16] py-16 text-white sm:py-20 lg:py-24">
        <img src={images.waves} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211c16] via-[#211c16]/95 to-[#211c16]/75" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-7">
            <SectionLabel light>Who we work with</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">For brands, salons and wholesalers building their own range.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">Share your intended product and requirements with Hairy World. We’ll discuss the available options for your wholesale needs.</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {buyerNeeds.map((need) => (
                <li key={need} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                  <CheckIcon width={17} height={17} className="mt-0.5 shrink-0 text-[#d7b56b]" />
                  {need}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-[1.5rem] border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8c77d]">Have a product idea?</p>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">Let’s talk through the specifications.</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">Send an enquiry with your product type, preferred finish and estimated quantity.</p>
            <a href={waLink('Hello Hairy World, I would like to discuss a custom human hair product for wholesale.')} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d6b66d] px-5 py-3.5 text-sm font-semibold text-[#211c16] transition hover:bg-[#f0dca8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#211c16]">
              <WhatsAppIcon size={18} /> Discuss your requirements
            </a>
            <Link to="/wholesale-enquiry" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-[#d7b56b] hover:text-[#f0dca8]">
              Wholesale enquiry form <ArrowIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
