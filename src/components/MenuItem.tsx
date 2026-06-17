'use client'

import Link from "next/link";
import {FC, PropsWithChildren} from "react";
import {LINK_CLASS_NAME} from "@/constants";
import {usePathname} from 'next/navigation'


export const MenuItem: FC<PropsWithChildren<
  {
    href: string;
    active?: boolean;
    onClick?: () => void;
  }>> = ({children, href, active, onClick}) => {
  return (
    <li className={`${LINK_CLASS_NAME} ${active ? 'text-black' : 'text-white'} hover:text-black`}>
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </li>
  )
}
