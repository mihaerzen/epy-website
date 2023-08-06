'use client'

import {MenuItem} from "@/components/MenuItem";
import {Container} from "@/components/Container";
import logo from "@/components/Navigation/logo.png";
import logoSmall from "@/components/Navigation/logo-small.png";
import Link from "next/link";
import Image from "next/image";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {usePathname, useRouter} from "next/navigation";
import {ChangeEventHandler, useCallback, useMemo} from "react";

export const Navigation = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 750px)')
  const pathname = usePathname()
  const router = useRouter();

  const menuItems: { text: string, href: string, active: boolean }[] = [
    {
      text: 'DOMOV',
      href: '/',
    },
    {
      text: 'KONTAKT',
      href: '/kontakt',
    },
    {
      text: 'AVTOELEKTRONIKA',
      href: '/avtoelektronika',
    },
    {
      text: 'CHIP TUNING',
      href: '/chip-tuning',
    },
  ].map((obj) => ({
    ...obj,
    active: obj.href === pathname
  }))

  const activeMenuItemText = menuItems.find(mi => mi.active)?.text || '';

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
    router.push(e.target.value)
  }, [router])

  return (
    <nav className="bg-epj-red mb-8 md:mb-16">
      <Container
        className="relative">
        {
          isSmallDevice
            ?
            <div className="flex flex-row items-center h-[50px] justify-between">
              <div className="flex w-full items-center">
                <div className="max-w-[50px]">
                  <Link href="/">
                    <Image src={logoSmall} alt="EPJ" width={207} height={57}/>
                  </Link>
                </div>
              </div>

              <div className="relative text-white text-right">
                <div className="whitespace-nowrap">{activeMenuItemText}</div>

                <select
                  className={`absolute w-full right-0 top-0 text-white opacity-0 z-20`}
                  onChange={handleChange} value={pathname}>
                  {
                    menuItems.map(({text, href, active}) => <option className="text-right" key={href}
                                                                    value={href}>{text}</option>)
                  }
                </select>
              </div>
            </div>
            :
            <div className="flex flex-row items-center gap-8 h-[100px]">
              <Link href="/" className="block absolute left-0 -bottom-9 w-[450px]">
                <Image src={logo} alt="EPJ" width={450} height={112}/>
              </Link>

              <menu className="absolute flex gap-8 bg-none left-60 bottom-4 items-center">
                {menuItems.map(({text, href, active}) => <MenuItem key={href} active={href !== '/' && active}
                                                                   href={href}>
                  {text}
                </MenuItem>)}
              </menu>
            </div>

        }
      </Container>
    </nav>)
}
