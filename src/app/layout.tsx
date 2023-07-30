import './globals.css'
import {Inter} from 'next/font/google'
import {Container} from "@/Components/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";
import {FC, PropsWithChildren} from "react";
import {LINK_CLASS_NAME} from "@/constants";
import bottomGraphics from "@/app/bottomGraphics.png";

const inter = Inter({subsets: ['latin']})

const MenuItem: FC<PropsWithChildren<
  {
    href: string
  }>> = ({children, href}) => (
  <li className={`${LINK_CLASS_NAME} text-white hover:text-black`}>
    <Link href={href}>
      {children}
    </Link>
  </li>
)

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
    <body
      className={`${inter.className} text-white bg-black bg-[url(/back.jpg)] bg-no-repeat bg-fixed bg-[center_top] min-h-screen flex flex-col`}>
    <nav className="bg-epj-red mb-16">
      <Container className="relative h-[100px]">
        <Link href="/" className="block absolute left-0 -bottom-9 w-[450px] h-[112px]">
          <Image src={logo} alt="Avtolektrika" width={450} height={112}/>
        </Link>

        <menu className="absolute left-60 bottom-4 flex gap-8">
          <MenuItem href="/">
            Domov
          </MenuItem>
          <MenuItem href="/avtoelektronika">
            Avtoelektronika
          </MenuItem>
          <MenuItem href="/chip-tuning">
            Chip Tuning
          </MenuItem>
          <MenuItem href="/">
            Kontakt
          </MenuItem>
        </menu>
      </Container>
    </nav>
    {children}

    <footer className="mt-auto pt-10">
      <Container>
        <Image src={bottomGraphics} alt="bottom graphics"/>
      </Container>
      <div className="bg-epj-red">
        <Container className="flex items-center h-12 text-sm">
          &copy; {new Date().getFullYear()} EPJ
        </Container>
      </div>
    </footer>
    </body>
    </html>
  )
}
