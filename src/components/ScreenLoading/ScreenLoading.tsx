import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import bgHero from '@/assets/svgs/bg-hero.svg'

export function ScreenLoading() {
    return (
        <div className="z-50 fixed inset-0 flex flex-col items-center justify-center w-full h-screen bg-black-dark pointer-events-none">
            {/* TODO: transform: translate3d(5px, 0, 0); */}
            <div className="relative size-20">
                {/* TODO: animation: logo-part-1 4s ease-in-out forwards; */}
                <div className="absolute top-[20%] left-[12%] w-8 h-10 rounded-md bg-gradient-g2 skew-x-[-20deg]" />
                {/* TODO: animation: logo-part-2 4s ease-in-out forwards; */}
                <div className="absolute top-0 left-[18%] w-14 h-9 rounded-md bg-gradient-g3 skew-x-[-20deg]" />
            </div>

            {/* TODO: animation: bar-loader 4s ease forwards; */}
            <div className={twMerge('relative w-32 h-[0.063rem] bg-white/10 mt-2',
                'after:content-[""] after:absolute after:top-0 after:left-0 after:w-1/2 after:h-full after:bg-primary-300')}
            />

            <Image src={bgHero} className="z-[-1] absolute top-1/2 left-[55%] opacity-50 -translate-x-2/4 -translate-y-2/4 scale-150" alt="" />
        </div>
    )
}
