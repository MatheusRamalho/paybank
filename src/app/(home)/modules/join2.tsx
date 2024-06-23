import { Section } from '@/components/Section'
import { BackgroundHero } from '@/components/BackgroundHero'

export function HomeJoin2() {
    return (
        <div className="bg-black-light relative overflow-hidden">

            <BackgroundHero />

            <Section id="section-8" legend="">
                <div className="m-0 lg:my-36 lg:mx-0">
                    <div className="w-2/3 mx-auto m-4 py-4 px-0 flex items-center justify-center flex-col">
                        <h6 className="font-header font-bold text-2xl uppercase leading-[140%] text-center inline-block bg-gradient-g5 bg-clip-text text-transparent"> paybank </h6>

                        <h2 className="mt-2 text-white-normal text-center lg:text-7xl md:text-5xl text-4xl font-header font-normal leading-[110%]">
                            Tudo que você precisa em um só lugar
                        </h2>

                        <p className="mt-6 text-center text-gray-7">
                            We plant a tree for everyone who pre-registers and
                            every new customer. And we're planning to plant millions.
                        </p>

                        <a href="#" className="btn mt-8"> Junte-se a nós </a>
                    </div>
                </div>
            </Section>
        </div>
    )
}
