import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import company, { waLink, DEFAULT_WA_MESSAGE } from '../data/companyData';
import { ArrowIcon, WhatsAppIcon } from '../components/Icons';

const photo = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const images = {
  hairDetail: photo('photo-1519699047748-de8e457a634e', 900),
  finished: photo('photo-1562322140-8baeececf3df', 1100),
  styling: photo('photo-1524250502761-1ac6f2e30d43', 1100),
  closeup: photo('photo-1487412720507-e7ab37603c6f', 1000),
  hero: '/images/hero.png',
  story: '/images/story.png',
  detail: '/images/detail.png',
  texture: '/images/texture.png',
  waves: '/images/waves.png',
  raw: '/images/raw-supply.png',
  ready: '/images/ready-to-use.png',
  specialty: '/images/speciality.png',
  salon: 'images/salon.png',
};

const pillars = [
  {
    n: '01',
    title: 'Source',
    description:
      'Original human hair for wholesale buyers, with product selection and consistency kept at the centre of every conversation.',
  },
  {
    n: '02',
    title: 'Stitch',
    description:
      'Our own stitching unit supports finished products such as clip-ins, clip-ons, ponytails, buns and other extension styles.',
  },
  {
    n: '03',
    title: 'Customise',
    description:
      'Tell us your preferred product type, length, finish and quantity so we can discuss a solution for your specifications.',
  },
  {
    n: '04',
    title: 'Supply',
    description:
      'We work with salons, wholesalers, retailers and distributors across India and international markets.',
  },
];

const values = [
  {
    number: '01',
    title: 'Product honesty',
    text: 'Clear conversations about the human hair products we supply and the specifications available.',
  },
  {
    number: '02',
    title: 'Consistency',
    text: 'A focus on dependable product standards for businesses that need confidence when reordering.',
  },
  {
    number: '03',
    title: 'Long-term partnership',
    text: 'We value lasting business relationships built through practical communication and reliable service.',
  },
];

