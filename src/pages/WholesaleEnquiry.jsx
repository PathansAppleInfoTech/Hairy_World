import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import { WhatsAppIcon, MailIcon, CheckIcon, ArrowIcon, PhoneIcon, GlobeIcon, ShieldIcon } from '../components/Icons';

const types = ['Wholesaler', 'Salon', 'Distributor', 'Retailer', 'Exporter', 'Extension brand', 'Other'];

const products = [
  'Bulk Human Hair',
  'Single Drawn Hair',
  'Double Drawn Hair',
  'Clip-in Extensions',
  'Clip-on Extensions',
  'Ponytails',
  'Hair Buns',
  'Clutch Hair',
  'Tail Extensions',
  'Tiruppan',
  'Wrapped Extensions',
  'Custom Products',
];

const fieldClass = 'mt-2.5 w-full rounded-xl border border-[#e4d5b4] bg-[#fffdf8] px-4 py-3.5 text-sm text-[#282219] outline-none transition placeholder:text-[#999082] focus:border-[#a58139] focus:ring-4 focus:ring-[#c9aa67]/20';
const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.19em] text-[#776b58]';

function Field({ id, label, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

export default function WholesaleEnquiry() {
  useReveal();
  const [f, setF] = useState({ name: '', business: '', type: 'Wholesaler', country: '', phone: '', qty: '', note: '' });
  const [picked, setPicked] = useState([]);
  const [err, setErr] = useState('');

  const upd = (key) => (e) => {
    setF((current) => ({ ...current, [key]: e.target.value }));
    if (key === 'name' || key === 'country') setErr('');
  };

  const toggle = (product) => {
    setPicked((current) => current.includes(product)
      ? current.filter((item) => item !== product)
      : [...current, product]);
  };

  const buildMessage = () =>
    `Hello ${company.name}, I would like a wholesale quote.\n\nName: ${f.name.trim()}\nBusiness: ${f.business.trim() || '-'}\nBusiness type: ${f.type}\nCountry: ${f.country.trim()}\nPhone: ${f.phone.trim() || '-'}\nProducts: ${picked.length ? picked.join(', ') : 'To be discussed'}\nQuantity: ${f.qty.trim() || 'To be discussed'}${f.note.trim() ? `\n\nNotes: ${f.note.trim()}` : ''}`;

  const validate = () => {
    if (!f.name.trim()) {
      setErr('Please enter your name so we know who to contact.');
      return false;
    }
    if (!f.country.trim()) {
      setErr('Please enter your country so we can understand your destination market.');
      return false;
    }
    setErr('');
    return true;
  };

  const sendWhatsApp = (event) => {
    event.preventDefault();
    if (validate()) window.open(waLink(buildMessage()), '_blank', 'noopener,noreferrer');
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${company.salesEmail}?subject=${encodeURIComponent(`Wholesale enquiry from ${f.name.trim()}`)}&body=${encodeURIComponent(buildMessage())}`;
  };

  return (
    <>
      <SEO
        title="Wholesale Enquiry | Get a Human Hair Quote"
        description="Send a wholesale enquiry to Hairy World. Share your business, country, product requirements and quantities to request a human hair and extension quote via WhatsApp or email."
        path="/wholesale-enquiry"
      />

      {/* Compact full-width page hero */}

      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#211c16] sm:min-h-[350px] lg:min-h-[390px]">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=85"
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
            <span className="text-white">Wholesale Enquiry</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            {/* <SectionLabel light>Our wholesale collection</SectionLabel> */}
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Let’s build your <span className="italic text-[#e8c77d]">hair range.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-lg sm:leading-8">
              Tell us what your business needs. We’ll prepare your enquiry so you can send it directly to our team.

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

      {/* Enquiry form and buyer guidance */}
      <section className="relative overflow-hidden bg-[#f7f3ea] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#d5bb7c]/15 blur-3xl" aria-hidden="true" />
        <div className="container-x relative grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4">
            <div className="reveal lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#92702f]">A simple first step</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#211c16] sm:text-4xl">
                Give us the brief. <span className="italic text-[#9a742d]">We’ll take it from there.</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6b6255] sm:text-base">
                Whether you’re sourcing bulk hair or building a ready-to-sell extension range, a few details help us understand your requirements before we reply.
              </p>

              <div className="mt-7 overflow-hidden rounded-[1.6rem] border border-[#e6d8ba] bg-white shadow-[0_16px_45px_-34px_rgba(44,32,14,.5)]">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80"
                  alt="Professional salon styling and hair care tools"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/3] w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <p className="font-display text-2xl font-semibold text-[#282219]">Wholesale, shaped around you.</p>
                  <p className="mt-2 text-sm leading-6 text-[#766d60]">Share your product type, quantity, destination and any special specifications.</p>
                  <div className="mt-5 grid gap-3">
                    <div className="flex items-start gap-3 text-sm text-[#51483b]">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4ead3] text-[#8a692d]"><CheckIcon width={14} height={14} /></span>
                      <span>Products and custom requirements discussed directly</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-[#51483b]">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4ead3] text-[#8a692d]"><GlobeIcon width={14} height={14} /></span>
                      <span>Enquiries welcomed from India and international markets</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-[#51483b]">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4ead3] text-[#8a692d]"><WhatsAppIcon size={14} /></span>
                      <span>Your completed details open in WhatsApp for review before sending</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-1 rounded-2xl border border-[#e1d1ae] bg-white/75 p-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#91702f]">Prefer to call?</span>
                <a href={`tel:${company.phoneRaw}`} className="mt-1 inline-flex items-center gap-2 font-display text-2xl font-semibold text-[#282219] transition hover:text-[#8c692c]">
                  <PhoneIcon width={18} height={18} /> {company.phone}
                </a>
                <p className="text-xs leading-5 text-[#766d60]">{company.hours}</p>
              </div>
            </div>
          </aside>

          <form onSubmit={sendWhatsApp} noValidate className="reveal overflow-hidden rounded-[1.75rem] border border-[#e4d5b4] bg-white shadow-[0_25px_70px_-48px_rgba(45,33,13,.55)] lg:col-span-8">
            <div className="border-b border-[#eee4d0] bg-gradient-to-r from-white to-[#fbf6e9] px-6 py-6 sm:px-9 sm:py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a742d]">Wholesale quote request</p>
              <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-[#211c16] sm:text-3xl">Tell us about your business</h2>
                  <p className="mt-1 text-sm text-[#766d60]">Fields marked * are required.</p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e4d5b4] bg-white px-3 py-1.5 text-[11px] font-medium text-[#746348]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b3944e]" /> No account required
                </span>
              </div>
            </div>

            <div className="space-y-8 p-6 sm:p-9">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#282219]">Your details</h3>
                <div className="mt-5 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                  <Field id="wholesale-name" label="Your name *">
                    <input id="wholesale-name" value={f.name} onChange={upd('name')} autoComplete="name" placeholder="Full name" aria-invalid={Boolean(err && !f.name.trim())} aria-describedby={err ? 'wholesale-error' : undefined} className={fieldClass} />
                  </Field>
                  <Field id="wholesale-business" label="Business name">
                    <input id="wholesale-business" value={f.business} onChange={upd('business')} autoComplete="organization" placeholder="Company or brand" className={fieldClass} />
                  </Field>
                  <Field id="wholesale-type" label="Business type">
                    <select id="wholesale-type" value={f.type} onChange={upd('type')} className={fieldClass}>
                      {types.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </Field>
                  <Field id="wholesale-country" label="Country *">
                    <input id="wholesale-country" value={f.country} onChange={upd('country')} autoComplete="country-name" placeholder="Your country" aria-invalid={Boolean(err && !f.country.trim())} aria-describedby={err ? 'wholesale-error' : undefined} className={fieldClass} />
                  </Field>
                  <Field id="wholesale-phone" label="Phone / WhatsApp">
                    <input id="wholesale-phone" type="tel" value={f.phone} onChange={upd('phone')} autoComplete="tel" placeholder="Include country code" className={fieldClass} />
                  </Field>
                  <Field id="wholesale-quantity" label="Approximate quantity">
                    <input id="wholesale-quantity" value={f.qty} onChange={upd('qty')} placeholder="e.g. 20 kg / 300 pieces" className={fieldClass} />
                  </Field>
                </div>
              </div>

              <div className="border-t border-[#eee4d0] pt-7">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#282219]">What are you looking for?</h3>
                    <p className="mt-1 text-sm text-[#766d60]">Select all products that interest you.</p>
                  </div>
                  <span className="text-xs font-medium text-[#8b7449]">{picked.length} selected</span>
                </div>
                <fieldset className="mt-4">
                  <legend className="sr-only">Products you need</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {(company.products?.length ? company.products.map((product) => product.name) : products).map((product) => {
                      const selected = picked.includes(product);
                      return (
                        <button
                          type="button"
                          key={product}
                          aria-pressed={selected}
                          onClick={() => toggle(product)}
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c9aa67]/25 ${selected ? 'border-[#292219] bg-[#292219] text-[#f0d89c] shadow-sm' : 'border-[#e4d5b4] bg-[#fffdf8] text-[#5e5343] hover:border-[#b3944e] hover:bg-[#fbf5e8]'}`}
                        >
                          {selected && <CheckIcon width={13} height={13} />}
                          {product}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </div>

              <div className="border-t border-[#eee4d0] pt-7">
                <Field id="wholesale-notes" label="Additional requirements">
                  <textarea id="wholesale-notes" rows={4} value={f.note} onChange={upd('note')} placeholder="Texture, length, colour, packaging, destination, timelines…" className={`${fieldClass} resize-y`} />
                </Field>
              </div>

              {err && <p id="wholesale-error" role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{err}</p>}

              <div className="rounded-2xl bg-[#f7f2e7] p-4 sm:p-5">
                <p className="text-sm leading-6 text-[#655a49]">Your enquiry will open in WhatsApp with the details above filled in. You can review the message before sending it to Hairy World.</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#292219] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#80602b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c9aa67]/30">
                    <WhatsAppIcon size={18} /> Send on WhatsApp <ArrowIcon width={15} height={15} />
                  </button>
                  <button type="button" onClick={sendEmail} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#cbbc9d] bg-white px-6 py-3.5 text-sm font-semibold text-[#41382b] transition hover:border-[#9a742d] hover:bg-[#fffaf0] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c9aa67]/25">
                    <MailIcon width={17} height={17} /> Send by email
                  </button>
                </div>
                <p className="mt-3 text-center text-[11px] leading-5 text-[#8a7e69]">By contacting us, you’re asking our team to respond to your business enquiry.</p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Closing confidence strip */}
      <section className="bg-[#211c16] py-9 text-white sm:py-11">
        <div className="container-x flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold sm:text-3xl">A dependable partner for your next order.</p>
            <p className="mt-1 text-sm text-white/60">Hairy World · Original Human Hair Wholesale</p>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e8c77d] transition hover:gap-3">
            Explore products <ArrowIcon width={16} height={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
