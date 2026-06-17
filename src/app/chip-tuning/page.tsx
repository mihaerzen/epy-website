import {Container} from '@/components/Container'
import {Heading1, Heading2, Paragraph, UList, ULitem} from "@/components/Heading";
import {Hyperlink} from "@/components/Hyperlink";
import {JsonLd} from "@/components/JsonLd";
import {breadcrumbJsonLd, createMetadata, servicePageJsonLd} from "@/lib/seo";
import {PhoneCta} from "@/components/PhoneCta";
import {ServiceLinks} from "@/components/ServiceLinks";
import {PageViewTracker} from "@/components/PageViewTracker";

const PATH = '/chip-tuning';

export const metadata = createMetadata({
  title: 'Chip tuning in optimizacija motorne elektronike',
  description:
    'Chip tuning pri EPJ: optimizacija motorne elektronike za boljši navor, moč in porabo goriva.',
  path: PATH,
});

export default function ChipTuning() {
  return (
    <Container>
      <PageViewTracker event="chip_tuning_page_viewed"/>
      <JsonLd data={servicePageJsonLd(PATH)}/>
      <JsonLd data={breadcrumbJsonLd(PATH)}/>
      <Heading1>
        <Hyperlink href="/chip-tuning">Chip tuning in optimizacija motorne elektronike</Hyperlink>
      </Heading1>

      <Paragraph>
        Pri chip tuningu gre za optimizacijo programa v motorni elektroniki. Cilj je boljši navor,
        bolj odzivna vožnja in pri ustreznih dizelskih motorjih tudi nižja poraba goriva. Pri EPJ v
        Ivančni Gorici poseg obravnavamo skupaj z avtoelektroniko in diagnostiko vozila.
      </Paragraph>

      <PhoneCta label="Pokličite za chip tuning"/>

      <Heading2 id="zakaj">
        <Hyperlink href="#zakaj">Zakaj chip tuning?</Hyperlink>
      </Heading2>

      <Paragraph>
        Najpogostejši razlog za chip tuning je bolj uporaben navor pri vsakodnevni vožnji. Pri nekaterih
        vozilih je mogoč tudi prihranek pri porabi goriva, vendar je rezultat odvisen od motorja, stanja
        vozila, načina vožnje in obstoječih napak.
      </Paragraph>

      <UList>
        <ULitem>več navora pri nižjih in srednjih vrtljajih</ULitem>
        <ULitem>boljša odzivnost motorja pri prehitevanju</ULitem>
        <ULitem>možna optimizacija porabe goriva pri primernih dizelskih motorjih</ULitem>
        <ULitem>prilagoditev programa glede na stanje in namen uporabe vozila</ULitem>
      </UList>

      <Heading2 id="diagnostika-pred-posegom">
        <Hyperlink href="#diagnostika-pred-posegom">Diagnostika pred posegom</Hyperlink>
      </Heading2>

      <Paragraph>
        Pred posegom je smiselna diagnostika pred posegom, ker chip tuning ni primeren poseg za vozilo,
        ki že javlja napake na motorju, turbini, senzorjih, DPF sistemu ali elektronskih modulih. Najprej
        preverimo osnovno stanje vozila, napake v računalniku in znake težav, ki bi jih optimizacija lahko
        samo še bolj izpostavila.
      </Paragraph>

      <Heading2 id="lokacija">
        <Hyperlink href="#lokacija">Chip tuning Ivančna Gorica in okolica</Hyperlink>
      </Heading2>

      <Paragraph>
        Storitev chip tuning in optimizacija motorne elektronike je namenjena strankam iz Ivančne Gorice,
        Grosuplja, Ljubljane z okolico, Višnje Gore, Stične, Trebnjega in Dolenjske. Če iščete chip tuning
        Ivančna Gorica, Grosuplje ali Ljubljana okolica, nas pred obiskom pokličite, da preverimo tip vozila,
        motor in pričakovanja.
      </Paragraph>

      <Heading2 id="povezane-storitve">
        <Hyperlink href="#povezane-storitve">Povezane storitve</Hyperlink>
      </Heading2>

      <ServiceLinks currentHref="/chip-tuning"/>
    </Container>
  );
}
