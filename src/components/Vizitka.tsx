import {Hyperlink} from "@/components/Hyperlink";
import {Paragraph} from "@/components/Heading";
import {MAP_URL} from "@/constants";
import {OPENING_HOURS_DISPLAY} from "@/lib/seo";

export const Vizitka = () => (<><Paragraph>
  EPJ<br/>
  Jože Perpar s.p.<br/>
  <Hyperlink href={MAP_URL} target="_blank">Mleščevo 10a</Hyperlink><br/>
  1295 Ivančna Gorica<br/>
  Tel.: <Hyperlink href="tel:+38640432000">040/432-000</Hyperlink><br/>
  Delovni čas: {OPENING_HOURS_DISPLAY}
</Paragraph>
  <Paragraph>
    Lokacija: <Hyperlink target="_blank"
                         href={MAP_URL}>EPJ
    Google Mapa</Hyperlink>
  </Paragraph></>)
