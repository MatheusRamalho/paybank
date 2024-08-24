import { ReactNode } from 'react'

interface SocialMediaRootProps {
    children: ReactNode
}

export function SocialMediaRoot({ children }: SocialMediaRootProps) {
    return (
        <ul className="flex-1 m-4 py-4 px-0 flex items-center justify-center mt-6">
            {children}
        </ul>
    )
}
