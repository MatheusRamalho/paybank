'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { IconSmartphone } from '@/components/icons/icon-smartphone'
import { IconFingerprint } from '@/components/icons/icon-fingerprint'
import { IconCard } from '@/components/icons/icon-card'
import { IconShield } from '@/components/icons/icon-shield'
import { IconCircle } from '@/components/icon-circle'
import { Section } from '@/components/section'
import { SessionTitle } from '@/components/session-title'
import { PatterSvg } from '@/components/svgs/pattern'

import fig5 from '@/assets/imgs/fig5-paybank.png'
import fig6 from '@/assets/imgs/fig6-paybank.png'
import fig7 from '@/assets/imgs/fig7-paybank.png'
import fig8 from '@/assets/imgs/fig8-paybank.png'

export function HomeSecurity() {
    const [currentTab, setCurrentTab] = useState<string>('tab1')

    function handleChangeTab({ value }: { value: string }) {
        setCurrentTab(value)
    }

    useEffect(() => {
        const tabOrder = ['tab1', 'tab2', 'tab3', 'tab4']
        let currentIndex = 0

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % tabOrder.length
            setCurrentTab(tabOrder[currentIndex])
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <Section id="section-5" legend="">
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
                        onClick={() => handleChangeTab({ value: 'tab1' })}
                    >
                        <IconCircle
                            variant="secondary"
                            className={twMerge(
                                'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                currentTab === 'tab1' && 'bg-secondary-700',
                            )}
                        >
                            <IconSmartphone />
                        </IconCircle>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleChangeTab({ value: 'tab2' })}
                    >
                        <IconCircle
                            variant="secondary"
                            className={twMerge(
                                'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                currentTab === 'tab2' && 'bg-secondary-700',
                            )}
                        >
                            <IconFingerprint />
                        </IconCircle>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleChangeTab({ value: 'tab3' })}
                    >
                        <IconCircle
                            variant="secondary"
                            className={twMerge(
                                'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                currentTab === 'tab3' && 'bg-secondary-700',
                            )}
                        >
                            <IconCard />
                        </IconCircle>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleChangeTab({ value: 'tab4' })}
                    >
                        <IconCircle
                            variant="secondary"
                            className={twMerge(
                                'icon-click group hover:cursor-pointer hover:bg-secondary-700',
                                currentTab === 'tab4' && 'bg-secondary-700',
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
                            Perdeu o cartão ou suspeita de roubo? Bloqueie e
                            desbloqueie o cartão pelo aplicativo em segundos.
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
                            aplicativo com reconhecimento facial, impressão
                            digital ou senha.
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
                            Digite sua senha para confirmar transações e reporte
                            qualquer movimentação não autorizada por você.
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
                            Digite sua senha para confirmar transações e reporte
                            qualquer movimentação não autorizada por você.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex-1 min-h-64 w-full">
                <Image
                    src={fig5}
                    className={twMerge(
                        'absolute top-0 left-0 transition duration-700 rounded-lg',
                        currentTab === 'tab1' ? 'block' : 'hidden',
                    )}
                    alt=""
                    loading="lazy"
                />

                <Image
                    src={fig6}
                    className={twMerge(
                        'absolute top-0 left-0 transition duration-700 rounded-lg',
                        currentTab === 'tab2' ? 'block' : 'hidden',
                    )}
                    alt=""
                    loading="lazy"
                />

                <Image
                    src={fig7}
                    className={twMerge(
                        'absolute top-0 left-0 transition duration-700 rounded-lg',
                        currentTab === 'tab3' ? 'block' : 'hidden',
                    )}
                    alt=""
                    loading="lazy"
                />

                <Image
                    src={fig8}
                    className={twMerge(
                        'absolute top-0 left-0 transition duration-700 rounded-lg',
                        currentTab === 'tab4' ? 'block' : 'hidden',
                    )}
                    alt=""
                    loading="lazy"
                />

                <PatterSvg className="-z-[1] absolute -top-[40%] left-1/2 -translate-x-2/4 translate-y-[0%]" />
            </div>
        </Section>
    )
}
