import { ComponentPropsWithoutRef } from 'react'

export function IconEuro(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-1.95-9H15v2h-4.95a2.5 2.5 0 004.064 1.41l1.7 1.133A4.5 4.5 0 018.028 13H7v-2h1.027a4.5 4.5 0 017.788-2.543L14.114 9.59A2.5 2.5 0 0010.05 11z"
                fill="#65744D"
            />
        </svg>
    )
}
