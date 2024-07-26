import { ComponentPropsWithoutRef } from 'react'

export function IconTime(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 11-1.414-1.414zM12 20a7.001 7.001 0 100-14.002A7.001 7.001 0 0012 20zM11 8h2v6h-2V8zM8 1h8v2H8V1z"
                fill="#65744D"
            />
        </svg>
    )
}
