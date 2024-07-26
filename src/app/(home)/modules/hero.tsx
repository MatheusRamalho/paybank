import Image from 'next/image'

import { IconFingerprint } from '@/components/icons/IconFingerprint'
import { IconShield } from '@/components/icons/IconShield'
import { IconSmartphone } from '@/components/icons/IconSmartphone'
import { IconCircle } from '@/components/icon-circle'
import { LinkButtonSpecial } from '@/components/link-button-special'
import { BackgroundHero } from '@/components/background-hero'
import { CreditCardFront } from '@/components/credit-card-front'
import { CreditCardVerse } from '@/components/credit-card-verse'
import fig10 from '@/assets/imgs/fig10-paybank.png'

export function HomeHero() {
    return (
        <div className="bg-black-dark relative overflow-hidden py-12">
            <BackgroundHero />

            <section
                className="container mx-auto py-32 px-6 h-auto md:h-[95vh]"
                id=""
            >
                <div className="size-full flex items-center justify-center flex-col gap-10 lg:flex-row">
                    <div className="flex-1">
                        <h6 className="font-header font-bold text-xl uppercase leading-[140%] inline-block bg-gradient-g5 bg-clip-text text-transparent relative after:content-[''] after:absolute after:top-1/2 after:-right-1/2 after:w-16 after:h-[2px] after:bg-primary-500">
                            uma nova era
                        </h6>

                        <h1 className="text-white-normal text-6xl lg:text-7xl font-header font-normal leading-[110%]">
                            O banco <span className="icon1-hero">&nbsp;</span>
                            pra chamar de{' '}
                            <span className="icon2-hero">&nbsp;</span>{' '}
                            <span className="color-gradient">seu</span>
                        </h1>

                        <p className="font-body text-base font-light leading-7 text-gray-7 mt-6 max-w-lg">
                            Lorem ipsum dolor sit amet consectetur. Et ut tempus
                            facilisis tristique. Vitae consequat vel tortor
                            aenean imperdiet posuere neque.
                        </p>

                        <div className="my-10">
                            <LinkButtonSpecial name="Junte-se a nós" url="#" />
                        </div>

                        <div className="">
                            <Image
                                src={fig10}
                                className="max-w-44 md:max-w-56 transition-all"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative size-96 lg:w-full lg:h-96">
                            <CreditCardVerse className="absolute top-1/4 right-[15%] -skew-x-12 skew-y-12 rotate-45 animate-card-transform-verse" />
                            <CreditCardFront className="absolute top-[15%] left-[10%] transform-card-front-hero animate-card-transform-front" />

                            <IconCircle
                                variant="secondary"
                                className="z-10 absolute top-[60%] left-0 transition-all"
                            >
                                <IconSmartphone />
                            </IconCircle>

                            <IconCircle
                                variant="secondary"
                                className="z-10 absolute top-[20%] left-3/4 transition-all"
                            >
                                <IconFingerprint />
                            </IconCircle>

                            <IconCircle
                                variant="secondary"
                                className="z-10 absolute top-[90%] left-[55%] transition-all"
                            >
                                <IconShield />
                            </IconCircle>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
