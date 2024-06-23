import { ControlCard } from "@/components/ControlCard";
import { CreditCardVerse } from "@/components/CreditCard/CreditCardVerse";
import { CreditCardFront } from "@/components/CreditCard/CreditCardFront";
import { IconAccount } from "@/components/Icons/IconAccount";
import { IconBar } from "@/components/Icons/IconBar";
import { IconCardVirtual } from "@/components/Icons/IconCardVirtual";
import { IconNoTax } from "@/components/Icons/IconNoTax";
import { IconSwap } from "@/components/Icons/IconSwap";
import { Section } from "@/components/Section";
import { SessionTitle } from "@/components/SessionTitle";

export function HomeControl() {
    return (
        <Section id="section-1" legend="">
            <div className="flex-1 h-auto">
                <SessionTitle label="controle total" title="Todo o controle financeiro em um só lugar" description="Veja como você pode cuidar das suas finanças pelo app Paybank de forma segura, rápida e o melhor, no corforto da sua casa." />

                <div className="relative size-96 -mt-8">
                    <CreditCardVerse className="absolute top-[10%] right-[5%] skew-x-[20deg] -skew-y-[20deg] animate-card-transform-verse2" />
                    <CreditCardFront className="absolute top-[3%] left-[4%] skew-x-[20deg] -skew-y-[20deg] animate-card-transform-front2" />
                </div>
            </div>

            <div className="flex-1 h-auto flex items-start justify-between gap-10">
                <div className="flex-1 flex flex-col gap-y-20">
                    <ControlCard title="Acompanhe sua conta" description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver.">
                        <IconAccount />
                    </ControlCard>

                    <ControlCard title="Investimentos" description="Diversas opções de investimentos, de acordo com o seu perfil de investidor.">
                        <IconBar />
                    </ControlCard>

                    <ControlCard title="Câmbio" description="Diversas opções de investimentos, de acordo com o seu perfil de investidor.">
                        <IconSwap />
                    </ControlCard>
                </div>

                <div className="flex-1 flex flex-col gap-y-20">
                    <ControlCard title="Sem taxas" description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver.">
                        <IconNoTax />
                    </ControlCard>

                    <ControlCard title="Cartão virtual" description="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.">
                        <IconCardVirtual />
                    </ControlCard>

                    <a href="#" className="btn-freq mt-6 ml-3">Perguntas <br />Frequentes</a>
                </div>
            </div>
        </Section>
    )
}
