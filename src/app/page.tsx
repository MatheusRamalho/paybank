'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import { PatterSvg } from '@/components/PatterSvg'
import { LinkButton } from '@/components/LinkButton'
import { ControlCard } from '@/components/ControlCard'
import { SessionTitle } from '@/components/SessionTitle'
import { ScreenLoading } from '@/components/ScreenLoading'
import { BackgroundHero } from '@/components/BackgroundHero'
import { CreditCardVerse } from '@/components/CreditCardVerse'
import { CreditCardFront } from '@/components/CreditCardFront'
import { LinkButtonSpecial } from '@/components/LinkButtonSpecial'
import { PhoneSvg } from '@/components/PhoneSvg'
import { IconCircle } from '@/components/IconCircle'
import { IconVip } from '@/components/IconVip'
import { IconBar } from '@/components/IconBar'
import { IconCard } from '@/components/IconCard'
import { IconPlus } from '@/components/IconPlus'
import { IconSwap } from '@/components/IconSwap'
import { IconChart } from '@/components/IconChart'
import { IconMinus } from '@/components/IconMinus'
import { IconApple } from '@/components/IconApple'
import { IconNoTax } from '@/components/IconNoTax'
import { IconShield } from '@/components/IconShield'
import { IconAccount } from '@/components/IconAccount'
import { IconArrowUp } from '@/components/IconArrowUp'
import { IconDownload } from '@/components/IconDownload'
import { IconInstagram } from '@/components/IconInstagram'
import { IconInvestment } from '@/components/IconInvestment'
import { IconSmartphone } from '@/components/IconSmartphone'
import { IconGoogleplay } from '@/components/IconGoogleplay'
import { IconFingerprint } from '@/components/IconFingerprint'
import { IconCardVirtual } from '@/components/IconCardVirtual'
import { ListItem, ListRoot } from '@/components/List'

