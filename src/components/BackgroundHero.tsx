import Image from 'next/image'

import bgHero from '@/assets/svgs/bg-hero.svg'

export function BackgroundHero() {
    return (
        <div className="absolute top-1/2 left-0 lg:top-[80%] lg:left-[15%] translate-x-[-0%] -translate-y-2/4 scale-[3] lg:translate-x-[40%] lg:translate-y-[-70%] lg:scale-[2] transition-[1s] duration-[ease]">
            <Image src={bgHero} alt="" />
        </div>
    )
}
