import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink } from '../data/companyData';
import { WhatsAppIcon, MailIcon, CheckIcon } from '../components/Icons';

const types = ['Wholesaler', 'Salon', 'Distributor', 'Retailer', 'Exporter', 'Extension brand', 'Other'];

const field = 'mt-2 w-full rounded-xl border border-gold-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold-600 focus:ring-2 focus:ring-gold-300/50';
const label = 'text-xs font-medium uppercase tracking-[0.22em] text-ink/55';

export default function WholesaleEnquiry() {
  useReveal();
  const [f, setF] = useState({ name: '', business: '', type: 'Wholesaler', country: '', phone: '', qty: '', note: '' });
  const [picked, setPicked] = useState([]);
  const [err, setErr] = useState('');
  const upd = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggle = (p) => setPicked((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]));

  const build = () =>
    `Hello ${company.name}, I would like a wholesale quote.\n\nName: ${f.name}\nBusiness: ${f.business || '-'}\nBusiness type: ${f.type}\nCountry: ${f.country || '-'}\nPhone: ${f.phone || '-'}\nProducts: ${picked.length ? picked.join(', ') : 'To be discussed'}\nQuantity: ${f.qty || 'To be discussed'}\n${f.note ? `\nNotes: ${f.note}` : ''}`;

  const valid = () => {
    if (!f.name.trim()) { setErr('Please enter your name.'); return false; }
    if (!f.country.trim()) { setErr('Please enter your country.'); return false; }
    setErr('');
    return true;
  };
  const sendWA = (e) => { e.preventDefault(); if (valid()) window.open(waLink(build()), '_blank', 'noopener'); };
  const sendMail = () => { if (valid()) window.location.href = `mailto:${company.salesEmail}?subject=${encodeURIComponent('Wholesale enquiry from ' + f.name)}&body=${encodeURIComponent(build())}`; };

  return (
    <>
      <SEO
        title="Wholesale Enquiry | Get a Human Hair Quote"
        description="Send a wholesale enquiry to Hairy World. Tell us your business, country, products and quantities and get a quote for human hair and hair extensions via WhatsApp or email."
        path="/wholesale-enquiry"
      />
      <section className="relative overflow-hidden bg-ivory py-14 sm:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-200/50 blur-3xl" aria-hidden="true" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-ink/50"><Link to="/" className="hover:text-gold-600">Home</Link> / Wholesale Enquiry</nav>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] sm:text-6xl">Request a <span className="gold-text gold-text-anim italic">wholesale quote.</span></h1>
              <p className="mt-6 text-lg text-ink/70">Fill in a few details and we'll receive them instantly on WhatsApp. No account, no waiting on forms.</p>
              <ul className="mt-8 space-y-4">
                {['Reply on WhatsApp, usually within business hours', 'Samples and custom orders discussed directly', 'For salons, wholesalers, distributors, retailers and exporters'].map((t) => (
                  <li key={t} className="flex gap-3 text-ink/80"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-ink"><CheckIcon width={14} height={14} /></span>{t}</li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl border border-gold-300 bg-white p-6">
                <p className="eyebrow">Prefer to talk?</p>
                <p className="mt-2 font-display text-2xl">{company.phone}</p>
                <p className="text-sm text-ink/60">{company.hours}</p>
              </div>
            </div>
          </div>

          <form onSubmit={sendWA} noValidate className="reveal rounded-[2rem] border border-gold-200 bg-white p-6 shadow-lift sm:p-10 lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="name" className={label}>Your name *</label><input id="name" value={f.name} onChange={upd('name')} autoComplete="name" className={field} /></div>
              <div><label htmlFor="biz" className={label}>Business name</label><input id="biz" value={f.business} onChange={upd('business')} autoComplete="organization" className={field} /></div>
              <div><label htmlFor="type" className={label}>Business type</label>
                <select id="type" value={f.type} onChange={upd('type')} className={field}>{types.map((t) => <option key={t}>{t}</option>)}</select></div>
              <div><label htmlFor="country" className={label}>Country *</label><input id="country" value={f.country} onChange={upd('country')} autoComplete="country-name" className={field} /></div>
              <div><label htmlFor="phone" className={label}>Phone / WhatsApp</label><input id="phone" type="tel" value={f.phone} onChange={upd('phone')} autoComplete="tel" className={field} /></div>
              <div><label htmlFor="qty" className={label}>Approx. quantity</label><input id="qty" value={f.qty} onChange={upd('qty')} placeholder="e.g. 20 kg / 300 pieces" className={field} /></div>
            </div>

            <fieldset className="mt-7">
              <legend className={label}>Products you need</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {company.products.map((p) => (
                  <button type="button" key={p.slug} aria-pressed={picked.includes(p.name)} onClick={() => toggle(p.name)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${picked.includes(p.name) ? 'border-ink bg-ink text-gold-300' : 'border-gold-300 text-ink/75 hover:border-gold-500'}`}>{p.name}</button>
                ))}
              </div>
            </fieldset>

            <div className="mt-7"><label htmlFor="note" className={label}>Anything else?</label><textarea id="note" rows={4} value={f.note} onChange={upd('note')} placeholder="Texture, length, colour, packaging, timelines…" className={field} /></div>

            {err && <p role="alert" className="mt-4 text-sm font-medium text-red-700">{err}</p>}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn-gold flex-1"><WhatsAppIcon size={18} /> Send on WhatsApp</button>
              <button type="button" onClick={sendMail} className="btn-ghost flex-1 border-ink/20 hover:border-gold-500 hover:text-gold-600"><MailIcon width={18} height={18} /> Send by email</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
