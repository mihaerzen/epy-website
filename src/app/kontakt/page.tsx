import Image from "next/image";
import {Container} from '@/components/Container'
import {Heading1, Paragraph} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";

import mapImage from './map.webp';
import Link from "next/link";
import {Vizitka} from "@/components/Vizitka";
import {MAP_URL} from "@/constants";
import { Metadata } from "next";

const title = 'Kontakt | EPJ, Jože Perpar s.p.';
const description = 'EPJ, Jože Perpar s.p., Mleščevo 10a, 1295 Ivančna Gorica 040/432-000';
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: '/logo.png',
    type: 'website',
    title,
    description,
    url: 'https://avtoelektronika-epj.si/kontakt',
    siteName: title,
  }
}

export default function Kontakt() {
  return <>
    <Container>
      <Heading1>
        <Hyperlink href="/kontakt">KONTAKT</Hyperlink>
      </Heading1>

      <Vizitka/>

      <Link href={MAP_URL} target="_blank"><Image src={mapImage} alt="Map image" width={750} height={562}/></Link>
    </Container>
  </>
}
