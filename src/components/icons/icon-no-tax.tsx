import { ComponentPropsWithoutRef } from 'react'

export function IconNoTax(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l.034.036-1.414 1.414-.036-.034A9.96 9.96 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2zM4 12a8 8 0 0012.905 6.32l-2.375-2.376A2.511 2.511 0 0114 16h-1v2h-2v-2H8.5v-2H14a.5.5 0 00.09-.992L14 13h-4a2.5 2.5 0 01-2.165-3.75L5.679 7.094A7.965 7.965 0 004 12zm8-8c-1.848 0-3.55.627-4.905 1.68L9.47 8.055A2.51 2.51 0 0110 8h1V6h2v2h2.5v2H10a.5.5 0 00-.09.992L10 11h4a2.5 2.5 0 012.165 3.75l2.156 2.155A8 8 0 0012 4z"
                fill="#65744D"
            />
        </svg>
    )
}
