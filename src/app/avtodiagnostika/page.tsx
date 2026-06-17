import {Container} from '@/components/Container'
import {Heading1, Heading2, Paragraph, UList, ULitem} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
import {PhoneCta} from "@/components/PhoneCta";
import {ServiceLinks} from "@/components/ServiceLinks";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata, servicePageJsonLd} from "@/lib/seo";
import {PageViewTracker} from "@/components/PageViewTracker";

const PATH = '/avtodiagnostika';

export const metadata = createMetadata({
  title: 'Avtodiagnostika in računalniška diagnostika vozil',
  description:
    'Avtodiagnostika EPJ v Ivančni Gorici: računalniška diagnostika vozil, branje in brisanje napak, motorna lučka, ABS, airbag in ECU.',
  path: PATH,
});

export default function Avtodiagnostika() {
  return (
    <Container>
      <PageViewTracker event="avtodiagnostika_page_viewed"/>
      <JsonLd data={servicePageJsonLd(PATH)}/>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>Avtodiagnostika in računalniška diagnostika vozil</Heading1>

      <Paragraph>
        Računalniška diagnostika vozil pokaže, kateri sistemi javljajo napako, vendar je za dobro popravilo
        pomembna tudi razlaga podatkov. Pri EPJ v Ivančni Gorici diagnostiko povežemo s preverjanjem napajanja,
        senzorjev, napeljave in elektronskih modulov, da ugotovimo dejanski vzrok težave.
      </Paragraph>

      <PhoneCta label="Pokličite za avtodiagnostiko"/>

      <Heading2 id="kaj-preverimo">
        <Hyperlink href="#kaj-preverimo">Kaj preverimo pri diagnostiki</Hyperlink>
      </Heading2>

      <UList>
        <ULitem>branje in brisanje napak iz računalnika vozila</ULitem>
        <ULitem>motorna lučka, izguba moči, cukanje motorja ali težak zagon</ULitem>
        <ULitem>ABS, ESP in airbag opozorila</ULitem>
        <ULitem>ECU, BSI, instrumentna plošča in drugi kontrolni moduli</ULitem>
        <ULitem>napake na senzorjih, napajanju, masah in komunikaciji med moduli</ULitem>
      </UList>

      <Heading2 id="kdaj-na-diagnostiko">
        <Hyperlink href="#kdaj-na-diagnostiko">Kdaj je diagnostika smiselna</Hyperlink>
      </Heading2>

      <Paragraph>
        Diagnostiko priporočamo, ko avto ne vžge, motor cuka, lučka za motor sveti, ABS ali airbag sistem
        javlja napako, poraba nenadno naraste ali se ista napaka vrača po brisanju. Storitev je namenjena
        voznikom iz Ivančne Gorice, Grosuplja, Ljubljane z okolico, Višnje Gore, Stične, Trebnjega in Dolenjske.
      </Paragraph>

      <Heading2 id="povezane-storitve">
        <Hyperlink href="#povezane-storitve">Povezane storitve</Hyperlink>
      </Heading2>

      <ServiceLinks currentHref="/avtodiagnostika"/>
    </Container>
  );
}
