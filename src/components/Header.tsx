'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { LogoFull } from './logo-full'

export function Header() {
    const headerRef = useRef<HTMLElement>(null)
    const linksMenuRef = useRef<NodeListOf<Element> | null>(null)
    const [active, setActive] = useState<boolean>(false)

    function handleScroll() {
        const nav = headerRef.current
        const linksMenu = linksMenuRef.current

        if (nav) {
            if (window.scrollY >= 1000) {
                setActive(true)
            } else {
                setActive(false)
            }
        }

        if (linksMenu) {
            linksMenu.forEach((item) => {
                if (window.scrollY >= 1000) {
                    item.classList.add('link-black')
                } else {
                    item.classList.remove('link-black')
                }
            })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            ref={headerRef}
            className={twMerge(
                'z-40 fixed top-0 w-full h-20 px-5 opacity-100 border-b backdrop-blur-md',
                active
                    ? 'border-b-white/90 bg-white/50'
                    : 'border-b-white/10 bg-black-dark/50',
            )}
        >
            <nav className=" h-[inherit] container mx-auto flex items-center justify-between">
                <LogoFull variant={active ? 'dark' : 'light'} />

                <div className="">
                    <ul className="flex flex-row items-center justify-end gap-6">
                        <li className="">
                            <Link
                                href="#"
                                className={twMerge(
                                    'hidden md:block',
                                    active
                                        ? 'text-black-lighten'
                                        : 'text-white-light',
                                )}
                            >
                                Features
                            </Link>
                        </li>

                        <li className="ml-3">
                            <Link
                                href="#"
                                className={twMerge(
                                    'hidden md:block',
                                    active
                                        ? 'text-black-lighten'
                                        : 'text-white-light',
                                )}
                            >
                                Nosso App
                            </Link>
                        </li>

                        <li className="ml-3">
                            <Link
                                href="#"
                                className="relative inline-block text-white py-3 px-7 text-center rounded-xl shadow-s1 text-base font-medium bg-gradient-g1"
                            >
                                Junte-se a nós
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
