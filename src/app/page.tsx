import Image, {StaticImageData} from 'next/image'

import avtoelektrikaImg from "./avtoelektrika_1.jpg"
import chipTuningImg from "./chipTuning_1.jpg"
import Link from "next/link";
import {FC} from "react";
import {Container} from '@/components/Container'
import {LINK_CLASS_NAME} from "@/constants";
import {Vizitka} from "@/components/Vizitka";
import { Metadata } from 'next';

const title = 'EPJ, Jože Perpar s.p.';
const description = 'Odpravljamo vse vrste napak v zvezi z avtomobilsko elektroniko.';
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: 'https://avtoelektronika-epj.si/logo.png',
    type: 'website',
    title,
    description,
    url: 'https://avtoelektronika-epj.si',
    siteName: title,
  }
}

const Item: FC<{
  imgSrc: StaticImageData;
  imgAlt: string;
  href: string;
  title: string;
  description: string;
}> = ({imgSrc, imgAlt, href, title, description}) => {
  return <div className="flex-1 w-full pb-8">
    <Link href={href}><Image objectFit="cover" className="pb-4 w-full" src={imgSrc} alt={imgAlt} width={400}
                             height={300}/></Link>
    <h2 className={`pb-4 uppercase text-lg font-semibold text-epj-red hover:text-white ${LINK_CLASS_NAME}`}>
      <Link href={href}>{title}</Link>
    </h2>
    <p className="pb-4">
      {description}
    </p>
  </div>
}

export default function Home() {
  return (
    <Container>
      <Vizitka/>

      <div className="flex items-center flex-col md:flex-row gap-8">
        <Item
          imgAlt="Avtoelektronika"
          imgSrc={avtoelektrikaImg}
          href="/avtoelektronika"
          title="Avtoelektronika"
          description="Odpravljamo vse vrste napak v zvezi z avtomobilsko elektroniko."
        />

        <Item
          imgAlt="Chip Tuning"
          imgSrc={chipTuningImg}
          href="/chip-tuning"
          title="Chip Tuning"
          description="Zmanjšajte porabo goriva in hkrati povečajte moč motorja."
        />
      </div>
    </Container>
  )
}
