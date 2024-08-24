'use client'

import { useState } from 'react'

import { IconCircle } from '@/components/icon-circle'
import { IconMinus } from '@/components/icons/icon-minus'
import { IconPlus } from '@/components/icons/icon-plus'
import { Section } from '@/components/section'
import { SessionTitle } from '@/components/session-title'

export function HomeInvestment() {
    const [valueToInvest, setValueToInvest] = useState<number>(1000)
    const [months, setMonths] = useState<number>(12)
    const [yieldingValue, setYieldingValue] = useState<string>('R$ 1.137,50')

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

    return (
        <Section id="section-6" legend="">
            <div className="flex-1 w-full m-4 py-4 px-0">
                <SessionTitle
                    label="investmentos"
                    title="Mais dinheiro na sua"
                    highlight="carteira"
                />

                <div className="mb-8">
                    <h6 className="text-gray-5 font-medium text-xl mt-8">
                        Para começar, qual o valor você gostaria de investir
                    </h6>

                    <div className="flex items-center justify-between">
                        <h5 className="mt-2 font-bold font-header text-2xl">
                            R${' '}
                            <span className="money-investment">
                                {valueToInvest}
                            </span>{' '}
                        </h5>

                        <div className="flex items-center justify-center gap-3">
                            <button
                                className="button-minus-money"
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
                                className="button-plus-money"
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
                            <span className="time-investment">{months}</span>{' '}
                            meses
                        </h5>

                        <div className="flex items-center justify-center gap-3">
                            <button
                                className="button-minus-time"
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
                                className="button-plus-time"
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
                    automaticamente, aqui seu dinheiro rende bem mais que a
                    poupança. Coloque os valores e veja você mesmo.
                </p>

                <div className="border-t-2 border-t-white-darken mt-8">
                    <h6 className="text-gray-5 font-medium text-xl mt-8">
                        na sua carteira terá
                    </h6>

                    <h2 className="font-header font-medium text-7xl uppercase leading-[140%] bg-gradient-g5 bg-clip-text text-transparent my-2">
                        <span className="result-investment">
                            {yieldingValue}
                        </span>{' '}
                    </h2>

                    <h6 className="text-gray-5 font-medium text-xl">
                        em 1 ano rendendo na PayBank
                    </h6>
                </div>

                <p className="max-w-xl text-center mt-16 font-body text-base font-light leading-7 text-gray-7">
                    Valores utilizados no simulador de investmentos (referentes
                    à data de última atualização - esses valores podem alterar
                    de acordo com o mercado): <br />
                    Data da última atualização: 03/03/23
                </p>
            </div>
        </Section>
    )
}
