import Image from "next/image";
import {Container} from '@/components/Container'
import {Heading1, Heading2, Paragraph} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";

import mapImage from './map.webp';
import {Vizitka} from "@/components/Vizitka";
import {MAP_URL} from "@/constants";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata} from "@/lib/seo";
import {MapLink} from "@/components/MapLink";

const PATH = '/kontakt';

export const metadata = createMetadata({
  title: 'Kontakt EPJ Jože Perpar s.p. | Avtoelektrika Ivančna Gorica',
  description:
    'Kontakt EPJ Jože Perpar s.p., Mleščevo 10a, 1295 Ivančna Gorica, 040/432-000. Delavnica za avtoelektriko, avtoelektroniko in računalniško diagnostiko.',
  path: PATH,
});

export default function Kontakt() {
  return <>
    <Container>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>
        <Hyperlink href="/kontakt">Kontakt EPJ Jože Perpar s.p. | Avtoelektrika Ivančna Gorica</Hyperlink>
      </Heading1>

      <Paragraph>
        EPJ Jože Perpar s.p. je delavnica za avtoelektriko in avtoelektroniko v Ivančni Gorici. Storitvi
        avtoelektrika in avtoelektronika sta namenjeni voznikom, ki potrebujejo zanesljivo iskanje napak. Pokličite
        za termin, računalniško diagnostiko vozila, popravilo avto elektrike, avtoradia, ECU modulov,
        ABS ali airbag napak.
      </Paragraph>

      <Paragraph>
        Delavnica je na naslovu Mleščevo 10a, 1295 Ivančna Gorica. Za najhitrejši dogovor uporabite
        telefon 040/432-000, še posebej kadar avto ne vžge, sveti motorna lučka ali se napaka pojavlja
        samo občasno.
      </Paragraph>

      <Vizitka/>

      <Heading2>Lokacija delavnice EPJ</Heading2>

      <Paragraph>
        Stranke prihajajo iz Ivančne Gorice, Grosuplja, Višnje Gore, Stične, Trebnjega, Ljubljane z okolico
        in Dolenjske. Pred obiskom priporočamo klic, da preverimo osnovne podatke o vozilu in napaki.
      </Paragraph>

      <MapLink href={MAP_URL}>
        <Image style={{width: '100%', maxWidth: 750, height: 'auto'}} src={mapImage} alt="Zemljevid lokacije EPJ Jože Perpar s.p. v Ivančni Gorici"/>
      </MapLink>
    </Container>
  </>
}
