import Image from 'next/image'

import { IconSmartphone } from '@/components/Icons/IconSmartphone'
import { IconFingerprint } from '@/components/Icons/IconFingerprint'
import { IconCard } from '@/components/Icons/IconCard'
import { IconShield } from '@/components/Icons/IconShield'
import { IconCircle } from '@/components/IconCircle'
import { Section } from '@/components/Section'
import { SessionTitle } from '@/components/SessionTitle'

import fig5 from '@/assets/imgs/fig5-paybank.png'
import fig6 from '@/assets/imgs/fig6-paybank.png'
import fig7 from '@/assets/imgs/fig7-paybank.png'
import fig8 from '@/assets/imgs/fig8-paybank.png'
import patterImg from '@/assets/svgs/pattern.svg'

export function HomeSecurity() {
    return (
        <Section id="section-5" legend="">
            <div className="flex-1">
                <SessionTitle label="investimentos" title="A sua segurança é nossa" highlight="prioridade" description="Sua segurança, confiabilidade, controle de suas finanças é o principal compromisso da Paybank." />

                <div className="mt-3 pb-4 bb-gray hidden flex-start-row">
                    <IconCircle className='icon-click'>
                        <IconSmartphone />
                    </IconCircle>

                    <IconCircle className='icon-click'>
                        <IconFingerprint />
                    </IconCircle>

                    <IconCircle className='icon-click'>
                        <IconCard />
                    </IconCircle>

                    <IconCircle className='icon-click'>
                        <IconShield />
                    </IconCircle>
                </div>

                <div className="mt-3 relative min-h-44">
                    <div className="text-click">
                        <h4 className=""> Controle do cartão pelo App </h4>
                        <p className="mt-2"> Perdeu o cartão ou suspeita de roubo? Bloqueie e desbloqueie o cartão pelo aplicativo em segundos.</p>
                    </div>

                    <div className="text-click">
                        <h4 className=""> Acesso protegido </h4>
                        <p className="mt-2"> Uma camada extra de segurança para acessar o aplicativo com reconhecimento facial, impressão digital ou senha.</p>
                    </div>

                    <div className="text-click">
                        <h4 className=""> Suporte </h4>
                        <p className="mt-2"> Digite sua senha para confirmar transações e reporte qualquer movimentação não autorizada por você.</p>
                    </div>

                    <div className="text-click">
                        <h4 className=""> Transações seguras </h4>
                        <p className="mt-2"> Digite sua senha para confirmar transações e reporte qualquer movimentação não autorizada por você.</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative min-h-64">
                <Image src={fig5} className="img-paybank" alt="" loading="lazy" />
                <Image src={fig6} className="img-paybank" alt="" loading="lazy" />
                <Image src={fig7} className="img-paybank" alt="" loading="lazy" />
                <Image src={fig8} className="img-paybank" alt="" loading="lazy" />
                <Image src={patterImg} className="pattern-paybank" alt="" loading="lazy" />
            </div>
        </Section>
    )
}
