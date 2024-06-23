import { ButtonHTMLAttributes } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
    base: [
        'rounded-lg px-6 py-3 text-sm font-semibold outline-none shadow-sm',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
        'active:opacity-80',
    ],
    variants: {
        variant: {
            primary: [
                'text-white bg-gradient-g1',
                'hover:bg-gradient-g2',
            ],
            outline: [
                'border border-secondary-700 text-secondary-700',
                'hover:bg-secondary-500 hover:text-primary-700',
                'dark:border-secondary-700 dark:text-secondary-300 dark:hover:bg-secondary-700',
            ],
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export function Button({ variant, className, ...props }: ButtonProps) {
    return (
        <button {...props} className={button({ variant, className })}></button>
    )
}
