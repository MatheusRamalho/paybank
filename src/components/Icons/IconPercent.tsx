import { ComponentPropsWithoutRef } from 'react'

export function IconPercent(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M17.5 21a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-11-9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12.571-4.485l1.414 1.414L4.93 20.485l-1.414-1.414L19.071 3.515z"
                fill="#65744D"
            />
        </svg>
    )
}
