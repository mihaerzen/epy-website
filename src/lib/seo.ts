import type {Metadata} from 'next';

export const SITE_URL = 'https://avtoelektronika-epj.si';
export const BUSINESS_NAME = 'EPJ, Jože Perpar s.p.';
export const BUSINESS_LEGAL_NAME = 'EPJ Jože Perpar s.p.';
export const PHONE_DISPLAY = '040/432-000';
export const PHONE_E164 = '+38640432000';
export const STREET_ADDRESS = 'Mleščevo 10a';
export const POSTAL_CODE = '1295';
export const ADDRESS_LOCALITY = 'Ivančna Gorica';

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
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 450,
        height: 112,
        alt: BUSINESS_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${SITE_URL}/logo.png`],
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
  sameAs: [
    'https://maps.google.si/maps?ie=UTF8&cid=1681750800471515878&q=Epj+Jo%C5%BEe+Perpar+s.p.&iwloc=A&gl=SI&hl=en',
  ],
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
