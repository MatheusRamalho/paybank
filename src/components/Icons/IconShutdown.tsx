import { ComponentPropsWithoutRef } from 'react'

export function IconShutdown(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.265 3.807l1.147 1.639a8 8 0 109.176 0l1.147-1.639A9.988 9.988 0 0122 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 014.265-8.193zM11 12V2h2v10h-2z"
                fill="#65744D"
            />
        </svg>
    )
}
