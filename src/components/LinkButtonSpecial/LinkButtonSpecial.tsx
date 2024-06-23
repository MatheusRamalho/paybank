import { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

const links = tv({
    base: [
        'w-fit relative px-7 py-4 rounded-xl outline-none bg-gradient-g1 shadow-s4',
        'font-medium text-base text-center text-white',
        'transition-[0.5s] duration-[ease]',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
        'hover:opacity-80',
    ],
    variants: {
        variant: {
            primary: [
                'pr-20 pl-16',
                'after:content-[""] after:absolute after:top-1/2 after:left-4 after:-translate-y-2/4 after:size-6 after:bg-btn after:bg-cover after:bg-center after:bg-no-repeat after:animate-btn-icon-rotate',
                'before:content-[""] before:absolute before:top-1/2 before:-right-5 before:w-14 before:h-10 before:border-l-2 before:border-l-white/25 before:bg-[length:1.5rem] before:bg-btn-arrow before:bg-center before:bg-no-repeat before:-translate-x-2/4 before:-translate-y-2/4',
                'hover:before:transform-btn-icon',
            ],
            secondary: [
                'px-16 -skew-x-12',
                'before:content-[""] before:absolute before:-top-3 before:left-3 before:size-full before:border-2 before:border-secondary-700 before:rounded-xl',
                'hover:before:-top-4 hover:before:left-4',
            ],
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface LinkButtonSpecialProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof links> {
    url: string
    name: string
}

export function LinkButtonSpecial({ variant, className, url, name, ...props }: LinkButtonSpecialProps) {
    return (
        <Link
            className={links({ variant, className })}
            href={url}
            {...props}
        > {name} </Link>
    )
}
