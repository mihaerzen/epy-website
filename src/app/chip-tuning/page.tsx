import {Container} from '@/components/Container'
import {Heading1, Heading2, Paragraph} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
import {createMetadata} from "@/lib/seo";

export const metadata = createMetadata({
  title: 'Chip tuning in optimizacija motorne elektronike',
  description:
    'Chip tuning pri EPJ: optimizacija motorne elektronike za boljši navor, moč in porabo goriva.',
  path: '/chip-tuning',
});

export default function ChipTuning() {
  return <>
    <Container>
        <Heading1>
          <Hyperlink href="/chip-tuning">CHIP TUNING</Hyperlink>
        </Heading1>

        <Paragraph>Pri chip tuningu gre za nadgradnjo računalniškega sistema pri avtomobilu. Računalnik vzamemo iz avta, preberemo njegov program, ga modificiramo, nadgradimo in zapišemo nazaj.</Paragraph>

        <Heading2 id="ZAKAJ">
          <Hyperlink href="#ZAKAJ">ZAKAJ?</Hyperlink>
        </Heading2>

        <Paragraph>Najbolj pogost razlog za chip tuning je zmanjšanje porabe goriva pri dizelskih motorjih. Pri avtomobilih je zmanjšanje porabe povprečno 15% (1 do 1,5 litra na 100km). Poleg manjše porabe pa avto pridobi na sami moči motorja, kar daje občutek bolj prožne in živahne vožnje. Ker se na ta način poveča navor motorja, je prehitevanje veliko lažje in s tem ponavadi tudi bolj varno.</Paragraph>
    </Container>
  </>
}
