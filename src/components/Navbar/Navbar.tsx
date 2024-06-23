import Link from 'next/link'

import { LogoFull } from '../LogoFull'

export function Navbar() {
    return (
        <header className="z-40 fixed top-0 w-full h-20 px-5 opacity-100 border-b border-b-rgba(255, 255, 255, 0.1) bg-[rgba(6, 8, 2, 0.5)] backdrop-blur-md">
            <nav className=" h-[inherit] container mx-auto flex items-center justify-between">
                <LogoFull />

                <div className="">
                    <ul className="flex flex-row items-center justify-end gap-6">
                        <li className="">
                            <Link href="#" className="hidden md:block link-menu"> Features </Link>
                        </li>

                        <li className="ml-3">
                            <Link href="#" className="hidden md:block link-menu"> Nosso App </Link>
                        </li>

                        <li className="ml-3">
                            <Link href="#" className="relative inline-block text-white py-3 px-7 text-center rounded-xl shadow-s1 text-base font-medium bg-gradient-g1"> Junte-se a nós </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
