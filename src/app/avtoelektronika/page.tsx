import {Container} from '@/components/Container'
import {Heading1, Heading2, Heading3, Heading4, OList, OLitem, Paragraph, UList, ULitem} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
export default function Avtolektronika() {
  return <>
    <Container>
        <Heading1>
          <Hyperlink href="/avtoelektronika">AVTOELEKTRONIKA</Hyperlink>
        </Heading1>

        <Paragraph>Popravilo avtomobilske elektronike (avtoelektronike) je naša primarna dejavnost.</Paragraph>

        <Heading2 id="diagnostika">
          <Hyperlink href="#diagnostika">DIAGNOSTIKA</Hyperlink>
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
          <Hyperlink href="#odprava_napak">ODPRAVA NAPAK</Hyperlink>
        </Heading3>

        <Paragraph>Rešujemo in odpravljamo napake na vseh avtomobilskih znamkah.</Paragraph>

        <Heading3 id="najbolj_pogoste_napake">
          <Hyperlink href="#najbolj_pogoste_napake">NAJBOLJ POGOSTE NAPAKE</Hyperlink>
        </Heading3>

        <Heading4 id="Audi">
          <Hyperlink href="#Audi">Audi</Hyperlink>
        </Heading4>

        <OList>
          <li>Motor ne vžge oziroma težko vžge ponavadi, ko je segret</li>
        </OList>

        <Heading4 id="Fiat">
          <Hyperlink href="#Fiat">Fiat</Hyperlink>
        </Heading4>

        <OList>
          <OLitem>Prižgana motorna lučka, motor deluje le na dveh cilindrih zato avto nima moči</OLitem>
          <OLitem>Volan se s težavo obrača, elektro servo volan ne deluje</OLitem>
        </OList>

        <Heading4 id="Mercedes">
          <Hyperlink href="#Mercedes">Mercedes</Hyperlink>
        </Heading4>


        <OList>
          <li>Ne deluje ventilacija</li>

          <li>Ne dela centralno zaklepanje, ne delajo zadnje luči</li>

          <li>Avto ne vžge, ni konakta</li>

          <li>Ne deluje regulacija ventilacije</li>

          <li>Avto občasno ne vžge</li>
        </OList>

        <Heading4 id="Opel">
          <Hyperlink href="#Opel">Opel</Hyperlink>
        </Heading4>

        <OList>
          <li>Motor se ugasne med pospeševanjem ali ob vžigu</li>

          <li>Motor cuka ali se ugaša med vožnjo</li>
        </OList>

        <Heading4 id="Renault">
          <Hyperlink href="#Renault">Renault</Hyperlink>
        </Heading4>

        <OList>
          <li>Osvetlitev števca ne deluje</li>
        </OList>

        <Heading4 id="Seat">
          <Hyperlink href="#Seat">Seat</Hyperlink>
        </Heading4>

        <OList>
          <li>Avto izgublja moč</li>

          <li>Motor težko vžge zjutraj oz. ko je hladen</li>

          <li>Motor težko vžge ko je segret</li>
        </OList>

        <Heading4 id="Škoda">
          <Hyperlink href="#Škoda">Škoda</Hyperlink>
        </Heading4>

        <OList>
          <li>Motor ne vžge oziroma težko vžge ponavadi, ko je segret</li>

          <li>Avto izgublja moč</li>
        </OList>

        <Heading4 id="Volvo">
          <Hyperlink href="#Volvo">Volvo</Hyperlink>
        </Heading4>

        <OList>
          <li>Zagon motorja traja dlje kot normalno</li>

          <li>Motor težko vžge</li>

          <li>Vsi kazalci padajo</li>
        </OList>

        <Heading4 id="VW (Volkswagen)">
          <Hyperlink href="#VW (Volkswagen)">VW (Volkswagen)</Hyperlink>
        </Heading4>

        <OList>
          <li>Motor ne vžge oziroma težko vžge ponavadi, ko je segret</li>

          <li>Avto izgublja moč</li>
        </OList>

    </Container>
  </>
}
