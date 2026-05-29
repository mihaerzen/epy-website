import {LINK_CLASS_NAME} from "@/constants";
import {PHONE_DISPLAY, PHONE_E164} from "@/lib/seo";

export const PhoneCta = ({label = 'Pokličite za diagnostiko ali termin'}: { label?: string }) => (
  <p className="mb-8">
    <a
      className={`inline-flex bg-epj-red px-4 py-3 text-white hover:text-black font-semibold ${LINK_CLASS_NAME}`}
      href={`tel:${PHONE_E164}`}
    >
      {label}: {PHONE_DISPLAY}
    </a>
  </p>
);
