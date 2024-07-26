import { IconAccount } from '@/components/icons/IconAccount'
import { IconBar } from '@/components/icons/IconBar'
import { IconCardVirtual } from '@/components/icons/IconCardVirtual'
import { IconNoTax } from '@/components/icons/IconNoTax'
import { IconSwap } from '@/components/icons/IconSwap'
import { Section } from '@/components/section'
import { SessionTitle } from '@/components/session-title'
import { LinkButtonSpecial } from '@/components/link-button-special'
import { ControlCard } from '@/components/control-card'
import { CreditCardFront } from '@/components/credit-card-front'
import { CreditCardVerse } from '@/components/credit-card-verse'

export function HomeControl() {
    return (
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
    )
}
