import Image from "next/image";
import {Container} from "@/components/Container";
import bottomGraphics from "@/components/Footer/bottomGraphics.png";
import Link from "next/link";
import {ADDRESS_LOCALITY, PHONE_DISPLAY, PHONE_E164, services, STREET_ADDRESS} from "@/lib/seo";
import {LINK_CLASS_NAME} from "@/constants";

export const Footer = () => (
  <footer className="mt-auto pt-10 md:pt-4">
      <Container>
        <Image src={bottomGraphics} alt="bottom graphics"/>
      </Container>
      <div className="bg-epj-red">
        <Container className="py-4 text-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> EPJ | {STREET_ADDRESS}, {ADDRESS_LOCALITY} | <a className={`${LINK_CLASS_NAME} hover:text-black`} href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a></p>
            <nav aria-label="Povezave v nogi">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {services.slice(0, 5).map((service) => (
                  <li key={service.href}>
                    <Link className={`${LINK_CLASS_NAME} hover:text-black`} href={service.href}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
)
