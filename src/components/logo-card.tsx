import { ComponentPropsWithoutRef } from 'react'

export function LogoCard(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                width={22.6486}
                height={28.1539}
                rx={3}
                transform="matrix(1 0 -.42388 .90572 12.934 20.827)"
                fill="#E8EDDF"
            />
            <rect
                width={36.6329}
                height={27.8455}
                rx={3}
                transform="matrix(1 0 -.42388 .90572 17.852 10)"
                fill="#FBFFF5"
            />
        </svg>
    )
}
