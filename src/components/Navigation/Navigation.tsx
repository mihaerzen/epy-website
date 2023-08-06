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

import style from './Navigation.css';

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
              <div className="flex items-center">
                <div className="max-w-[50px]">
                  <Link href="/">
                    <Image src={logoSmall} alt="EPJ" width={207} height={57}/>
                  </Link>
                </div>
              </div>

              <select
                className={`relative text-white bg-transparent z-20 text-right ${style.Select}`}
                onChange={handleChange} value={pathname}>
                {
                  menuItems.map(({text, href, active}) => <option className="text-right" key={href}
                                                                  value={href}>{text}</option>)
                }
              </select>
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
