// ─────────────────────────────────────────────────────────────
//  Single source of truth for Hairy World.
//  Edit details here and every page, the footer, SEO tags and
//  WhatsApp links update automatically.
//  NOTE: phone, email and street address below are DEMO values.
// ─────────────────────────────────────────────────────────────

const company = {
  name: 'Hairy World',
  legalName: 'Hairy World',
  tagline: 'Original Human Hair Wholesale',
  shortDescription:
    'Trusted wholesale human hair supplier and exporter from Alappuzha, Kerala, with 15+ years of experience and our own stitching unit.',
  domain: 'hairyworld.in',
  url: 'https://hairyworld.in',
  yearsExperience: 15,

  // ── Contact (DEMO – replace before launch) ──
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsappNumber: '919876543210', // country code + number, no "+" or spaces
  email: 'info@hairyworld.in',
  salesEmail: 'wholesale@hairyworld.in',
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM IST',

  address: {
    line1: 'Hairy World, Avalookkunnu P.O.',
    line2: 'Alappuzha, Kerala',
    pin: '688006',
    country: 'India',
    full: 'Hairy World, Avalookkunnu P.O., Alappuzha, Kerala 688006, India',
    geo: { lat: 9.4981, lng: 76.3388 },
  },

  mapUrl: 'https://maps.app.goo.gl/GMicXzULEA4vPuPZ9',
  // Embeds the Alappuzha area; swap for the exact embed link from Google Maps → Share → Embed.
  mapEmbed:
    'https://www.google.com/maps?q=Alappuzha,+Kerala&output=embed',

  social: [
    { key: 'instagram', label: 'Instagram', url: 'https://instagram.com/hairyworld.in' },
    { key: 'facebook', label: 'Facebook', url: 'https://facebook.com/hairyworld.in' },
    { key: 'youtube', label: 'YouTube', url: 'https://youtube.com/@hairyworld' },
    { key: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/company/hairyworld' },
  ],

  logos: {
    main: '/logos/logo.svg',
    transparent: '/logos/logo-transparent.svg',
    white: '/logos/logo-white.svg',
    horizontal: '/logos/logo-horizontal.svg',
    horizontalWhite: '/logos/logo-horizontal-white.svg',
    emblem: '/logos/emblem.svg',
    emblemWhite: '/logos/emblem-white.svg',
    og: '/logos/og-image.png',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Custom Manufacturing', to: '/custom-manufacturing' },
    { label: 'Global Export', to: '/global-export' },
    { label: 'Contact', to: '/contact' },
  ],

  stats: [
    { value: 15, suffix: '+', label: 'Years in the hair trade' },
    { value: 100, suffix: '%', label: 'Original human hair' },
    { value: 10, suffix: '+', label: 'Export markets served' },
    { value: 1, suffix: '', label: 'In-house stitching unit' },
  ],

  markets: ['GCC Countries', 'United Kingdom', 'United States', 'Canada', 'India', 'Other International Markets'],

  buyers: ['Wholesalers', 'Salons', 'Distributors', 'Retailers', 'Exporters', 'Extension Brands'],

  products: [
    {
      slug: 'bulk-hair',
      name: 'Bulk Human Hair',
      group: 'Raw Supply',
      blurb: 'Unprocessed bulk hair sorted by length and texture, sourced for wholesale volume.',
      details: ['Sorted by length', 'Natural black & shades', 'Straight, wavy, curly'],
    },
    {
      slug: 'single-drawn',
      name: 'Single Drawn Hair',
      group: 'Raw Supply',
      blurb: 'Natural length variation with a fuller, softer feel at the ends.',
      details: ['Mixed natural lengths', 'Soft tapering', 'Cost-efficient volume'],
    },
    {
      slug: 'double-drawn',
      name: 'Double Drawn Hair',
      group: 'Raw Supply',
      blurb: 'Short strands removed so the hair stays thick and even from root to tip.',
      details: ['Uniform thickness', 'Full ends', 'Premium finish'],
    },
    {
      slug: 'clip-on',
      name: 'Clip-On Extensions',
      group: 'Ready-to-use',
      blurb: 'Quick, damage-free volume and length that stylists and customers love.',
      details: ['Secure clip system', 'Reusable', 'Multiple lengths'],
    },
    {
      slug: 'clip-in',
      name: 'Clip-In Extensions',
      group: 'Ready-to-use',
      blurb: 'Full sets made on our own stitching unit with comfortable, flat wefts.',
      details: ['Flat comfortable wefts', 'Full-head sets', 'Custom weights'],
    },
    {
      slug: 'ponytails',
      name: 'Ponytails',
      group: 'Ready-to-use',
      blurb: 'Instant length and body in a single, easy-to-wear piece.',
      details: ['Wrap-around fit', 'Straight & wavy', 'Retail-ready'],
    },
    {
      slug: 'buns',
      name: 'Hair Buns',
      group: 'Ready-to-use',
      blurb: 'Structured bun pieces for bridal styling and everyday looks.',
      details: ['Bridal & daily wear', 'Natural blend', 'Light and secure'],
    },
    {
      slug: 'clutch-hair',
      name: 'Clutch Hair',
      group: 'Ready-to-use',
      blurb: 'Clutch-style hairpieces that add volume in seconds.',
      details: ['Easy clutch fitting', 'Natural movement', 'Bulk packs'],
    },
    {
      slug: 'tail-extensions',
      name: 'Tail Extensions',
      group: 'Ready-to-use',
      blurb: 'Long, flowing tails for a seamless, lengthened look.',
      details: ['Seamless blending', 'Long lengths', 'Salon favourite'],
    },
    {
      slug: 'tiruppan',
      name: 'Tiruppan Hair',
      group: 'Specialty',
      blurb: 'Traditional tiruppan hair, supplied with care for customers who prefer it.',
      details: ['Traditional style', 'Consistent supply', 'Wholesale packs'],
    },
    {
      slug: 'wrapped',
      name: 'Wrapped Extensions',
      group: 'Specialty',
      blurb: 'Neatly wrapped extensions made to your length and colour brief.',
      details: ['Neat wrapping', 'Custom length', 'Colour on request'],
    },
    {
      slug: 'custom',
      name: 'Customized Hair Products',
      group: 'Specialty',
      blurb: 'Tell us what you need. Our stitching unit builds it to your specification.',
      details: ['Your specification', 'Private packaging', 'Sampling available'],
    },
  ],

  whyUs: [
    { title: '100% Original Human Hair', text: 'Real human hair, never blended with synthetic fibre.' },
    { title: 'Own Stitching Unit', text: 'We manufacture and customize in-house, so you control specs and timelines.' },
    { title: 'Competitive Wholesale Pricing', text: 'Direct sourcing and in-house production keep margins healthy for you.' },
    { title: 'Reliable Global Supply', text: 'Consistent quality and prompt dispatch to GCC, UK, USA, Canada and beyond.' },
  ],

  seo: {
    titleSuffix: 'Hairy World',
    defaultTitle: 'Hairy World | Wholesale Human Hair & Hair Extensions Supplier, Kerala',
    defaultDescription:
      'Hairy World is a wholesale human hair supplier and exporter from Alappuzha, Kerala. Bulk hair, drawn hair, clip-in and clip-on extensions, ponytails, buns and custom stitching for salons, wholesalers and distributors worldwide.',
    keywords:
      'wholesale human hair, human hair supplier Kerala, hair extensions wholesale, bulk human hair, double drawn hair, clip in extensions wholesale, hair exporter India, Alappuzha hair supplier',
  },
};

// Build a WhatsApp link with an optional prefilled message.
export const waLink = (message = '') =>
  `https://wa.me/${company.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const DEFAULT_WA_MESSAGE = `Hello ${company.name}, I would like to enquire about wholesale human hair.`;

export default company;
