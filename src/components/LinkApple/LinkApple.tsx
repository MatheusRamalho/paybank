
import Link from 'next/link'

import { IconApple } from '../Icons/IconApple'

interface LinkAppleProps {
    url: string
}

export function LinkApple({ url }: LinkAppleProps) {
    return (
        <Link
            href={url}
            className="text-black-light bg-white-light py-3 px-6 rounded-lg transition-[0.5s] duration-[ease] hover:shadow-s2 flex flex-row items-center justify-start gap-2"
        >
            <IconApple />
            <h6 className="text-base font-medium leading-[150%]">Apple Pay</h6>
        </Link>
    )
}
