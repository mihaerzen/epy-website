import Image from "next/image";
import {Container} from '@/components/Container'
import {Heading1, Paragraph} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";

import mapImage from './map.webp';
import Link from "next/link";
import {Vizitka} from "@/components/Vizitka";
import {MAP_URL} from "@/constants";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata} from "@/lib/seo";

const PATH = '/kontakt';

export const metadata = createMetadata({
  title: 'Kontakt EPJ Ivančna Gorica',
  description: 'EPJ Jože Perpar s.p., Mleščevo 10a, 1295 Ivančna Gorica, 040/432-000. Avtoelektrika in avtoelektronika.',
  path: PATH,
});

export default function Kontakt() {
  return <>
    <Container>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>
        <Hyperlink href="/kontakt">KONTAKT</Hyperlink>
      </Heading1>

      <Vizitka/>

      <Link href={MAP_URL} target="_blank"><Image style={{width: '100%', maxWidth: 750, height: 'auto'}} src={mapImage} alt="Map image"/></Link>
    </Container>
  </>
}
