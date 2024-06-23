import Image from "next/image";

import { IconChart } from "@/components/Icons/IconChart";
import { IconInvestment } from "@/components/Icons/IconInvestment";
import { ListItem } from "@/components/List/ListItem";
import { ListRoot } from "@/components/List/ListRoot";
import { Section } from "@/components/Section";
import { SessionTitle } from "@/components/SessionTitle";

import fig4 from '@/assets/imgs/fig4-paybank.png'

export function HomeAllApp() {
    return (
        <Section id="section-2" legend="">
            <div className="flex-1">
                <SessionTitle label="Feito pensando em você" title="Resolva tudo pelo" highlight="App" description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor." />

                <ListRoot>
                    <ListItem title="Controle total sobre seus gastos" description="Tudo na palma da sua mão">
                        <IconChart />
                    </ListItem>

                    <ListItem title="Acesso a uma carteira de investimentos" description="Tudo na palma da sua mão">
                        <IconInvestment />
                    </ListItem>
                </ListRoot>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <Image src={fig4} className="" alt="" />
            </div>
        </Section>
    )
}
