import Image, {StaticImageData} from 'next/image'

import avtoelektrikaImg from "./avtoelektrika_1.jpg"
import chipTuningImg from "./chipTuning_1.jpg"
import bottomGraphics from "./bottomGraphics.png"
import Link from "next/link";
import {FC} from "react";
import {Container} from '@/Components/Container'
import {LINK_CLASS_NAME} from "@/constants";


const Item: FC<{
  imgSrc: StaticImageData;
  imgAlt: string;
  href: string;
  title: string;
  description: string;
}> = ({imgSrc, imgAlt, href, title, description}) => {
  return <div className="flex-1 w-full max-w-[400px] pb-8">
    <Image objectFit="cover" className="pb-4 w-full" src={imgSrc} alt={imgAlt} width={400} height={300}/>
    <h2 className={`pb-4 uppercase text-lg font-semibold text-epj-red hover:text-white ${LINK_CLASS_NAME}`}>
      <Link href={href}>{title}</Link>
    </h2>
    <p className="pb-4">
      {description}
    </p>

    <Link href={href} className={`text-epj-red hover:text-white ${LINK_CLASS_NAME}`}>PREBERI VEČ</Link>
  </div>
}


export default function Home() {
  return (
    <>
      <Container className={`flex flex-col items-center md:flex-row md:gap-8`}>
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
      </Container>
    </>
  )
}
