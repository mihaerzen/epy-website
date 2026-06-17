'use client'

import {MenuItem} from "@/components/MenuItem";
import {Container} from "@/components/Container";
import logo from "@/components/Navigation/logo.png";
import logoSmall from "@/components/Navigation/logo-small.png";
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {ChangeEventHandler, useCallback} from "react";
import posthog from 'posthog-js';

const avtoelektrikaRoutes = [
  '/avtoelektrika',
  '/avtodiagnostika',
  '/popravilo-avto-elektrike',
  '/popravilo-avtoradia',
  '/popravilo-avtomobilske-elektronike',
];

export const Navigation = () => {
  const pathname = usePathname()
  const {push} = useRouter();

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
      text: 'AVTOELEKTRIKA',
      href: '/avtoelektrika',
    },
    {
      text: 'CHIP TUNING',
      href: '/chip-tuning',
    },
  ].map((obj) => ({
    ...obj,
    active: obj.href === pathname || (obj.href === '/avtoelektrika' && avtoelektrikaRoutes.includes(pathname))
  }))

  const activeMenuItem = menuItems.find(mi => mi.active);
  const activeMenuItemText = activeMenuItem?.text || '';

  const navigateFromMobileMenu = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
    const href = e.target.value;
    posthog.capture('navigation_clicked', {href, source: 'mobile'});
    push(href);
  }, [push])

  // Both layouts are rendered on the server and toggled with CSS (Tailwind `md:`),
  // so the SSR markup matches the client and there is no hydration layout shift.
  return (
    <nav className="bg-epj-red mb-8 md:mb-8">
      <Container className="relative">
        {/* Mobile: native select navigation */}
        <div className="flex md:hidden flex-row items-center h-[50px] justify-between">
          <div className="flex w-full items-center">
            <div className="max-w-[50px]">
              <Link href="/">
                <Image src={logoSmall} alt="EPJ" width={207} height={57} priority/>
              </Link>
            </div>
          </div>

          <div className="relative text-white text-right h-full flex items-center justify-end">
            <div className="flex items-center gap-1 whitespace-nowrap" aria-hidden="true">
              {activeMenuItemText}
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.5 7.5 10 12l4.5-4.5z"/>
              </svg>
            </div>

            <select
              aria-label="Navigacija"
              className="absolute inset-0 w-full h-full opacity-0 z-20"
              onChange={navigateFromMobileMenu} value={activeMenuItem?.href || pathname}>
              {
                menuItems.map(({text, href}) => <option className="text-right" key={href}
                                                        value={href}>{text}</option>)
              }
            </select>
          </div>
        </div>

        {/* Desktop: inline menu */}
        <div className="hidden md:flex flex-row items-center gap-8 h-[100px]">
          <Link href="/" className="block absolute left-0 -bottom-9 w-[450px] max-w-full">
            <Image src={logo} alt="EPJ" width={450} height={112} loading="eager"/>
          </Link>

          <menu className="absolute flex gap-8 bg-none left-60 bottom-4 items-center">
            {menuItems.map(({text, href, active}) => (
              <MenuItem
                key={href}
                active={href !== '/' && active}
                href={href}
                onClick={() => posthog.capture('navigation_clicked', {href, source: 'desktop'})}
              >
                {text}
              </MenuItem>
            ))}
          </menu>
        </div>
      </Container>
    </nav>)
}
