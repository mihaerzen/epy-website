import {Container} from '@/components/Container'
import {Heading1, Heading2, Heading3, Paragraph, UList, ULitem} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
import {PhoneCta} from "@/components/PhoneCta";
import {ServiceLinks} from "@/components/ServiceLinks";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata, servicePageJsonLd, SERVICE_AREA} from "@/lib/seo";

const PATH = '/avtoelektrika';

export const metadata = createMetadata({
  title: 'Avtoelektrika in avtoelektronika | EPJ Ivančna Gorica',
  description:
    'Avtoelektrika in avtoelektronika EPJ: diagnostika, popravilo avto elektrike, avtoradiev, ABS, airbag in ECU napak v Ivančni Gorici.',
  path: PATH,
});

export default function Avtoelektrika() {
  return (
    <Container>
      <JsonLd data={servicePageJsonLd(PATH)}/>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>Avtoelektrika in avtoelektronika | EPJ Ivančna Gorica</Heading1>

      <Paragraph>
        EPJ Jože Perpar s.p. se ukvarja z avtoelektriko, avtoelektroniko in diagnostiko vozil.
        Pomagamo pri napakah, kot so prižgana motorna lučka, ABS ali airbag opozorilo, avto ne vžge,
        motor cuka, centralno zaklepanje ne deluje, električni pomik stekel odpove ali avtoradio zahteva kodo.
      </Paragraph>

      <Paragraph>
        Delavnica je v Ivančni Gorici, smiselno pa pokrivamo tudi Grosuplje, Ljubljano z okolico,
        Višnjo Goro, Stično, Trebnje, Dolenjsko in Osrednjeslovensko.
      </Paragraph>

      <PhoneCta/>

      <Heading2 id="storitve">
        <Hyperlink href="#storitve">Storitve avtoelektrike</Hyperlink>
      </Heading2>

      <UList>
        <ULitem>računalniška diagnostika vozil, branje in brisanje napak iz računalnika</ULitem>
        <ULitem>popravilo avto elektrike, napeljave, luči, senzorjev, stikal in električnih porabnikov</ULitem>
        <ULitem>popravilo avtomobilske elektronike, ECU in drugih kontrolnih modulov</ULitem>
        <ULitem>odprava napak na ABS, ESP in airbag sistemih</ULitem>
        <ULitem>popravilo avtoradia, dekodiranje avtoradia, navigacij in multimedijskih enot</ULitem>
        <ULitem>iskanje vzroka za težak zagon, izgubo moči, ugašanje motorja ali občasne električne napake</ULitem>
      </UList>

      <Heading2 id="iskanje-napak">
        <Hyperlink href="#iskanje-napak">Kako poteka iskanje napake</Hyperlink>
      </Heading2>

      <Paragraph>
        Pri avtoelektriki je pomembno najprej potrditi vzrok, ne samo izbrisati opozorila. Zato preverimo
        shranjene napake, delovanje modula, napajanje, mase, napeljavo in povezane sklope. Tako se izognemo
        menjavi delov na pamet in lažje določimo, ali je težava v električni napeljavi, senzorju, aktuatorju,
        avtoradiu, ECU modulu ali drugem delu avtomobilske elektronike.
      </Paragraph>

      <Heading2 id="pogoste-napake">
        <Hyperlink href="#pogoste-napake">Pogoste napake, ki jih rešujemo</Hyperlink>
      </Heading2>

      <div className="grid gap-6 md:grid-cols-2">
        <section>
          <Heading3>Motor in zagon</Heading3>
          <UList>
            <ULitem>avto ne vžge ali vžge samo občasno</ULitem>
            <ULitem>motor težko vžge topel ali hladen</ULitem>
            <ULitem>motor cuka, se ugaša ali izgublja moč</ULitem>
            <ULitem>motorna lučka sveti ali utripa</ULitem>
          </UList>
        </section>

        <section>
          <Heading3>Električni sistemi</Heading3>
          <UList>
            <ULitem>ABS lučka sveti ali sistem ne deluje pravilno</ULitem>
            <ULitem>airbag lučka sveti po napaki ali posegu</ULitem>
            <ULitem>centralno zaklepanje, luči ali pomik stekel ne delujejo</ULitem>
            <ULitem>avtoradio, navigacija ali multimedijska enota se ne odziva</ULitem>
          </UList>
        </section>
      </div>

      <Heading2 id="lokacija">
        <Hyperlink href="#lokacija">Lokalno območje</Hyperlink>
      </Heading2>

      <Paragraph>
        Storitev iščejo vozniki z izrazi, kot so avtoelektričar Ivančna Gorica, popravilo avtoelektrike
        Grosuplje, avtoelektronika Ljubljana okolica ali popravilo avto radia Dolenjska. EPJ je primeren
        za stranke iz območij: {SERVICE_AREA.join(', ')}.
      </Paragraph>

      <Heading2 id="povezane-storitve">
        <Hyperlink href="#povezane-storitve">Povezane storitve</Hyperlink>
      </Heading2>

      <ServiceLinks currentHref="/avtoelektrika"/>
    </Container>
  );
}
