import * as React from "react"

import { IconProps } from './IconType'

export function IconArrowRigth({ className }: IconProps) {
    return (
        <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        className={className}

        >
            <path
                d="M22.418 6.861l10.695 10.695m0 0L22.66 28.008m10.452-10.452H2"
                stroke="#FBFFF5"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
