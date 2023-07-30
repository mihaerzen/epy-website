import './globals.css'
import {Inter} from 'next/font/google'
import {Container} from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";
import bottomGraphics from "@/app/bottomGraphics.png";
import {MenuItem} from "@/components/MenuItem";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
    <body
      className={`${inter.className} min-w-[450px] text-white bg-black bg-[url(/back.jpg)] bg-no-repeat bg-fixed bg-[center_top] min-h-screen flex flex-col`}>
    <nav className="bg-epj-red mb-16">
      <Container className="relative h-[100px]">
        <Link href="/" className="block absolute left-0 -bottom-9 w-[450px] h-[112px]">
          <Image src={logo} alt="Avtolektrika" width={450} height={112}/>
        </Link>

        <menu className="absolute bg-epj-red -bottom-11 flex gap-8 sm:bg-none sm:left-60 sm:bottom-4 items-center">
          <MenuItem href="/">
            Domov
          </MenuItem>
          <MenuItem href="/avtoelektronika">
            Avtoelektronika
          </MenuItem>
          <MenuItem href="/chip-tuning">
            Chip Tuning
          </MenuItem>
          <MenuItem href="/kontakt">
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
