import { ReactNode } from "react";
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
}

export function IconCircle({ variant, children }: IconCircleProps) {
    const { base, icon } = iconWrapper({ variant })

    return (
        <div className={base()}>
            <div className={icon()}> {children} </div>
        </div>
    )
}
