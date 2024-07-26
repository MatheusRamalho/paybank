/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { M_PLUS_1, Red_Hat_Display } from 'next/font/google'

import '@/styles/globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mPlus1 = M_PLUS_1({
    subsets: ['latin'],
    variable: '--m-plus-1-font',
})

const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    variable: '--red-har-display-font',
})

export const metadata: Metadata = {
    title: 'Paybank | O banco pra chamar de seu.',
    description: 'Paybank | O banco pra chamar de seu.',
    authors: [
        {
            name: 'Matheus Ramalho',
            url: 'https://www.matheusramalho.dev',
        },
    ],
    openGraph: {
        type: 'website',
        url: 'https://payban-mat.vercel.app/',
        title: 'Paybank | O banco pra chamar de seu.',
        description: 'Paybank | O banco pra chamar de seu.',
        siteName: 'Paybank',
        images: [
            {
                url: 'https://payban-mat.vercel.app/assets/imgs/metatag-paybank.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://payban-mat.vercel.app/',
        creator: 'Matheus Ramalho',
        title: 'Paybank | O banco pra chamar de seu.',
        description: 'Paybank | O banco pra chamar de seu.',
        images: 'https://payban-mat.vercel.app/assets/imgs/metatag-paybank.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR">
            <body className={`${redHatDisplay.className} bg-white-dark`}>
                <Header />

                <div className="size-full mt-20"> {children} </div>

                <Footer />
            </body>
        </html>
    )
}
