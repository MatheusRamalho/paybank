import { twMerge } from "tailwind-merge"

import { LogoCard } from "../LogoCard"

interface CreditCardFrontProps {
    className?: string
}

export function CreditCardFront({ className }: CreditCardFrontProps) {
    return (

        <div className={twMerge('w-56 h-80 md:w-64 md:h-96 rounded-2xl border-2 border-secondary-700/95 bg-gradient-g6 shadow-s3 backdrop-blur-lg', className)}
            style={{ transform: 'rotateX(-15deg) rotateY(- 50deg) rotate(-30deg)' }}
        >
            <div className="absolute top-3 left-3">
                <LogoCard />
            </div>

            <div className="absolute bottom-6 left-4">
                <h6 className="text-white-light uppercase font-header font-medium text-sm leading-[150%] mb-4"> Matheus RAMALHO </h6>

                <div className="relative w-fit flex">
                    <div className="size-9 rounded-full bg-white-dark opacity-20" />
                    <div className="size-9 rounded-full bg-white-dark opacity-50 absolute left-6" />
                </div>
            </div>
        </div>
    )
}
