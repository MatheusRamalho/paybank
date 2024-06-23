import Link from 'next/link'

import { IconGoogleplay } from '../Icons/IconGoogleplay'

interface LinkGooglePayProps {
    url: string
}

export function LinkGooglePay({ url }: LinkGooglePayProps) {
    return (
        <Link
            href={url}
            className="text-black-light bg-white-light py-3 px-6 rounded-lg transition-[0.5s] duration-[ease] hover:shadow-s2 flex flex-row items-center justify-start gap-2"
        >
            <IconGoogleplay />
            <span className="text-base font-medium leading-[150%]"> Google Pay </span>
        </Link>
    )
}
