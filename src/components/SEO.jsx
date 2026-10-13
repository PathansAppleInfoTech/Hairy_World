import { Helmet } from 'react-helmet-async';
import company from '../data/companyData';

export default function SEO({ title, description, path = '/', keywords, image, noindex = false, schema }) {
  const fullTitle = title ? `${title} | ${company.seo.titleSuffix}` : company.seo.defaultTitle;
  const desc = description || company.seo.defaultDescription;
  const url = `${company.url}${path === '/' ? '' : path}`;
  const img = `${company.url}${image || company.logos.og}`;

  const org = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${company.url}/#business`,
    name: company.name,
    url: company.url,
    logo: `${company.url}/logos/logo.png`,
    image: img,
    description: company.shortDescription,
    telephone: company.phoneRaw,
    email: company.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.line1,
      addressLocality: 'Alappuzha',
      addressRegion: 'Kerala',
      postalCode: company.address.pin,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: company.address.geo.lat, longitude: company.address.geo.lng },
    areaServed: company.markets,
    sameAs: company.social.map((s) => s.url),
    hasMap: company.mapUrl,
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords || company.seo.keywords} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      <script type="application/ld+json">{JSON.stringify(org)}</script>
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}
