import { ComponentPropsWithoutRef } from 'react'

export function IconArrowUp1(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M13.028 7.828V20h-2.056V7.828l-5.518 5.364L4 11.778 12 4l8 7.778-1.454 1.414-5.518-5.364z"
                fill="#65744D"
            />
        </svg>
    )
}
