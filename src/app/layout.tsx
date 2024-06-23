import type { Metadata } from 'next'
import { M_PLUS_1, Red_Hat_Display } from 'next/font/google'

import '@/styles/globals.css'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const mPlus1 = M_PLUS_1({
    subsets: ['latin'],
    variable: "--m-plus-1-font",
})

const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    variable: "--red-har-display-font",
})

export const metadata: Metadata = {
    title: 'Paybank | O banco pra chamar de seu.',
    description: 'Paybank | O banco pra chamar de seu.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR">
            <body className={`${redHatDisplay.className} bg-white-dark`}>
                <Navbar />

                <div className="size-full mt-20"> {children} </div>

                <Footer />
            </body>
        </html>
    )
}
