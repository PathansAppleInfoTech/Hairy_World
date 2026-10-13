import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import { WhatsAppIcon, PhoneIcon, MailIcon, PinIcon, ClockIcon, SocialIcon, ArrowIcon } from '../components/Icons';

export default function Contact() {
  useReveal();
  const [m, setM] = useState({ name: '', msg: '' });

  const cards = [
    { Icon: WhatsAppIcon, t: 'WhatsApp', v: company.phone, href: waLink(DEFAULT_WA_MESSAGE), hint: 'Fastest way to reach us', ext: true, wa: true },
    { Icon: PhoneIcon, t: 'Call', v: company.phone, href: `tel:${company.phoneRaw}`, hint: company.hours },
    { Icon: MailIcon, t: 'Email', v: company.email, href: `mailto:${company.email}`, hint: 'For detailed requirements' },
  ];

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${company.name}`,
    url: `${company.url}/contact`,
  };

  return (
    <>
      <SEO
        title="Contact Us | Wholesale Human Hair, Alappuzha"
        description="Contact Hairy World in Alappuzha, Kerala for wholesale human hair and hair extension enquiries. Reach us on WhatsApp, phone or email, or visit us on Google Maps."
        path="/contact"
        schema={localSchema}
      />

      <section className="relative overflow-hidden bg-ivory pb-10 pt-16 sm:pt-24">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-ink/50"><Link to="/" className="hover:text-gold-600">Home</Link> / Contact</nav>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1] sm:text-7xl">Let's <span className="gold-text gold-text-anim italic">talk hair.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">Questions, quotes, samples or custom orders. Pick the channel you prefer.</p>
        </div>
      </section>

      {/* contact cards */}
      <section className="bg-ivory pb-16">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {cards.map(({ Icon, t, v, href, hint, ext, wa }, i) => (
            <a key={t} href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`reveal group relative overflow-hidden rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-lift ${wa ? 'border-transparent bg-ink text-white' : 'border-gold-200 bg-white'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${wa ? 'bg-[#25D366] text-white' : 'bg-gold-100 text-gold-700'}`}><Icon width={22} height={22} size={22} /></span>
              <p className={`mt-6 text-xs font-medium uppercase tracking-[0.25em] ${wa ? 'text-gold-300' : 'text-gold-600'}`}>{t}</p>
              <p className="mt-1 break-words font-display text-2xl font-semibold sm:text-3xl">{v}</p>
              <p className={`mt-2 text-sm ${wa ? 'text-white/60' : 'text-ink/55'}`}>{hint}</p>
              <ArrowIcon className="absolute right-6 top-6 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" width={18} height={18} />
            </a>
          ))}
        </div>
      </section>

      {/* map + visit */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="reveal rounded-3xl border border-gold-200 bg-gold-50 p-8 sm:p-10 lg:col-span-5">
            <p className="eyebrow">Visit us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{company.name}</h2>
            <ul className="mt-6 space-y-5 text-ink/80">
              <li className="flex gap-4"><PinIcon className="mt-1 shrink-0 text-gold-600" /><span>{company.address.line1}<br />{company.address.line2} {company.address.pin}<br />{company.address.country}</span></li>
              <li className="flex gap-4"><ClockIcon className="mt-1 shrink-0 text-gold-600" />{company.hours}</li>
              <li className="flex gap-4"><MailIcon className="mt-1 shrink-0 text-gold-600" /><a className="hover:text-gold-700" href={`mailto:${company.salesEmail}`}>{company.salesEmail}</a></li>
            </ul>
            <a href={company.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">Open in Google Maps <ArrowIcon width={16} height={16} /></a>
            <div className="mt-8 flex gap-3">
              {company.social.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400 text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-gold-300"><SocialIcon name={s.key} width={18} height={18} /></a>
              ))}
            </div>
          </div>
          <div className="reveal overflow-hidden rounded-3xl border border-gold-200 shadow-lift lg:col-span-7">
            <iframe title={`${company.name} location on Google Maps`} src={company.mapEmbed} className="h-full min-h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      {/* quick message */}
      <section className="bg-ink py-16 text-white sm:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow !text-gold-300">Quick message</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">Write to us, we'll answer on WhatsApp.</h2>
            <p className="mt-4 text-white/60">Need a full quote? Use the <Link to="/wholesale-enquiry" className="text-gold-300 underline underline-offset-4">wholesale enquiry form</Link>.</p>
          </div>
          <form className="reveal space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(waLink(`Hello ${company.name}, this is ${m.name || 'a customer'}.\n\n${m.msg}`), '_blank', 'noopener'); }}>
            <div><label htmlFor="cn" className="sr-only">Your name</label><input id="cn" value={m.name} onChange={(e) => setM({ ...m, name: e.target.value })} placeholder="Your name" className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold-400" /></div>
            <div><label htmlFor="cm" className="sr-only">Your message</label><textarea id="cm" rows={4} value={m.msg} onChange={(e) => setM({ ...m, msg: e.target.value })} placeholder="How can we help?" className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold-400" /></div>
            <button type="submit" className="btn-gold w-full sm:w-auto"><WhatsAppIcon size={18} /> Send via WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  );
}
