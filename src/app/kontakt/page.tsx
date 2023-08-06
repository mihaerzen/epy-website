import Image from "next/image";
import {Container} from '@/components/Container'
import {Heading1, Paragraph} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";

import mapImage from './map.webp';
import Link from "next/link";
import {Vizitka} from "@/components/Vizitka";
import {MAP_URL} from "@/constants";

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
