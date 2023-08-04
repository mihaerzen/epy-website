import {MenuItem} from "@/components/MenuItem";
import {Container} from "@/components/Container";
import logo from "@/components/Navigation/logo.png";
import Link from "next/link";
import Image from "next/image";

export const Navigation = () => (
  <nav className="bg-epj-red mb-16">
    <Container className="relative h-[100px]">
      <Link href="/" className="block absolute left-0 -bottom-9 w-[450px] h-[112px]">
        <Image src={logo} alt="Avtolektrika" width={450} height={112}/>
      </Link>

      <menu className="absolute flex gap-8 bg-none left-60 bottom-4 items-center">
        <MenuItem href="/">
          DOMOV
        </MenuItem>
        <MenuItem href="/kontakt">
          KONTAKT
        </MenuItem>
        <MenuItem href="/avtoelektronika">
          AVTOELEKTRONIKA
        </MenuItem>
        <MenuItem href="/chip-tuning">
          CHIP TUNING
        </MenuItem>
      </menu>
    </Container>
  </nav>
)
