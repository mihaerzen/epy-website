'use client'

import Link from "next/link";
import {FC, PropsWithChildren} from "react";
import {LINK_CLASS_NAME} from "@/constants";
import {usePathname} from 'next/navigation'


export const MenuItem: FC<PropsWithChildren<
  {
    href: string;
  }>> = ({children, href}) => {
  const pathname = usePathname()

  const active = href !== '/' && pathname.startsWith(href)

  return (
    <li className={`${LINK_CLASS_NAME} ${active ? 'text-black' : 'text-white'} hover:text-black`}>
      <Link href={href}>
        {children}
      </Link>
    </li>
  )
}
