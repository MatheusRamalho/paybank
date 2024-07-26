
import { CreditCardFront } from '@/components/credit-card-front'
import { CreditCardVerse } from '@/components/credit-card-verse'
import { IconCardVirtual } from '@/components/icons/IconCardVirtual'
import { IconDownload } from '@/components/icons/IconDownload'
import { IconVip } from '@/components/icons/IconVip'
import { List } from '@/components/list'
import { Section } from '@/components/section'
import { SessionTitle } from '@/components/session-title'

export function HomeCard() {
    return (
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
    )
}
