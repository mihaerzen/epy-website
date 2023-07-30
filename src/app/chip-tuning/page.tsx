import {Container} from '@/Components/Container'
import {Heading1, Heading2, Paragraph} from "@/Components/Heading";
import Link from "next/dist/client/link";

export default function Avtolektronika() {
  return <>
    <Container>
        <Heading1>
          CHIP TUNING
        </Heading1>

        <Paragraph>Pri chip tuningu gre za nadgradnjo računalniškega sistema pri avtomobilu. Računalnik vzamemo iz avta, preberemo njegov program, ga modificiramo, nadgradimo in zapišemo nazaj.</Paragraph>

        <Heading2 id="ZAKAJ">
          <Link href="#ZAKAJ">ZAKAJ?</Link>
        </Heading2>

        <Paragraph>Najbolj pogost razlog za chip tuning je zmanjšanje porabe goriva pri dizelskih motorjih. Pri avtomobilih je zmanjšanje porabe povprečno 15% (1 do 1,5 litra na 100km). Poleg manjše orabe pa avto pridobi na sami moči motorja, kar daje občutek bolj prožne in živahne vožnje. Ker se na ta način poveča navor motorja, je prehitevanje veliko lažje in s tem ponavadi tudi bolj varno.</Paragraph>
    </Container>
  </>
}
