import {FC, PropsWithChildren} from "react";
import Link from "next/link";
import {LINK_CLASS_NAME} from "@/constants";

export interface HyperlinkProps {
  href: string;
  className?: string;
  target?: '_blank' | '_self'
}

export const Hyperlink: FC<PropsWithChildren<HyperlinkProps>> = ({target, href , className = '', children}) => <Link
  className={`text-epj-red hover:text-white ${LINK_CLASS_NAME} ${className}`}
  href={href} target={target}>{children}</Link>
