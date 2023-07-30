import {Container} from '@/Components/Container'
import {Heading1, Heading2, Heading3, Heading4, OList, OLitem, Paragraph, UList, ULitem} from "@/Components/Heading";
import Link from "next/dist/client/link";

export default function Avtolektronika() {
  return <>
    <Container>
        <Heading1>
          AVTOELEKTRONIKA
        </Heading1>

        <Paragraph>Popravilo avtomobilske elektronike (avtoelektronike) je naša primarna dejavnost.</Paragraph>

        <Heading2 id="diagnostika">
          <Link href="#diagnostika">DIAGNOSTIKA</Link>
        </Heading2>

        <Paragraph>Za diagnosticiranje vašega avtomobila uporabljamo najsodobnejše testerje<br/>
          s področja avtoelektronike. S tem dosežemo, da je praktično vsak problem,<br/>
          ki nastane v delovanju avtomobilske elektronike, rešljiv v najkrajšem možnem času.</Paragraph>

        <UList>
          <ULitem>odpravimo napake na airbag in abs sistemih</ULitem>
          <ULitem>reset oz. brisanje napak iz računalnika</ULitem>
          <ULitem>popravilo vseh vrst avtoradijev in njihovo dekodiranje</ULitem>
        </UList>

        <Heading3 id="odprava_napak">
          <Link href="#odprava_napak">ODPRAVA NAPAK</Link>
        </Heading3>

        <Paragraph>Rešujemo in odpravljamo napake na vseh avtomobilskih znamkah.</Paragraph>

        <Heading3 id="najbolj_pogoste_napake">
          <a href="#najbolj_pogoste_napake">Najbolj pogoste napake</a>
        </Heading3>

        <Heading4 id="Audi">
          <a href="#Audi">Audi</a>
        </Heading4>

        <OList>
          <li>Motor ne vžge oziroma težko vžge ponavadi, ko je segret</li>
        </OList>

        <Heading4 id="Fiat">
          <a href="#Fiat">Fiat</a>
        </Heading4>

        <OList>
          <OLitem>Prižgana motorna lučka, motor deluje le na dveh cilindrih zato avto nima moči</OLitem>
          <OLitem>Volan se s težavo obrača, elektro servo volan ne deluje</OLitem>
        </OList>

        <Heading4 id="Mercedes">
          <a href="#Mercedes">Mercedes</a>
        </Heading4>


        <OList>
          <li>Ne deluje ventilacija</li>

          <li>Ne dela centralno zaklepanje, ne delajo zadnje luči</li>

          <li>Avto ne vžge, ni konakta</li>

          <li>Ne deluje regulacija ventilacije</li>

          <li>Avto občasno ne vžge</li>
        </OList>

        <Heading4 id="Opel">
          <a href="#Opel">Opel</a>
        </Heading4>

        <OList>
          <li>Motor se ugasne med pospeševanjem ali ob vžigu</li>

          <li>Motor cuka ali se ugaša med vožnjo</li>
        </OList>

        <Heading4 id="Renault">
          <a href="#Renault">Renault</a>
        </Heading4>

        <OList>
          <li>Osvetlitev števca ne deluje</li>
        </OList>

        <Heading4 id="Seat">
          <a href="#Seat">Seat</a>
        </Heading4>

        <OList>
          <li>Avto izgublja moč</li>

          <li>Motor težko vžge zjutraj oz. ko je hladen</li>

          <li>Motor težko vžge ko je segret</li>
        </OList>

        <Heading4 id="Škoda">
          <a href="#Škoda">Škoda</a>
        </Heading4>

        <OList>
          <li>Motor ne vžge oziroma težko vžge ponavadi, ko je segret</li>

          <li>Avto izgublja moč</li>
        </OList>

        <Heading4 id="Volvo">
          <a href="#Volvo">Volvo</a>
        </Heading4>

        <OList>
          <li>Zagon motorja traja dlje kot normalno</li>

          <li>Motor težko vžge</li>

          <li>Vsi kazalci padajo</li>
        </OList>

        <Heading4 id="VW (Volkswagen)">
          <a href="#VW (Volkswagen)">VW (Volkswagen)</a>
        </Heading4>

        <OList>
          <li>Motor ne vžge oziroma težko vžge ponavadi, ko je segret</li>

          <li>Avto izgublja moč</li>
        </OList>

    </Container>
  </>
}