import fig4 from '@/assets/imgs/fig4-paybank.png'
import fig10 from '@/assets/imgs/fig10-paybank.png'
import img1 from '@/assets/imgs/img1-paybank.png'
import img2 from '@/assets/imgs/img2-paybank.png'
import img3 from '@/assets/imgs/img3-paybank.png'
import fig5 from '@/assets/imgs/fig5-paybank.png'
import fig6 from '@/assets/imgs/fig6-paybank.png'
import fig7 from '@/assets/imgs/fig7-paybank.png'
import fig8 from '@/assets/imgs/fig8-paybank.png'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [currentTab, setCurrentTab] = useState<string>('tab1')
    const [valueToInvest, setValueToInvest] = useState<number>(1000)
    const [months, setMonths] = useState<number>(12)
    const [yieldingValue, setYieldingValue] = useState<string>('R$ 1.137,50')

    function handleChangeTab({ value }: { value: string }) {
        setCurrentTab(value)
    }

    function handleIncreaseMonth() {
        const increaseMonth = months + 1

        setMonths(increaseMonth)

        calculationOfValueBasedOnInvestmentAndMonths({
            investment: valueToInvest,
            time: increaseMonth,
        })
    }

    function handleDecreaseMonth() {
        if (months <= 1) {
            return setMonths(1)
        }

        const decreaseMonth = months - 1

        setMonths(decreaseMonth)

        calculationOfValueBasedOnInvestmentAndMonths({
            investment: valueToInvest,
            time: decreaseMonth,
        })
    }

    function handleIncreaseValueToInvest() {
        const increaseValue = valueToInvest + 200

        setValueToInvest(increaseValue)

        calculationOfValueBasedOnInvestmentAndMonths({
            investment: increaseValue,
            time: months,
        })
    }

    function handleDecreaseValueToInvest() {
        if (valueToInvest <= 200) {
            return setValueToInvest(200)
        }

        const decreaseValue = valueToInvest - 200

        setValueToInvest(decreaseValue)

        calculationOfValueBasedOnInvestmentAndMonths({
            investment: decreaseValue,
            time: months,
        })
    }

    function calculationOfValueBasedOnInvestmentAndMonths({
        investment,
        time,
    }: {
        investment: number
        time: number
    }) {
        const rate = 1.0794 / 100

        const result = investment * Math.pow(1 + rate, time)
        const resultFormatted = result.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        })

        setYieldingValue(resultFormatted)
    }

    // LOADING
    useEffect(() => {
        const delay = 5000

        const timer = setTimeout(() => {
            setLoading(false)
        }, delay)

        return () => clearTimeout(timer)
    }, [])

    // INVESTIMENT
    useEffect(() => {
        const tabOrder = ['tab1', 'tab2', 'tab3', 'tab4']
        let currentIndex = 0

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % tabOrder.length
            setCurrentTab(tabOrder[currentIndex])
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    if (loading) {
        return <ScreenLoading />
    }

    return (
        <div className="size-full">
            <main className="bg-black-dark relative overflow-hidden py-12">
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
                                Lorem ipsum dolor sit amet consectetur. Et ut
                                tempus facilisis tristique. Vitae consequat vel
                                tortor aenean imperdiet posuere neque.
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

                        <div className="hidden sm:flex flex-1 items-center justify-center">
                            <div className="relative size-96 lg:w-full lg:h-96">
                                <CreditCardVerse className=" absolute top-1/4 right-[15%] -skew-x-12 skew-y-12 rotate-45 animate-card-transform-verse" />
                                <CreditCardFront className="absolute top-[15%] left-[10%] animate-card-transform-front" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section className="container mx-auto py-32 px-6" id="section-1">
                <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                    <div className="flex-1 w-full h-auto">
                        <SessionTitle
                            label="controle total"
                            title="Todo o controle financeiro em um só lugar"
                            description="Veja como você pode cuidar das suas finanças pelo app Paybank de forma segura, rápida e o melhor, no corforto da sua casa."
                        />

                        <div className="hidden sm:block relative size-96 -mt-8">
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
                </div>
            </section>

            <section className="container mx-auto py-32 px-6" id="section-2">
                <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                    <div className="flex-1">
                        <SessionTitle
                            label="Feito pensando em você"
                            title="Resolva tudo pelo"
                            highlight="App"
                            description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor."
                        />

                        <ListRoot>
                            <ListItem
                                title="Controle total sobre seus gastos"
                                description="Tudo na palma da sua mão"
                            >
                                <IconChart />
                            </ListItem>

                            <ListItem
                                title="Acesso a uma carteira de investimentos"
                                description="Tudo na palma da sua mão"
                            >
                                <IconInvestment />
                            </ListItem>
                        </ListRoot>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Image src={fig4} className="" alt="" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-32 px-6" id="section-3">
                <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
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

                        <ListRoot>
                            <ListItem
                                title="Warranty documents"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconArrowUp />
                            </ListItem>

                            <ListItem
                                title="Quick credi"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconCard />
                            </ListItem>

                            <ListItem
                                title="Create a deposit"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconDownload />
                            </ListItem>
                        </ListRoot>
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
                </div>
            </section>

            <section className="container mx-auto py-32 px-6" id="section-4">
                <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
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
                </div>
            </section>

            <section className="container mx-auto py-32 px-6" id="section-5">
                <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                    <div className="flex-1">
                        <SessionTitle
                            label="investimentos"
                            title="A sua segurança é nossa"
                            highlight="prioridade"
                            description="Sua segurança, confiabilidade, controle de suas finanças é o principal compromisso da Paybank."
                        />

                        <div className="mt-6 pb-8 border-b-2 border-b-white-darken overflow-hidden flex flex-row items-center justify-start gap-2">
                            <button
                                type="button"
                                onClick={() =>
                                    handleChangeTab({ value: 'tab1' })
                                }
                            >
                                <IconCircle
                                    variant="secondary"
                                    className={twMerge(
                                        'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                        currentTab === 'tab1' &&
                                            'bg-secondary-700',
                                    )}
                                >
                                    <IconSmartphone />
                                </IconCircle>
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    handleChangeTab({ value: 'tab2' })
                                }
                            >
                                <IconCircle
                                    variant="secondary"
                                    className={twMerge(
                                        'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                        currentTab === 'tab2' &&
                                            'bg-secondary-700',
                                    )}
                                >
                                    <IconFingerprint />
                                </IconCircle>
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    handleChangeTab({ value: 'tab3' })
                                }
                            >
                                <IconCircle
                                    variant="secondary"
                                    className={twMerge(
                                        'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                        currentTab === 'tab3' &&
                                            'bg-secondary-700',
                                    )}
                                >
                                    <IconCard />
                                </IconCircle>
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    handleChangeTab({ value: 'tab4' })
                                }
                            >
                                <IconCircle
                                    variant="secondary"
                                    className={twMerge(
                                        'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                        currentTab === 'tab4' &&
                                            'bg-secondary-700',
                                    )}
                                >
                                    <IconShield />
                                </IconCircle>
                            </button>
                        </div>

                        <div className="mt-3 relative min-h-44">
                            <div
                                className={twMerge(
                                    'absolute top-0 left-0 transition duration-500',
                                    currentTab === 'tab1' ? 'block' : 'hidden',
                                )}
                            >
                                <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                                    Controle do cartão pelo App
                                </h4>

                                <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                                    Perdeu o cartão ou suspeita de roubo?
                                    Bloqueie e desbloqueie o cartão pelo
                                    aplicativo em segundos.
                                </p>
                            </div>

                            <div
                                className={twMerge(
                                    'absolute top-0 left-0 transition duration-500',
                                    currentTab === 'tab2' ? 'block' : 'hidden',
                                )}
                            >
                                <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                                    Acesso protegido
                                </h4>

                                <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                                    Uma camada extra de segurança para acessar o
                                    aplicativo com reconhecimento facial,
                                    impressão digital ou senha.
                                </p>
                            </div>

                            <div
                                className={twMerge(
                                    'absolute top-0 left-0 transition duration-500',
                                    currentTab === 'tab3' ? 'block' : 'hidden',
                                )}
                            >
                                <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                                    Suporte
                                </h4>

                                <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                                    Digite sua senha para confirmar transações e
                                    reporte qualquer movimentação não autorizada
                                    por você.
                                </p>
                            </div>

                            <div
                                className={twMerge(
                                    'absolute top-0 left-0 transition duration-500',
                                    currentTab === 'tab4' ? 'block' : 'hidden',
                                )}
                            >
                                <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                                    Transações seguras
                                </h4>

                                <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                                    Digite sua senha para confirmar transações e
                                    reporte qualquer movimentação não autorizada
                                    por você.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex-1">
                        <div className="h-72 w-full overflow-hidden rounded-lg">
                            <Image
                                src={fig5}
                                className={twMerge(
                                    'transition duration-700 rounded-lg object-cover',
                                    currentTab === 'tab1' ? 'block' : 'hidden',
                                )}
                                alt=""
                                loading="lazy"
                            />

                            <Image
                                src={fig6}
                                className={twMerge(
                                    'transition duration-700 rounded-lg object-cover',
                                    currentTab === 'tab2' ? 'block' : 'hidden',
                                )}
                                alt=""
                                loading="lazy"
                            />

                            <Image
                                src={fig7}
                                className={twMerge(
                                    'transition duration-700 rounded-lg object-cover',
                                    currentTab === 'tab3' ? 'block' : 'hidden',
                                )}
                                alt=""
                                loading="lazy"
                            />

                            <Image
                                src={fig8}
                                className={twMerge(
                                    'transition duration-700 rounded-lg object-cover',
                                    currentTab === 'tab4' ? 'block' : 'hidden',
                                )}
                                alt=""
                                loading="lazy"
                            />
                        </div>

                        <PatterSvg className="hidden sm:block -z-[1] absolute -top-[40%] left-1/2 -translate-x-2/4 translate-y-[0%]" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-32 px-6" id="section-6">
                <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                    <div className="flex-1 w-full m-4 py-4 px-0">
                        <SessionTitle
                            label="investmentos"
                            title="Mais dinheiro na sua"
                            highlight="carteira"
                        />

                        <div className="mb-8">
                            <h6 className="text-gray-5 font-medium text-xl mt-8">
                                Para começar, qual o valor você gostaria de
                                investir
                            </h6>

                            <div className="flex items-center justify-between">
                                <h5 className="mt-2 font-bold font-header text-2xl">
                                    R$ {valueToInvest}
                                </h5>

                                <div className="flex items-center justify-center gap-3">
                                    <button
                                        type="button"
                                        onClick={handleDecreaseValueToInvest}
                                    >
                                        <IconCircle
                                            variant="primary"
                                            className="hover:cursor-pointer hover:bg-secondary-700"
                                        >
                                            <IconMinus />
                                        </IconCircle>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleIncreaseValueToInvest}
                                    >
                                        <IconCircle
                                            variant="primary"
                                            className="hover:cursor-pointer hover:bg-secondary-700"
                                        >
                                            <IconPlus />
                                        </IconCircle>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h6 className="text-gray-5 font-medium text-xl mt-4">
                                Quanto tempo deixaria seu dinheiro investido?
                            </h6>

                            <div className="flex items-center justify-between">
                                <h5 className="mt-2 font-bold font-header text-2xl">
                                    {months} meses
                                </h5>

                                <div className="flex items-center justify-center gap-3">
                                    <button
                                        type="button"
                                        onClick={handleDecreaseMonth}
                                    >
                                        <IconCircle
                                            variant="primary"
                                            className="hover:cursor-pointer hover:bg-secondary-700"
                                        >
                                            <IconMinus />
                                        </IconCircle>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleIncreaseMonth}
                                    >
                                        <IconCircle
                                            variant="primary"
                                            className="hover:cursor-pointer hover:bg-secondary-700"
                                        >
                                            <IconPlus />
                                        </IconCircle>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 m-4 py-4 px-0">
                        <p className="max-w-xl mt-1 font-body text-base font-light leading-7 text-gray-7">
                            Aqui na Paybank, você investe com ao menos{' '}
                            <span className="font-bold text-black-lighten">
                                100% do CDI (13.75%&nbsp;a.a.)
                            </span>
                            automaticamente, aqui seu dinheiro rende bem mais
                            que a poupança. Coloque os valores e veja você
                            mesmo.
                        </p>

                        <div className="border-t-2 border-t-white-darken mt-8">
                            <h6 className="text-gray-5 font-medium text-xl mt-8">
                                na sua carteira terá
                            </h6>

                            <h2 className="font-header font-medium text-7xl uppercase leading-[140%] bg-gradient-g5 bg-clip-text text-transparent my-2">
                                {yieldingValue}
                            </h2>

                            <h6 className="text-gray-5 font-medium text-xl">
                                em 1 ano rendendo na PayBank
                            </h6>
                        </div>

                        <p className="max-w-xl text-center mt-16 font-body text-base font-light leading-7 text-gray-7">
                            Valores utilizados no simulador de investmentos
                            (referentes à data de última atualização - esses
                            valores podem alterar de acordo com o mercado):{' '}
                            <br />
                            Data da última atualização: 03/03/23
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-32 px-6" id="section-7">
                <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                    <div className="flex-1 flex items-center order-2 lg:order-2 mt-20 lg:mt-0">
                        <div className="hidden sm:block size-96 lg:w-[450px] lg:h-96 relative">
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

                        <ListRoot>
                            <ListItem
                                title="Acesso a salas VIP"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconVip />
                            </ListItem>

                            <ListItem
                                title="Cartão virtual"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconCardVirtual />
                            </ListItem>

                            <ListItem
                                title="Create a deposit"
                                description="An obligation in which a third party agrees to repay a debt."
                            >
                                <IconDownload />
                            </ListItem>
                        </ListRoot>
                    </div>
                </div>
            </section>

            <div className="bg-black-light relative overflow-hidden">
                <BackgroundHero />

                <section
                    className="container mx-auto py-32 px-6"
                    id="section-8"
                >
                    <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                        <div className="m-0 lg:my-36 lg:mx-0">
                            <div className="w-full sm:w-2/3 mx-auto m-4 py-4 px-0 flex items-center justify-center flex-col">
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
                    </div>
                </section>
            </div>
        </div>
    )
}
