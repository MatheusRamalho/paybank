import { ComponentPropsWithoutRef } from 'react'

export function IconRectButton(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path stroke="#DCFD9E" strokeWidth={2} d="M9 18H47V38H9z" />
        </svg>
    )
}
