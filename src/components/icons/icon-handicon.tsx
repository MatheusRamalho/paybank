import { ComponentPropsWithoutRef } from 'react'

export function IconHandicon(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M5 9a1 1 0 011 1 6.97 6.97 0 014.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 014.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 015 20H2a1 1 0 01-1-1v-9a1 1 0 011-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 00-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001-.034-.078a2.5 2.5 0 00-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 006.001 12zM4 11H3v7h1v-7zm14-6a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm-7-5a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
                fill="#65744D"
            />
        </svg>
    )
}
