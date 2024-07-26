import { ComponentPropsWithoutRef } from 'react'

export function IconArrowUp(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M17.504 9.26L6.764 20 5 18.236l10.739-10.74H6.274V5H20v13.726h-2.496V9.26z"
                fill="#65744D"
            />
        </svg>
    )
}
