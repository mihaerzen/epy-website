import {Container} from '@/components/Container'
import {Heading1, Heading2, Paragraph, UList, ULitem} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
import {PhoneCta} from "@/components/PhoneCta";
import {ServiceLinks} from "@/components/ServiceLinks";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata, servicePageJsonLd} from "@/lib/seo";

const PATH = '/popravilo-avtomobilske-elektronike';

export const metadata = createMetadata({
  title: 'Popravilo avtomobilske elektronike, ECU, ABS in airbag',
  description:
    'Popravilo avtomobilske elektronike pri EPJ: ECU, ABS, airbag, moduli, računalniki vozila in elektronske napake v Ivančni Gorici.',
  path: PATH,
});

export default function PopraviloAvtomobilskeElektronike() {
  return (
    <Container>
      <JsonLd data={servicePageJsonLd(PATH)}/>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>Popravilo avtomobilske elektronike, ECU, ABS in airbag</Heading1>

      <Paragraph>
        Popravilo avtomobilske elektronike je primarna dejavnost EPJ. Ukvarjamo se z napakami na elektronskih
        modulih, ECU računalnikih, ABS in airbag sistemih, instrumentnih ploščah, centralnem zaklepanju,
        komunikaciji med moduli ter drugimi sklopi avtoelektronike.
      </Paragraph>

      <PhoneCta label="Pokličite za popravilo avtomobilske elektronike"/>

      <Heading2 id="moduli">
        <Hyperlink href="#moduli">Elektronski sklopi in moduli</Hyperlink>
      </Heading2>

      <UList>
        <ULitem>ECU in avtomobilski računalnik motorja</ULitem>
        <ULitem>ABS, ESP in airbag sistemi</ULitem>
        <ULitem>instrumentna plošča, števec in opozorilne lučke</ULitem>
        <ULitem>centralno zaklepanje, komfortni moduli in komunikacija med moduli</ULitem>
        <ULitem>napake po vlagi, slabem kontaktu, okvari napajanja ali prekinjeni napeljavi</ULitem>
      </UList>

      <Heading2 id="simptomi">
        <Hyperlink href="#simptomi">Znaki elektronske napake</Hyperlink>
      </Heading2>

      <Paragraph>
        Na pregled se naročite, če avto občasno ne vžge, motorna lučka sveti, ABS lučka sveti, airbag lučka
        sveti, kazalci padajo, vozilo izgublja moč, centralno zaklepanje ne dela ali se po brisanju napaka
        hitro vrne. Pri takih primerih je pogosto treba preveriti tako avtoelektriko kot avtoelektroniko.
      </Paragraph>

      <Paragraph>
        EPJ je v Ivančni Gorici in sprejema stranke iz širše okolice: Grosuplje, Ljubljana okolica,
        Višnja Gora, Stična, Trebnje, Dolenjska in Osrednjeslovenska.
      </Paragraph>

      <Heading2 id="povezane-storitve">
        <Hyperlink href="#povezane-storitve">Povezane storitve</Hyperlink>
      </Heading2>

      <ServiceLinks currentHref="/popravilo-avtomobilske-elektronike"/>
    </Container>
  );
}
