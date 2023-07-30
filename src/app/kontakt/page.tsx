import {Container} from '@/components/Container'
import {Heading1, Paragraph} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";

export default function Kontakt() {
  return <>
    <Container>
      <Heading1>
        <Hyperlink href="/kontakt">KONTAKT</Hyperlink>
      </Heading1>

      <Paragraph>
        EPJ<br/>
        Jože Perpar s.p.<br/>
        Mleščevo 10a<br/>
        1295 Ivančna Gorica<br/>
        Tel.: <Hyperlink href="tel:+38640432000">040/432-000</Hyperlink>
      </Paragraph>
      <Paragraph>
        Lokacija: <Hyperlink target="_blank"
                             href="https://maps.google.si/maps?ie=UTF8&cid=1681750800471515878&q=Epj+Jo%C5%BEe+Perpar+s.p.&iwloc=A&gl=SI&hl=en">EPJ
        Google Mapa</Hyperlink>
      </Paragraph>
    </Container>
  </>
}
