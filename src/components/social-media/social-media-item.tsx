import { ReactNode } from 'react'
import Link from 'next/link'

interface SocialMediaItemProps {
    url: string
    children: ReactNode
}

export function SocialMediaItem({ url, children }: SocialMediaItemProps) {
    return (
        <li className="">
            <Link
                className="mx-2 size-12 rounded-full bg-white-light flex items-center justify-center hover:bg-secondary-700/40"
                href={url}
                target="_blank"
            >
                {children}
            </Link>
        </li>
    )
}
