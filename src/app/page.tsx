import Image from 'next/image'

// import { ScreenLoading } from '@/components/ScreenLoading'
import { List } from '@/components/list'
import { Section } from '@/components/section'
import { LinkButton } from '@/components/link-button'
import { ControlCard } from '@/components/control-card'
import { SessionTitle } from '@/components/session-title'
import { BackgroundHero } from '@/components/background-hero'
import { CreditCardFront } from '@/components/credit-card-front'
import { CreditCardVerse } from '@/components/credit-card-verse'
import { LinkButtonSpecial } from '@/components/link-button-special'
import { PhoneSvg } from '@/components/svgs/phone'
import { IconVip } from '@/components/icons/icon-vip'
import { IconBar } from '@/components/icons/icon-bar'
import { IconCard } from '@/components/icons/icon-card'
import { IconSwap } from '@/components/icons/icon-swap'
import { IconChart } from '@/components/icons/icon-chart'
import { IconApple } from '@/components/icons/icon-apple'
import { IconNoTax } from '@/components/icons/icon-no-tax'
import { IconAccount } from '@/components/icons/icon-account'
import { IconArrowUp } from '@/components/icons/icon-arrow-up'
import { IconDownload } from '@/components/icons/icon-download'
import { IconInstagram } from '@/components/icons/icon-instagram'
import { IconGoogleplay } from '@/components/icons/icon-googleplay'
import { IconInvestment } from '@/components/icons/icon-investment'
import { IconCardVirtual } from '@/components/icons/icon-card-virtual'

import fig4 from '@/assets/imgs/fig4-paybank.png'
import fig10 from '@/assets/imgs/fig10-paybank.png'
import img1 from '@/assets/imgs/img1-paybank.png'
import img2 from '@/assets/imgs/img2-paybank.png'
import img3 from '@/assets/imgs/img3-paybank.png'

import { HomeInvestiment } from './modules/investiment'
import { HomeSecurity } from './modules/security'

