import Image from "next/image";

import { IconFingerprint } from "@/components/Icons/IconFingerprint";
import { IconShield } from "@/components/Icons/IconShield";
import { IconSmartphone } from "@/components/Icons/IconSmartphone";
import { BackgroundHero } from "@/components/BackgroundHero";

import fig10 from '@/assets/imgs/fig10-paybank.png'
import { CreditCardVerse } from "@/components/CreditCard/CreditCardVerse"
import { CreditCardFront } from "@/components/CreditCard/CreditCardFront";

export function HomeHero() {
    return (
        <div className="bg-black-dark relative overflow-hidden py-12">
            <BackgroundHero />

            <section className="container mx-auto py-32 px-6 h-auto md:h-[95vh]" id="">
                <div className="size-full flex items-center justify-center gap-10">
                    <div className="flex-1">
                        <h6 className="font-header font-bold text-2xl uppercase leading-[140%] inline-block bg-gradient-g5 bg-clip-text text-transparent relative after:content-[''] after:absolute after:top-1/2 after:-right-[40%] after:w-16 after:h-[2px] after:bg-primary-500">uma nova era</h6>

                        <h1 className="text-white-normal lg:text-7xl md:text-5xl text-4xl font-header font-normal leading-[110%]">
                            O banco <span className="icon1-hero">&nbsp;</span>
                            pra chamar de <span className="icon2-hero">&nbsp;</span> <span className="color-gradient">seu</span>
                        </h1>

                        <p className="font-body text-base font-light leading-7 text-gray-7 mt-6 max-w-lg">
                            Lorem ipsum dolor sit amet consectetur. Et ut tempus
                            facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque.
                        </p>

                        <a href="#" className="btn mt-8">Junte-se a nós</a>

                        <div className="mt-8">
                            <Image src={fig10} className="max-w-44 md:max-w-56 transition-all" alt="" loading="lazy" />
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full h-96">
                            <CreditCardFront className="absolute top-[15%] left-[10%] transform-card-front-hero animate-card-transform-front" />
                            <CreditCardVerse className="absolute top-1/4 right-[15%] -skew-x-12 skew-y-12 rotate-45 animate-card-transform-verse" />

                            <div className="z-10 absolute top-[60%] left-0 w-12 min-w-12 h-12 rounded-full mr-2 bg-white-light flex items-center justify-center transition-all">
                                <IconSmartphone />
                            </div>

                            <div className="z-10 absolute top-[20%] left-3/4 w-12 min-w-12 h-12 rounded-full mr-2 bg-white-light flex items-center justify-center transition-all">
                                <IconFingerprint />
                            </div>

                            <div className="z-10 absolute top-[90%] left-[55%] w-12 min-w-12 h-12 rounded-full mr-2 bg-white-light flex items-center justify-center transition-all">
                                <IconShield />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
