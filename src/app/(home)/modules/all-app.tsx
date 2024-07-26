import Image from 'next/image'

import { IconChart } from '@/components/icons/IconChart'
import { IconInvestment } from '@/components/icons/IconInvestment'
import { List } from '@/components/list'
import { Section } from '@/components/section'
import { SessionTitle } from '@/components/session-title'
import fig4 from '@/assets/imgs/fig4-paybank.png'

export function HomeAllApp() {
    return (
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
    )
}
