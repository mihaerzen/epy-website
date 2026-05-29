import Link from "next/link";
import {primaryServicePages} from "@/lib/seo";
import {LINK_CLASS_NAME} from "@/constants";

export const ServiceLinks = ({currentHref}: { currentHref?: string }) => (
  <nav aria-label="Storitve EPJ" className="mb-8">
    <ul className="grid gap-3 md:grid-cols-2">
      {primaryServicePages
        .filter((service) => service.href !== currentHref)
        .map((service) => (
          <li key={service.href} className="border-l-4 border-epj-red pl-4">
            <Link className={`text-epj-red hover:text-white font-semibold ${LINK_CLASS_NAME}`} href={service.href}>
              {service.title}
            </Link>
            <p className="text-sm text-white/80 mt-1">{service.description}</p>
          </li>
        ))}
    </ul>
  </nav>
);
