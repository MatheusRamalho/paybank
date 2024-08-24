import { ComponentPropsWithoutRef } from 'react'

export function IconMinus(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M2 14v-4h20v4H2z" fill="#FBFFF5" />
        </svg>
    )
}
