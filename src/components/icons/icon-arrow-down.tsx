import { ComponentPropsWithoutRef } from 'react'

export function IconArrowDown(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M14.59 16.004L5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2h7.587z"
                fill="#65744D"
            />
        </svg>
    )
}
