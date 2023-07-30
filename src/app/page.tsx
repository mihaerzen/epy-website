import Image, {StaticImageData} from 'next/image'

import avtoelektrikaImg from "./avtoelektrika_1.jpg"
import chipTuningImg from "./chipTuning_1.jpg"
import logo from "./logo.png"
import bottomGraphics from "./bottomGraphics.png"
import Link from "next/link";
import {FC, HTMLProps, PropsWithChildren} from "react";

const linkClasses = 'uppercase text-sm transition-colors ease-in duration-200'

const MenuItem: FC<PropsWithChildren<
  {
    href: string
  }>> = ({children, href}) => (
  <li className={`${linkClasses} text-white hover:text-black`}>
    <Link href={href}>
      {children}
    </Link>
  </li>
)

const Item: FC<{
  imgSrc: StaticImageData;
  imgAlt: string;
  href: string;
  title: string;
  description: string;
}> = ({ imgSrc, imgAlt, href,title,description }) => {
  return <div className="flex-1 w-full max-w-[400px] pb-8">
    <Image objectFit="cover" className="pb-4 w-full" src={imgSrc} alt={imgAlt} width={400} height={300}/>
    <h2 className={`pb-4 uppercase text-lg font-semibold text-epj-red hover:text-white ${linkClasses}`}>
      <Link href={href}>{title}</Link>
    </h2>
    <p className="pb-4">
      {description}
    </p>

    <Link href={href} className={`text-epj-red hover:text-white ${linkClasses}`}>PREBERI VEČ</Link>
  </div>
}

const Container: FC<HTMLProps<HTMLDivElement>> = ({className, ...props}) => <div className={`max-w-[830px] mx-auto ${className}`} {...props}/>

export default function Home() {
  return (
    <>
      <nav className="bg-epj-red">
        <Container className="relative h-[100px]">
          <Link href="/" className="block absolute left-0 -bottom-9 w-[450px] h-[112px]">
            <Image src={logo} alt="Avtolektrika" width={450} height={112} />
          </Link>

          <menu className="absolute left-60 bottom-4 flex gap-8">
            <MenuItem href="/">
              Domov
            </MenuItem>
            <MenuItem href="/">
              Avtoelektronika
            </MenuItem>
            <MenuItem href="/">
              Chip Tuning
            </MenuItem>
            <MenuItem href="/">
              Kontakt
            </MenuItem>
          </menu>
        </Container>
      </nav>


      <Container className={`flex flex-col items-center md:flex-row md:gap-8 mt-16`}>
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

      <footer className="mt-auto">
        <Container>
          <Image src={bottomGraphics} alt="bottom graphics"/>
        </Container>
        <div className="bg-epj-red">
          <Container className="flex items-center h-12 text-sm">
            &copy; {new Date().getFullYear()} EPJ
          </Container>
        </div>
      </footer>
    </>
  )
}
