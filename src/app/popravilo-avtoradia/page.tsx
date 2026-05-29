import {Container} from '@/components/Container'
import {Heading1, Heading2, Paragraph, UList, ULitem} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
import {PhoneCta} from "@/components/PhoneCta";
import {ServiceLinks} from "@/components/ServiceLinks";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata, servicePageJsonLd} from "@/lib/seo";

const PATH = '/popravilo-avtoradia';

export const metadata = createMetadata({
  title: 'Popravilo avtoradia in dekodiranje avtoradia',
  description:
    'Popravilo avtoradia, dekodiranje avtoradia, navigacij in multimedijskih enot pri EPJ v Ivančni Gorici.',
  path: PATH,
});

export default function PopraviloAvtoradia() {
  return (
    <Container>
      <JsonLd data={servicePageJsonLd(PATH)}/>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>Popravilo avtoradia in dekodiranje avtoradia</Heading1>

      <Paragraph>
        EPJ izvaja popravilo avtoradia, dekodiranje avtoradia ter diagnostiko navigacijskih in multimedijskih
        enot. Storitev je primerna, ko avtoradio ne deluje, zahteva varnostno kodo, nima zvoka, se ne prižge,
        izgublja nastavitve ali ima težave s komunikacijo z vozilom.
      </Paragraph>

      <PhoneCta label="Pokličite za popravilo avtoradia"/>

      <Heading2 id="storitve">
        <Hyperlink href="#storitve">Kaj lahko uredimo</Hyperlink>
      </Heading2>

      <UList>
        <ULitem>popravilo vseh vrst avtoradijev in njihovo dekodiranje</ULitem>
        <ULitem>dekodiranje avtoradia po odklopu akumulatorja ali menjavi enote</ULitem>
        <ULitem>diagnostika navigacije, zaslona in multimedijske enote</ULitem>
        <ULitem>preverjanje napajanja, mase, zvočnikov, antene in komunikacije z vozilom</ULitem>
        <ULitem>težave po zamenjavi avtoradia ali elektronskega modula</ULitem>
      </UList>

      <Heading2 id="lokacija">
        <Hyperlink href="#lokacija">Popravilo avto radia v okolici Ivančne Gorice</Hyperlink>
      </Heading2>

      <Paragraph>
        Če iščete popravilo avto radia, popravilo avtoradia, dekodiranje avtoradia ali popravilo navigacije
        v okolici Ivančne Gorice, Grosuplja, Ljubljane, Višnje Gore, Stične, Trebnjega ali Dolenjske, nas
        pred obiskom pokličite, da preverimo podatke o vozilu in napaki.
      </Paragraph>

      <Heading2 id="povezane-storitve">
        <Hyperlink href="#povezane-storitve">Povezane storitve</Hyperlink>
      </Heading2>

      <ServiceLinks currentHref="/popravilo-avtoradia"/>
    </Container>
  );
}
