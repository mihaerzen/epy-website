import Image from "next/image";
import {Container} from "@/components/Container";
import bottomGraphics from "@/components/Footer/bottomGraphics.png";
import Link from "next/link";

export const Footer = () => (
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
)
