import {Hyperlink} from "@/components/Hyperlink";
import {Paragraph} from "@/components/Heading";
import {MAP_URL} from "@/constants";

export const Vizitka = () => (<Paragraph>
  EPJ<br/>
  Jože Perpar s.p.<br/>
  <Hyperlink href={MAP_URL} target="_blank">Mleščevo 10a</Hyperlink><br/>
  1295 Ivančna Gorica<br/>
  Tel.: <Hyperlink href="tel:+38640432000">040/432-000</Hyperlink>
</Paragraph>)
