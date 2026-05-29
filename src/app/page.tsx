import Image, {type ImageProps, type StaticImageData} from 'next/image'

import avtoelektrikaImg from "./avtoelektrika_1.jpg"
import chipTuningImg from "./chipTuning_1.jpg"
import Link from "next/link";
import {FC} from "react";
import {Container} from '@/components/Container'
import {LINK_CLASS_NAME} from "@/constants";
import {Vizitka} from "@/components/Vizitka";
import {Heading1, Heading2, Paragraph} from "@/components/Heading";
import {PhoneCta} from "@/components/PhoneCta";
import {ServiceLinks} from "@/components/ServiceLinks";
import {createMetadata} from "@/lib/seo";

export const metadata = createMetadata({
  title: 'EPJ avtoelektrika Ivančna Gorica',
  description:
    'EPJ Ivančna Gorica: avtoelektrika, avtoelektronika, avtodiagnostika, popravilo avto elektrike, avtoradiev, ABS, airbag in ECU napak.',
  path: '/',
});

const cardImageSizes = "(min-width: 768px) 399px, calc(100vw - 16px)";

type ItemImageProps = Pick<ImageProps, 'preload' | 'fetchPriority' | 'loading' | 'quality' | 'sizes'>;

type ItemProps = {
  imgSrc: StaticImageData;
  imgAlt: string;
  href: string;
  title: string;
  description: string;
} & ItemImageProps;

const Item: FC<ItemProps> = ({imgSrc, imgAlt, href, title, description, preload, fetchPriority, loading, quality, sizes}) => {
  return <div className="flex-1 w-full pb-8 md:pb-2">
    <Link href={href}><Image className="pb-4 w-full object-cover md:h-[180px]" src={imgSrc} alt={imgAlt} width={400}
                             height={300} preload={preload} fetchPriority={fetchPriority} loading={loading}
                             quality={quality} sizes={sizes}/></Link>
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
      <Heading1>Avtoelektrika in avtoelektronika EPJ Ivančna Gorica</Heading1>

      <Paragraph>
        EPJ Jože Perpar s.p. odpravlja napake na avtoelektriki in avtoelektroniki: računalniška diagnostika
        vozil, popravilo avto elektrike, popravilo avtomobilske elektronike, ABS in airbag sistemi, ECU moduli
        ter popravilo in dekodiranje avtoradiev.
      </Paragraph>

      <Paragraph>
        Delavnica je v Ivančni Gorici. Stranke prihajajo tudi iz Ivančne Gorice, Grosuplje, Višnja Gora,
        Stična, Trebnje, Ljubljana okolica, Dolenjska in Osrednjeslovenska.
      </Paragraph>

      <PhoneCta/>
      <Vizitka/>

      <div className="flex items-center flex-col md:flex-row gap-8">
        <Item
          imgAlt="Avtoelektronika"
          imgSrc={avtoelektrikaImg}
          href="/avtoelektrika"
          title="Avtoelektrika"
          description="Diagnostika in popravilo avtoelektrike, avtoelektronike, modulov, ABS, airbag in ECU napak."
          preload={true}
          fetchPriority="high"
          quality={60}
          sizes={cardImageSizes}
        />

        <Item
          imgAlt="Chip Tuning"
          imgSrc={chipTuningImg}
          href="/chip-tuning"
          title="Chip Tuning"
          description="Zmanjšajte porabo goriva in hkrati povečajte moč motorja."
          quality={60}
          sizes={cardImageSizes}
        />
      </div>

      <Heading2>Storitve</Heading2>
      <ServiceLinks currentHref="/"/>
    </Container>
  )
}