export default function Home() {
    return (
        <>
            {/* <ScreenLoading /> */}

            <main className="w-full h-full">
                {/* HERO */}
                <div className="bg-black-dark relative overflow-hidden py-12">
                    <BackgroundHero />

                    <section
                        className="container mx-auto py-32 px-6 h-auto lg:h-[95vh]"
                        id=""
                    >
                        <div className="size-full flex items-center justify-center flex-col gap-10 lg:flex-row">
                            <div className="flex-1">
                                <h6 className="font-header font-bold text-xl uppercase leading-[140%] inline-block bg-gradient-g5 bg-clip-text text-transparent relative after:content-[''] after:absolute after:top-1/2 after:-right-1/2 after:w-16 after:h-[2px] after:bg-primary-500">
                                    uma nova era
                                </h6>

                                <h1 className="text-white-normal text-6xl lg:text-7xl font-header font-normal leading-[110%]">
                                    O banco pra chamar de{' '}
                                    <span className="bg-gradient-g5 bg-clip-text text-transparent">
                                        seu
                                    </span>
                                </h1>

                                <p className="font-body text-base font-light leading-7 text-gray-7 mt-6 max-w-lg">
                                    Lorem ipsum dolor sit amet consectetur. Et
                                    ut tempus facilisis tristique. Vitae
                                    consequat vel tortor aenean imperdiet
                                    posuere neque.
                                </p>

                                <div className="my-10">
                                    <LinkButtonSpecial
                                        name="Junte-se a nós"
                                        url="#"
                                    />
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
                                    <CreditCardFront className="absolute top-[15%] left-[10%] animate-card-transform-front" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CONTROL */}
                <Section id="section-1" legend="">
                    <div className="flex-1 w-full h-auto">
                        <SessionTitle
                            label="controle total"
                            title="Todo o controle financeiro em um só lugar"
                            description="Veja como você pode cuidar das suas finanças pelo app Paybank de forma segura, rápida e o melhor, no corforto da sua casa."
                        />

                        <div className="relative size-96 -mt-8">
                            <CreditCardVerse className="absolute top-[10%] right-[5%] skew-x-[20deg] -skew-y-[20deg] animate-card-transform-verse2" />
                            <CreditCardFront className="absolute top-[3%] left-[4%] skew-x-[20deg] -skew-y-[20deg] animate-card-transform-front2" />
                        </div>
                    </div>

                    <div className="flex-1 w-full h-auto flex items-start justify-between gap-10 flex-col md:flex-row">
                        <div className="flex-1 flex flex-col gap-y-6 md:gap-y-20 justify-start w-full">
                            <ControlCard
                                title="Acompanhe sua conta"
                                description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."
                            >
                                <IconAccount />
                            </ControlCard>

                            <ControlCard
                                title="Investimentos"
                                description="Diversas opções de investimentos, de acordo com o seu perfil de investidor."
                            >
                                <IconBar />
                            </ControlCard>

                            <ControlCard
                                title="Câmbio"
                                description="Diversas opções de investimentos, de acordo com o seu perfil de investidor."
                            >
                                <IconSwap />
                            </ControlCard>
                        </div>

                        <div className="flex-1 flex flex-col gap-y-6 md:gap-y-20 w-full">
                            <ControlCard
                                title="Sem taxas"
                                description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."
                            >
                                <IconNoTax />
                            </ControlCard>

                            <ControlCard
                                title="Cartão virtual"
                                description="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."
                            >
                                <IconCardVirtual />
                            </ControlCard>

                            <LinkButtonSpecial
                                variant="secondary"
                                name="Perguntas Frequentes"
                                url="#"
                            />
                        </div>
                    </div>
                </Section>

                {/* ALL APP */}
                <Section id="section-2" legend="">
                    <div className="flex-1">
                        <SessionTitle
                            label="Feito pensando em você"
                            title="Resolva tudo pelo"
                            highlight="App"
                            description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor."
                        />

                        <List.Root>
                            <List.Item
                                title="Controle total sobre seus gastos"
                                description="Tudo na palma da sua mão"
                            >
                                <IconChart />
                            </List.Item>

                            <List.Item
                                title="Acesso a uma carteira de investimentos"
                                description="Tudo na palma da sua mão"
                            >
                                <IconInvestment />
                            </List.Item>
                        </List.Root>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Image src={fig4} className="" alt="" />
                    </div>
                </Section>

                {/* FUTURE */}
                <Section id="section-3" legend="">
                    <div className="flex-1">
                        <SessionTitle
                            label="o futuro"
                            title="É a onda do"
                            highlight="futuro"
                            description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor."
                        />

                        <div className="flex items-start gap-3 my-5">
                            <LinkButton
                                variant="white"
                                name="Google Play"
                                url="#"
                            >
                                {' '}
                                <IconGoogleplay />{' '}
                            </LinkButton>
                            <LinkButton
                                variant="white"
                                name="Apple Play"
                                url="#"
                            >
                                {' '}
                                <IconApple />{' '}
                            </LinkButton>
                        </div>

                        <List.Root>
                            <List.Item
                                title="Warranty documents"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconArrowUp />
                            </List.Item>

                            <List.Item
                                title="Quick credi"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconCard />
                            </List.Item>

                            <List.Item
                                title="Create a deposit"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconDownload />
                            </List.Item>
                        </List.Root>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center px-5">
                        <PhoneSvg />

                        {/* <IconCircle
                            variant="secondary"
                            className="absolute top-[30%] left-[20%] transition-all"
                        >
                            <IconSmartphone />
                        </IconCircle>

                        <IconCircle
                            variant="secondary"
                            className="absolute top-[85%] right-[35%] transition-all"
                        >
                            <IconHeart />
                        </IconCircle>

                        <IconCircle
                            variant="secondary"
                            className="absolute top-[5%] right-[20%] transition-all"
                        >
                            <IconCard />
                        </IconCircle> */}
                    </div>
                </Section>

                {/* PEOPLE */}
                <Section id="section-4" legend="">
                    <div className="">
                        <div className="flex gap-10 flex-col lg:flex-row">
                            <div className="flex-1">
                                <div className="relative block p-6 after:content-[''] after:z-[-1] after:absolute after:-top-3 after:left-12 after:size-4/5 after:rounded-xl after:border-2 after:border-secondary-700 after:skew-x-[-18deg] -after:transition after:duration-100 hover:after:transition-all hover:after:duration-1000 hover:after:size-4/6">
                                    <Image
                                        src={img1}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <SessionTitle
                                    label="pessoas reais"
                                    title="Por trás disso tudo, tem um objetivo:"
                                    highlight="pessoas"
                                    description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor."
                                />
                            </div>
                        </div>

                        <div className="flex gap-10 flex-col lg:flex-row mt-20">
                            <div className="flex-1">
                                <div className="relative block p-6 after:content-[''] after:z-[-1] after:absolute after:-top-3 after:left-12 after:size-4/5 after:rounded-xl after:border-2 after:border-secondary-700 after:skew-x-[-18deg] -after:transition after:duration-100 hover:after:transition-all hover:after:duration-1000 hover:after:size-4/6">
                                    <Image
                                        src={img2}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>

                                <LinkButton
                                    variant="white"
                                    name="Instagram"
                                    url="#"
                                >
                                    {' '}
                                    <IconInstagram />{' '}
                                </LinkButton>

                                <h4 className="mt-3 text-2xl font-semibold">
                                    Por isso, nos siga no <br /> Instagram
                                </h4>
                            </div>

                            <div className="flex-1">
                                <div className="relative block p-6 after:content-[''] after:z-[-1] after:absolute after:-top-3 after:left-12 after:size-4/5 after:rounded-xl after:border-2 after:border-secondary-700 after:skew-x-[-18deg] -after:transition after:duration-100 hover:after:transition-all hover:after:duration-1000 hover:after:size-4/6">
                                    <Image
                                        src={img3}
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SECURITY */}
                <HomeSecurity />

                {/* INVESTIMENT */}
                <HomeInvestiment />

                {/* CARD */}
                <Section id="section-7" legend="">
                    <div className="flex-1 flex items-center order-2 lg:order-2 mt-20 lg:mt-0">
                        <div className="size-96 lg:w-[450px] lg:h-96 relative">
                            <CreditCardVerse className="absolute top-[5%] right-[10%] -skew-x-12 skew-y-12" />
                            <CreditCardFront className="absolute top-[-5%] left-[10%] skew-x-12 -skew-y-12" />
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2">
                        <SessionTitle
                            label="um cartão pra chamar de seu"
                            title="Minimalista. Simples. Eficiente."
                            description="Revid Card features an RFID transponder in its core that enables you to pay with a touch-free wave"
                        />

                        <List.Root>
                            <List.Item
                                title="Acesso a salas VIP"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconVip />
                            </List.Item>

                            <List.Item
                                title="Cartão virtual"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconCardVirtual />
                            </List.Item>

                            <List.Item
                                title="Create a deposit"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconDownload />
                            </List.Item>
                        </List.Root>
                    </div>
                </Section>

                {/* JOIN */}
                <div className="bg-black-light relative overflow-hidden">
                    <BackgroundHero />

                    <Section id="section-8" legend="">
                        <div className="m-0 lg:my-36 lg:mx-0">
                            <div className="w-2/3 mx-auto m-4 py-4 px-0 flex items-center justify-center flex-col">
                                <h6 className="font-header font-bold text-2xl uppercase leading-[140%] text-center inline-block bg-gradient-g5 bg-clip-text text-transparent">
                                    paybank
                                </h6>

                                <h2 className="mt-2 text-white-normal text-center lg:text-7xl md:text-5xl text-4xl font-header font-normal leading-[110%]">
                                    Tudo que você precisa em um só lugar
                                </h2>

                                <p className="mt-6 text-center text-gray-7 mb-8">
                                    We plant a tree for everyone who
                                    pre-registers and every new customer. And
                                    were planning to plant millions.
                                </p>

                                <LinkButtonSpecial
                                    name="Junte-se a nós"
                                    url="#"
                                />
                            </div>
                        </div>
                    </Section>
                </div>
            </main>
        </>
    )
}
