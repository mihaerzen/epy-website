import {Container} from '@/components/Container'
import {Heading1, Heading2, Paragraph, UList, ULitem} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
import {PhoneCta} from "@/components/PhoneCta";
import {ServiceLinks} from "@/components/ServiceLinks";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata, servicePageJsonLd} from "@/lib/seo";

const PATH = '/popravilo-avto-elektrike';

export const metadata = createMetadata({
  title: 'Popravilo avto elektrike in avtoelektrike',
  description:
    'Popravilo avto elektrike pri EPJ: napeljava, luči, zaganjač, alternator, akumulator, centralno zaklepanje, električni pomik stekel in senzorji.',
  path: PATH,
});

export default function PopraviloAvtoElektrike() {
  return (
    <Container>
      <JsonLd data={servicePageJsonLd(PATH)}/>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>Popravilo avto elektrike in avtoelektrike</Heading1>

      <Paragraph>
        Popravilo avto elektrike zajema napake, ki se pokažejo kot težak zagon, nedelujoče luči, praznjenje
        akumulatorja, težave z alternatorjem, zaganjačem, centralnim zaklepanjem, električnim pomikom stekel,
        ventilacijo ali občasnimi prekinitvami v napeljavi.
      </Paragraph>

      <PhoneCta label="Pokličite za popravilo avto elektrike"/>

      <Heading2 id="napake">
        <Hyperlink href="#napake">Pogoste električne napake</Hyperlink>
      </Heading2>

      <UList>
        <ULitem>avto ne vžge ali občasno izgubi kontakt</ULitem>
        <ULitem>luči, smerniki, brisalci, ventilacija ali električni pomik stekel ne delujejo</ULitem>
        <ULitem>centralno zaklepanje odpove ali se vozilo ne odklepa pravilno</ULitem>
        <ULitem>akumulator se prazni zaradi skrite porabe toka</ULitem>
        <ULitem>težave z zaganjačem, alternatorjem, releji, varovalkami ali masami</ULitem>
        <ULitem>poškodovana napeljava, oksidirani kontakti ali slabe povezave</ULitem>
      </UList>

      <Heading2 id="postopek">
        <Hyperlink href="#postopek">Postopek popravila</Hyperlink>
      </Heading2>

      <Paragraph>
        Pri avtoelektriki najprej preverimo simptome, nato napajanje, mase, varovalke, releje in napeljavo.
        Kadar je težava povezana z elektroniko, nadaljujemo z diagnostiko vozila in pregledom modulov. Tako
        ločimo mehansko okvaro od napake v avto elektriki ali avtoelektroniki.
      </Paragraph>

      <Paragraph>
        Delavnica EPJ je v Ivančni Gorici in je dostopna za stranke iz Grosuplja, Ljubljane z okolico,
        Višnje Gore, Stične, Trebnjega, Dolenjske in Osrednjeslovenske.
      </Paragraph>

      <Heading2 id="povezane-storitve">
        <Hyperlink href="#povezane-storitve">Povezane storitve</Hyperlink>
      </Heading2>

      <ServiceLinks currentHref="/popravilo-avto-elektrike"/>
    </Container>
  );
}
