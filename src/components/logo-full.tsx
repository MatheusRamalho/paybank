import { tv, VariantProps } from 'tailwind-variants'

import { LogoSvg } from './svgs/logo'

const logoText = tv({
    base: ['font-header'],
    variants: {
        variant: {
            dark: 'text-black',
            light: 'text-white',
        },
    },
    defaultVariants: {
        variant: 'dark',
    },
})

interface LogoFullProps extends VariantProps<typeof logoText> {}

export function LogoFull({ variant }: LogoFullProps) {
    return (
        <div className="w-fit flex items-center justify-center gap-2">
            <LogoSvg />
            <h6 className={logoText({ variant })}> Paybank. </h6>
        </div>
    )
}
