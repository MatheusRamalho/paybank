import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const iconWrapper = tv({
    slots: {
        base: 'size-14 rounded-full flex items-center justify-center',
        icon: 'size-6'
    },
    variants: {
        variant: {
            primary: {
                base: 'bg-secondary-700/40',
                icon: 'text-primary-500',
            },
            secondary: {
                base: 'bg-white border border-gray-50',
                icon: 'text-secondary-700',
            },
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

interface IconCircleProps extends VariantProps<typeof iconWrapper> {
    children: ReactNode
    className?: string
}

export function IconCircle({ variant, children, className }: IconCircleProps) {
    const { base, icon } = iconWrapper({ variant })

    return (
        <div className={twMerge(base(), className)}>
            <div className={icon()}> {children} </div>
        </div>
    )
}
