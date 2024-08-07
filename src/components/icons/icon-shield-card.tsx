import { ComponentPropsWithoutRef } from 'react'

export function IconShieldCard(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M11 2l7.298 2.28a1 1 0 01.702.955V7h2a1 1 0 011 1v8a1 1 0 01-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 013 13.374V5.235a1 1 0 01.702-.954L11 2zm0 2.094L5 5.97v7.404a4 4 0 001.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 01-1-1V8a1 1 0 011-1h7V5.97l-6-1.876zM11 12v3h9v-3h-9zm0-2h9V9h-9v1z"
                fill="#65744D"
            />
        </svg>
    )
}
