import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  SocialIcon,
  ArrowIcon,
} from '../components/Icons';

const heroImage =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2200&q=85';
const studioImage =
  'https://images.unsplash.com/photo-1521590832167-7bcbashedc12?auto=format&fit=crop&w=1200&q=85';

export default function Contact() {
  useReveal();
  const [message, setMessage] = useState({ name: '', msg: '' });

  const cards = [
    {
      Icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: company.phone,
      href: waLink(DEFAULT_WA_MESSAGE),
      hint: 'The quickest way to discuss a wholesale requirement',
      external: true,
      featured: true,
    },
    {
      Icon: PhoneIcon,
      title: 'Call our team',
      value: company.phone,
      href: `tel:${company.phoneRaw}`,
      hint: company.hours,
    },
    {
      Icon: MailIcon,
      title: 'Email us',
      value: company.email,
      href: `mailto:${company.email}`,
      hint: 'For product details and considered enquiries',
    },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${company.name}`,
    url: `${company.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: company.name,
      url: company.url,
      telephone: company.phone,
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${company.address.line1}, ${company.address.line2}`,
        postalCode: company.address.pin,
        addressCountry: company.address.country,
      },
    },
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const customer = message.name.trim() || 'a customer';
    const note = message.msg.trim();
    if (!note) return;
    const url = waLink(`Hello ${company.name}, this is ${customer}.\n\n${note}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO
        title="Contact Hairy World | Wholesale Human Hair, Kerala"
        description="Contact Hairy World in Alappuzha, Kerala for wholesale human hair, extensions, custom stitching and export enquiries. Reach our team by WhatsApp, phone or email."
        path="/contact"
        schema={contactSchema}
      />

      {/* Compact, full-width photo hero */}
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#211c16] sm:min-h-[350px] lg:min-h-[390px]">
        <img
          src={heroImage}
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
            <span aria-current="page" className="text-white">Contact Us</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            {/* <SectionLabel light>Our wholesale collection</SectionLabel> */}
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Let's talk  <span className="italic text-[#e8c77d]">hair.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-lg sm:leading-8">
              Product questions, wholesale pricing, samples or custom orders. Tell us what your business needs and we’ll help you take the next step.

            </p>
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="relative z-10 bg-[#f7f3eb] pb-16 pt-7 sm:pb-20 sm:pt-10">
        <div className="container-x grid gap-4 md:grid-cols-3">
          {cards.map(({ Icon, title, value, href, hint, external, featured }, index) => (
            <a
              key={title}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`reveal group relative flex min-h-[210px] flex-col overflow-hidden rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-32px_rgba(33,28,22,.45)] sm:p-7 ${featured
                ? 'border-[#211c16] bg-[#211c16] text-white'
                : 'border-[#e7dcc5] bg-white text-[#211c16] hover:border-[#c6a45c]'
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${featured ? 'bg-[#25D366] text-white' : 'bg-[#f0e5cb] text-[#856226]'}`}>
                <Icon width={21} height={21} size={21} />
              </span>
              <p className={`mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] ${featured ? 'text-[#e8c77d]' : 'text-[#97712c]'}`}>{title}</p>
              <p className="mt-1 break-words font-display text-2xl font-semibold leading-tight sm:text-[1.65rem]">{value}</p>
              <p className={`mt-2 max-w-xs text-sm leading-5 ${featured ? 'text-white/60' : 'text-[#786e60]'}`}>{hint}</p>
              <span className={`absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 group-hover:translate-x-1 ${featured ? 'border-white/20 text-[#e8c77d]' : 'border-[#e7dcc5] text-[#97712c]'}`}>
                <ArrowIcon width={16} height={16} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Visit and map */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="mb-10 grid gap-5 md:grid-cols-[.9fr_1.1fr] md:items-end">
            <div className="reveal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#97712c]">Find us in Kerala</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#211c16] sm:text-5xl">
                A local base. <span className="italic text-[#9a742d]">A global outlook.</span>
              </h2>
            </div>
            <p className="reveal max-w-xl text-sm leading-7 text-[#706658] md:justify-self-end sm:text-base">
              Hairy World is based in Alappuzha, Kerala, and works with salons, wholesalers, distributors and retailers looking for dependable human hair supply.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <div className="reveal overflow-hidden rounded-[1.75rem] border border-[#e7dcc5] bg-[#f7f3eb] lg:col-span-5">
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src={studioImage}
                  alt="Professional beauty studio with a warm, welcoming atmosphere"
                  width="1200"
                  height="700"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211c16]/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">Visit Hairy World</p>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-[#211c16] sm:text-3xl">{company.name}</h3>
                <ul className="mt-6 space-y-5 text-sm leading-6 text-[#62594c]">
                  <li className="flex items-start gap-3">
                    <PinIcon className="mt-0.5 shrink-0 text-[#9a742d]" />
                    <span>{company.address.line1}<br />{company.address.line2} {company.address.pin}<br />{company.address.country}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ClockIcon className="mt-0.5 shrink-0 text-[#9a742d]" />
                    <span>{company.hours}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MailIcon className="mt-0.5 shrink-0 text-[#9a742d]" />
                    <a className="break-all transition-colors hover:text-[#97712c]" href={`mailto:${company.salesEmail}`}>{company.salesEmail}</a>
                  </li>
                </ul>
                <a href={company.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#211c16] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8b682c]">
                  Open in Google Maps <ArrowIcon width={16} height={16} />
                </a>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-[#e5d9c1] pt-6">
                  {company.social.map((social) => (
                    <a
                      key={social.key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c8a7] text-[#755721] transition hover:-translate-y-0.5 hover:border-[#211c16] hover:bg-[#211c16] hover:text-[#f0d58c]"
                    >
                      <SocialIcon name={social.key} width={17} height={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal min-h-[390px] overflow-hidden rounded-[1.75rem] border border-[#e7dcc5] bg-[#f0e5cb] shadow-[0_24px_55px_-40px_rgba(33,28,22,.5)] lg:col-span-7">
              <iframe
                title={`${company.name} location on Google Maps`}
                src={company.mapEmbed}
                className="h-full min-h-[390px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp message form */}
      <section className="relative overflow-hidden bg-[#211c16] py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full border border-[#c6a45c]/20" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-12 -top-8 h-56 w-56 rounded-full border border-[#c6a45c]/15" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e8c77d]">Quick message</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-5xl">
              Tell us what your business <span className="italic text-[#e8c77d]">needs.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Send a short message and continue the conversation on WhatsApp. For a more detailed quote, use our <Link to="/wholesale-enquiry" className="text-[#e8c77d] underline decoration-[#c6a45c]/70 underline-offset-4 hover:text-white">wholesale enquiry form</Link>.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]"><WhatsAppIcon size={19} /></span>
              Direct contact with the Hairy World team
            </div>
          </div>

          <form
            className="reveal rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur sm:p-8 lg:col-span-7"
            onSubmit={(event) => {
              event.preventDefault();
              const customer = message.name.trim() || 'a customer';
              const note = message.msg.trim();
              if (!note) return;
              window.open(waLink(`Hello ${company.name}, this is ${customer}.\n\n${note}`), '_blank', 'noopener,noreferrer');
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="contact-name" className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-white/65">Your name <span className="normal-case tracking-normal text-white/40">(optional)</span></label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  value={message.name}
                  onChange={(event) => setMessage((previous) => ({ ...previous, name: event.target.value }))}
                  placeholder="How should we address you?"
                  className="w-full rounded-xl border border-white/15 bg-black/15 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#c6a45c] focus:ring-2 focus:ring-[#c6a45c]/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-white/65">Your message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message.msg}
                  onChange={(event) => setMessage((previous) => ({ ...previous, msg: event.target.value }))}
                  placeholder="Tell us about the products, quantities or custom requirements you have in mind…"
                  className="w-full resize-y rounded-xl border border-white/15 bg-black/15 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-[#c6a45c] focus:ring-2 focus:ring-[#c6a45c]/20"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-white/40">Your message opens in WhatsApp for you to review and send.</p>
              <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#d5b46b] px-6 py-3.5 text-sm font-semibold text-[#211c16] transition hover:-translate-y-0.5 hover:bg-[#ebd08b] focus:outline-none focus:ring-2 focus:ring-[#e8c77d] focus:ring-offset-2 focus:ring-offset-[#211c16]">
                <WhatsAppIcon size={18} /> Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
