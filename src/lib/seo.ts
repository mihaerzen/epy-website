import type {Metadata} from 'next';

export const SITE_URL = 'https://avtoelektronika-epj.si';
export const BUSINESS_NAME = 'EPJ, Jože Perpar s.p.';
export const BUSINESS_LEGAL_NAME = 'EPJ Jože Perpar s.p.';
export const PHONE_DISPLAY = '040/432-000';
export const PHONE_E164 = '+38640432000';
export const STREET_ADDRESS = 'Mleščevo 10a';
export const POSTAL_CODE = '1295';
export const ADDRESS_LOCALITY = 'Ivančna Gorica';
// Approximate coordinates for Mleščevo 10a, 1295 Ivančna Gorica. Verify against the GBP map pin.
export const GEO_LATITUDE = 45.9357;
export const GEO_LONGITUDE = 14.8048;
export const OPENING_HOURS_DISPLAY = 'Pon–Pet: 08:00–16:00';
// Canonical Google Maps Place URL (CID), preferred for schema sameAs over the localized search URL.
export const GOOGLE_MAPS_PLACE_URL = 'https://www.google.com/maps?cid=1681750800471515878';

export const SERVICE_AREA = [
  'Ivančna Gorica',
  'Grosuplje',
  'Ljubljana okolica',
  'Višnja Gora',
  'Stična',
  'Trebnje',
  'Dolenjska',
  'Osrednjeslovenska',
];

export const SITE_DESCRIPTION =
  'Avtoelektrika in avtoelektronika EPJ v Ivančni Gorici: diagnostika, popravilo avto elektrike, avtoradiev, ABS, airbag in ECU napak.';

export const services = [
  {
    title: 'Avtoelektrika in avtoelektronika',
    href: '/avtoelektrika',
    description:
      'Diagnostika in popravilo električnih ter elektronskih napak na vozilih v Ivančni Gorici in okolici.',
  },
  {
    title: 'Avtodiagnostika',
    href: '/avtodiagnostika',
    description:
      'Računalniška diagnostika vozil, branje in brisanje napak ter usmerjeno iskanje vzroka okvar.',
  },
  {
    title: 'Popravilo avto elektrike',
    href: '/popravilo-avto-elektrike',
    description:
      'Popravilo avtoelektrike, napeljave, zagona, luči, centralnega zaklepanja, stekel in pogostih električnih napak.',
  },
  {
    title: 'Popravilo avtoradia',
    href: '/popravilo-avtoradia',
    description:
      'Popravilo avtoradiev, dekodiranje avtoradia, navigacij in multimedijskih enot.',
  },
  {
    title: 'Popravilo avtomobilske elektronike',
    href: '/popravilo-avtomobilske-elektronike',
    description:
      'Popravilo avtomobilske elektronike, ECU modulov, ABS, airbag sistemov in napak na kontrolnih enotah.',
  },
  {
    title: 'Chip tuning',
    href: '/chip-tuning',
    description: 'Optimizacija motorne elektronike za boljši navor, moč in porabo goriva.',
  },
  {
    title: 'Kontakt',
    href: '/kontakt',
    description: 'Kontaktni podatki, telefon in lokacija EPJ v Ivančni Gorici.',
  },
];

export const primaryServicePages = services.slice(0, 5);

export const getAbsoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`;

export const createMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    title,
    description,
    url: getAbsoluteUrl(path),
    siteName: BUSINESS_NAME,
    // og:image is supplied by the app/opengraph-image route (1200x630).
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    // twitter:image falls back to the opengraph-image route.
  },
});

export const localBusinessJsonLd = {
  "@context": 'https://schema.org',
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#epj`,
  name: BUSINESS_NAME,
  legalName: BUSINESS_LEGAL_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  telephone: PHONE_E164,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: STREET_ADDRESS,
    postalCode: POSTAL_CODE,
    addressLocality: ADDRESS_LOCALITY,
    addressCountry: 'SI',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO_LATITUDE,
    longitude: GEO_LONGITUDE,
  },
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#joze-perpar`,
    name: 'Jože Perpar',
    jobTitle: 'Avtoelektričar',
  },
  areaServed: SERVICE_AREA.map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  sameAs: [GOOGLE_MAPS_PLACE_URL],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Storitve avtoelektrike in avtoelektronike',
    itemListElement: primaryServicePages.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: getAbsoluteUrl(service.href),
      },
    })),
  },
};

// Per-page Service schema, linked to the global AutoRepair entity via @id.
export const servicePageJsonLd = (href: string) => {
  const service = services.find((s) => s.href === href);
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${getAbsoluteUrl(href)}#service`,
    name: service.title,
    description: service.description,
    url: getAbsoluteUrl(href),
    serviceType: service.title,
    provider: {
      '@type': 'AutoRepair',
      '@id': `${SITE_URL}/#epj`,
    },
    areaServed: SERVICE_AREA.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: PHONE_E164,
        contactType: 'customer service',
        availableLanguage: 'Slovenian',
      },
    },
  };
};

export const breadcrumbJsonLd = (href: string) => {
  const service = services.find((s) => s.href === href);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Domov',
        item: getAbsoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service?.title ?? href,
        item: getAbsoluteUrl(href),
      },
    ],
  };
};
