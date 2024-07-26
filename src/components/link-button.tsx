import { AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

const links = tv({
    base: [
        'w-fit px-7 py-4 rounded-xl outline-none shadow-sm',
        'font-medium text-base text-center',
        'flex flex-row items-center justify-start gap-2',
        'transition-[0.5s] duration-[ease]',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
        'active:opacity-80',
    ],
    variants: {
        variant: {
            primary: ['text-white bg-gradient-g1', 'hover:shadow-s1'],
            outline: [
                'border-2 border-secondary-700 text-secondary-700',
                'hover:bg-secondary-700 hover:text-primary-700 hover:shadow-s2',
                'dark:border-secondary-700 dark:text-secondary-300 dark:hover:bg-secondary-700',
            ],
            white: ['text-black-light bg-white-light', 'hover:shadow-s2'],
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface LinkButtonProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof links> {
    url: string
    name: string
    children?: ReactNode
}

export function LinkButton({
    variant,
    className,
    name,
    url,
    children,
    ...props
}: LinkButtonProps) {
    return (
        <Link className={links({ variant, className })} href={url} {...props}>
            {' '}
            {children} {name}{' '}
        </Link>
    )
}
