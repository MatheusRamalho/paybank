import Image from 'next/image'

import { IconSmartphone } from '@/components/icons/IconSmartphone'
import { IconFingerprint } from '@/components/icons/IconFingerprint'
import { IconCard } from '@/components/icons/IconCard'
import { IconShield } from '@/components/icons/IconShield'
import { IconCircle } from '@/components/icon-circle'
import { Section } from '@/components/section'
import { SessionTitle } from '@/components/session-title'
import fig5 from '@/assets/imgs/fig5-paybank.png'
import fig6 from '@/assets/imgs/fig6-paybank.png'
import fig7 from '@/assets/imgs/fig7-paybank.png'
import fig8 from '@/assets/imgs/fig8-paybank.png'
import patterImg from '@/assets/svgs/pattern.svg'

export function HomeSecurity() {
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
                    <IconCircle
                        variant="secondary"
                        className="icon-click hover:cursor-pointer"
                    >
                        <IconSmartphone />
                    </IconCircle>

                    <IconCircle
                        variant="secondary"
                        className="icon-click hover:cursor-pointer"
                    >
                        <IconFingerprint />
                    </IconCircle>

                    <IconCircle
                        variant="secondary"
                        className="icon-click hover:cursor-pointer"
                    >
                        <IconCard />
                    </IconCircle>

                    <IconCircle
                        variant="secondary"
                        className="icon-click hover:cursor-pointer"
                    >
                        <IconShield />
                    </IconCircle>
                </div>

                <div className="mt-3 relative min-h-44">
                    <div className="text-click absolute top-0 left-0 transition duration-500">
                        <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                            {' '}
                            Controle do cartão pelo App{' '}
                        </h4>
                        <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                            {' '}
                            Perdeu o cartão ou suspeita de roubo? Bloqueie e
                            desbloqueie o cartão pelo aplicativo em segundos.
                        </p>
                    </div>

                    <div className="text-click absolute top-0 left-0 transition duration-500">
                        <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                            {' '}
                            Acesso protegido{' '}
                        </h4>
                        <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                            {' '}
                            Uma camada extra de segurança para acessar o
                            aplicativo com reconhecimento facial, impressão
                            digital ou senha.
                        </p>
                    </div>

                    <div className="text-click absolute top-0 left-0 transition duration-500">
                        <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                            {' '}
                            Suporte{' '}
                        </h4>
                        <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                            {' '}
                            Digite sua senha para confirmar transações e reporte
                            qualquer movimentação não autorizada por você.
                        </p>
                    </div>

                    <div className="text-click absolute top-0 left-0 transition duration-500">
                        <h4 className="font-header font-normal text-3xl leading-[120%] text-black-light">
                            {' '}
                            Transações seguras{' '}
                        </h4>
                        <p className="mt-4 font-body text-base font-light leading-6 text-gray-7">
                            {' '}
                            Digite sua senha para confirmar transações e reporte
                            qualquer movimentação não autorizada por você.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex-1 min-h-64 w-full">
                <Image
                    src={fig5}
                    className="img-paybank absolute top-0 left-0 transition duration-700 rounded-lg"
                    alt=""
                    loading="lazy"
                />
                <Image
                    src={fig6}
                    className="img-paybank absolute top-0 left-0 transition duration-700 rounded-lg"
                    alt=""
                    loading="lazy"
                />
                <Image
                    src={fig7}
                    className="img-paybank absolute top-0 left-0 transition duration-700 rounded-lg"
                    alt=""
                    loading="lazy"
                />
                <Image
                    src={fig8}
                    className="img-paybank absolute top-0 left-0 transition duration-700 rounded-lg"
                    alt=""
                    loading="lazy"
                />
                <Image
                    src={patterImg}
                    className="-z-[1] absolute -top-[40%] left-1/2 -translate-x-2/4 translate-y-[0%]"
                    alt=""
                    loading="lazy"
                />
            </div>
        </Section>
    )
}