const productGroups = [
  {
    title: 'Bulk human hair',
    eyebrow: 'For wholesale sourcing',
    description:
      'Bulk, single-drawn and double-drawn hair in quantities and specifications discussed around your business needs.',
    image: images.raw,
    alt: 'Human hair bundles arranged for wholesale supply',
    items: ['Bulk human hair', 'Single-drawn hair', 'Double-drawn hair'],
  },
  {
    title: 'Ready-to-use extensions',
    eyebrow: 'Finished hair products',
    description:
      'A range of finished pieces for salons, retailers, distributors and hair businesses looking for ready-made products.',
    image: images.finished,
    alt: 'Hair styling studio representing ready-to-use hair extensions',
    items: ['Clip-in and clip-on', 'Ponytails and buns', 'Clutch hair and tail extensions'],
  },
  {
    title: 'Speciality & custom pieces',
    eyebrow: 'Made to your brief',
    description:
      'Discuss speciality products and customised stitching requirements with our team before placing a wholesale order.',
    image: images.styling,
    alt: 'Professional hair styling and finishing in a beauty studio',
    items: ['Tiruppan', 'Wrapped extensions', 'Customised products'],
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] ${light ? 'text-[#e6c77f]' : 'text-[#92702f]'
        }`}
    >
      <span className={`h-px w-8 ${light ? 'bg-[#d8b86c]' : 'bg-[#b8924b]'}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export default function About() {
  useReveal();

  return (
    <>
      <SEO
        title="About Hairy World | Human Hair Wholesale Supplier in Kerala"
        description={`Meet Hairy World, an original human hair wholesale supplier based in Alappuzha, Kerala, with ${company.yearsExperience}+ years of industry experience and an in-house stitching unit.`}
        path="/about"
      />

      {/* Compact full-width hero: intentionally a short page banner, not a full-screen hero. */}

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
            <span aria-current="page" className="text-white">About Us</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            {/* <SectionLabel light>Our wholesale collection</SectionLabel> */}
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              A trusted partner in  <span className="italic text-[#e8c77d]">premium human hair.</span>
            </h1>
           <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            {company.yearsExperience}+ years of experience, wholesale-focused service and an in-house stitching unit.
          </p>
          </div>
        </div>
      </section>

      {/* Story and imagery */}
      <section className="overflow-hidden bg-[#fbf8f1] py-16 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal relative lg:col-span-5">
            <div className="grid grid-cols-12 items-start gap-3 sm:gap-4">
              <div className="col-span-8 overflow-hidden rounded-t-[8rem] rounded-b-2xl bg-[#e8dfcf]">
                <img
                  src={images.story}
                  alt="Professional salon setting representing hair and beauty expertise"
                  width="720"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="col-span-4 mt-12 overflow-hidden rounded-2xl bg-[#e8dfcf] sm:mt-20">
                <img
                  src={images.hairDetail}
                  alt="Close-up portrait highlighting healthy, glossy hair"
                  width="420"
                  height="620"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="absolute bottom-5 left-3 rounded-xl border border-white/15 bg-[#211c16] px-5 py-4 text-white shadow-xl sm:bottom-7 sm:left-5">
              <p className="font-display text-3xl font-semibold text-[#e8c77d]">{company.yearsExperience}+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">Years in the trade</p>
            </div>
            <span className="pointer-events-none absolute -right-4 -top-4 -z-0 h-28 w-28 rounded-full border border-[#c9ad6b]/45" aria-hidden="true" />
          </div>

          <div className="reveal lg:col-span-7">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl lg:text-[3.6rem]">
              A wholesale partner built around <span className="italic text-[#9a742d]">your business.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#625a4e] sm:text-lg sm:leading-8">
              Based in Alappuzha, Kerala, Hairy World combines industry experience with product expertise and in-house stitching. We work with buyers to find human hair products that fit their ranges, specifications and markets.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#625a4e]">
              From bulk hair to ready-made extensions and customised pieces, our focus is on quality, competitive wholesale pricing, reliable supply and long-term business relationships.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-y border-[#e2d7bf] py-6 sm:grid-cols-4">
              {[
                [`${company.yearsExperience}+`, 'Years in the trade'],
                ['In-house', 'Stitching unit'],
                ['B2B', 'Wholesale focus'],
                ['Global', 'Market reach'],
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-[#c6a45c] py-1 pl-3">
                  <p className="font-display text-xl font-semibold text-[#211c16] sm:text-2xl">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#766d60]">{label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#b8924b] pb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#755721] transition-all hover:gap-3"
            >
              Explore our products <ArrowIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How the business supports wholesale customers */}
      <section className="relative overflow-hidden bg-[#191612] py-16 text-white sm:py-24 lg:py-28">
        <img
          src={company.logos.emblemWhite}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute -right-28 -top-24 w-[360px] opacity-[0.045] sm:w-[520px]"
        />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl">
              From product selection to <span className="italic text-[#e8c77d]">reliable supply.</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-white/65">
              Wholesale buyers have different products, quantities and markets to serve. We aim to make those conversations straightforward, from understanding the brief to discussing production and dispatch.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={images.closeup}
                alt="Beauty editorial close-up representing hair styling and product care"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="aspect-[5/3] w-full object-cover opacity-90"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-white/15">
              {pillars.map((pillar) => (
                <article key={pillar.n} className="reveal group grid gap-3 border-b border-white/15 py-6 sm:py-8 md:grid-cols-12 md:items-center md:gap-8">
                  <span className="font-display text-lg text-[#d7b56b] md:col-span-1">{pillar.n}</span>
                  <h3 className="font-display text-4xl font-semibold transition-colors duration-300 group-hover:text-[#e8c77d] sm:text-5xl md:col-span-4 lg:text-6xl">
                    {pillar.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-6 text-white/65 sm:text-base md:col-span-7">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product range */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Our products</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#211c16] sm:text-5xl">
                Solutions for different <span className="italic text-[#9a742d]">hair businesses.</span>
              </h2>
            </div>
            <Link to="/products" className="inline-flex w-fit items-center gap-2 border-b border-[#b8924b] pb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#755721] transition-all hover:gap-3">
              View product range <ArrowIcon width={16} height={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productGroups.map((product, index) => (
              <article key={product.title} className="reveal group overflow-hidden rounded-2xl border border-[#e8dfcf] bg-[#fbf8f1] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_-32px_rgba(33,28,22,.45)]" style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="relative overflow-hidden bg-[#e8dfcf]">
                  <img
                    src={product.image}
                    alt={product.alt}
                    width="900"
                    height="680"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#211c16]/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {product.eyebrow}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-semibold text-[#211c16] sm:text-3xl">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6b6255]">{product.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#e2d7bf] pt-4">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#4d453a]">
                        <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#b8924b]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="overflow-hidden bg-[#f5f0e5] py-16 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <Eyebrow>What guides us</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">
              Business built on <span className="italic text-[#9a742d]">trust and consistency.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#625a4e]">
              Our approach is shaped by the everyday needs of wholesale customers: clear product conversations, dependable service, and a relationship that can grow beyond one order.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={images.waves}
                alt="Long, naturally styled waves in a warm beauty editorial portrait"
                width="1000"
                height="700"
                loading="lazy"
                decoding="async"
                className="aspect-[5/3] w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {values.map((value, index) => (
              <article key={value.number} className="reveal grid gap-4 rounded-2xl border border-[#e1d4b9] bg-white/80 p-6 sm:grid-cols-[72px_1fr] sm:items-start sm:p-8" style={{ transitionDelay: `${index * 90}ms` }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#211c16] font-display text-xl text-[#e8c77d]">{value.number}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#211c16] sm:text-3xl">{value.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#6b6255] sm:text-base">{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership and export markets */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative grid grid-cols-12 gap-3">
            <div className="col-span-7 overflow-hidden rounded-t-[7rem] rounded-b-2xl bg-[#e8dfcf]">
              <img src={images.raw} alt="Wholesale hair bundles prepared for product selection" width="760" height="980" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover" />
            </div>
            <div className="col-span-5 mt-12 overflow-hidden rounded-2xl bg-[#e8dfcf] sm:mt-20">
              <img src={images.finished} alt="Finished hair extension products displayed in a studio" width="560" height="740" loading="lazy" decoding="async" className="aspect-[3/4] h-full w-full object-cover" />
            </div>
            <div className="col-span-12 rounded-2xl bg-[#211c16] px-6 py-5 text-white sm:col-span-9 sm:col-start-2 sm:-mt-2">
              <p className="font-display text-xl leading-snug sm:text-2xl">Serving wholesale buyers in India and international markets.</p>
              <p className="mt-2 text-sm text-white/60">GCC · UK · USA · Canada · beyond</p>
            </div>
          </div>
          <div className="reveal">
            <Eyebrow>Our reach</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#211c16] sm:text-5xl">
              Supporting buyers across <span className="italic text-[#9a742d]">markets.</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-[#625a4e] sm:text-lg">
              Hairy World serves salons, wholesalers, distributors, retailers and other hair businesses across India, the GCC countries, the UK, the USA, Canada and other international markets.
            </p>
            <p className="mt-4 text-base leading-7 text-[#625a4e]">
              We work to understand each customer’s requirements and discuss products, quantities and specifications that suit their business needs.
            </p>
            <Link to="/global-export" className="mt-8 inline-flex items-center gap-2 border-b border-[#b8924b] pb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#755721] transition-all hover:gap-3">
              Learn about our export network <ArrowIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#211c16] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <img
            src={company.logos.emblemWhite}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute -right-20 -top-20 w-[300px] opacity-[0.07] sm:w-[420px]"
          />
          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <Eyebrow light>Let’s work together</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Tell us what your business needs.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                Share your product requirements and wholesale quantities with our team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d1ad60] px-6 py-3.5 text-sm font-semibold text-[#211c16] transition hover:bg-[#e8c77d] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#211c16]">
                <WhatsAppIcon size={18} /> WhatsApp us
              </a>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#e8c77d] hover:text-[#e8c77d] focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Browse products <ArrowIcon width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
