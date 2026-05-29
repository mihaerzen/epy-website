import './globals.css'
import type {Metadata} from 'next';
import {Navigation} from "@/components/Navigation/Navigation";
import {Footer} from "@/components/Footer/Footer";
import {BUSINESS_NAME, localBusinessJsonLd, SITE_DESCRIPTION, SITE_URL} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | Avtoelektrika Ivančna Gorica`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    title: `${BUSINESS_NAME} | Avtoelektrika Ivančna Gorica`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    // og:image is supplied by the app/opengraph-image route (1200x630).
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | Avtoelektrika Ivančna Gorica`,
    description: SITE_DESCRIPTION,
    // twitter:image falls back to the opengraph-image route.
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
    <body
      className="text-white bg-black bg-[url(/back.jpg)] bg-no-repeat bg-fixed bg-[center_top] min-h-screen flex flex-col">
    <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
    <Navigation/>

    {children}

    <Footer/>
    </body>
    </html>
  )
}
