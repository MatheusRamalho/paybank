import Image from "next/image";

import { IconArrowUp } from "@/components/Icons/IconArrowUp";
import { IconCard } from "@/components/Icons/IconCard";
import { IconDownload } from "@/components/Icons/IconDownload";
import { IconHeart } from "@/components/Icons/IconHeart";
import { IconSmartphone } from "@/components/Icons/IconSmartphone";
import { ListItem } from "@/components/List/ListItem";
import { ListRoot } from "@/components/List/ListRoot";
import { Section } from "@/components/Section";
import { SessionTitle } from "@/components/SessionTitle";
import { IconCircle } from "@/components/IconCircle";
import { IconApple } from "@/components/Icons/IconApple";
import { IconGoogleplay } from "@/components/Icons/IconGoogleplay";
import { LinkButton } from "@/components/LinkButton";

import fig9 from '@/assets/svgs/fig9-paybank.svg'

export function HomeFuture() {
    return (
        <Section id="section-3" legend="">
            <div className="flex-1">
                <SessionTitle label="o futuro" title="É a onda do" highlight="futuro" description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor." />

                <div className="flex items-start gap-3 my-5">
                    <LinkButton variant="white" name="Google Play" url="#"> <IconGoogleplay /> </LinkButton>
                    <LinkButton variant="white" name="Apple Play" url="#"> <IconApple /> </LinkButton>
                </div>

                <ListRoot>
                    <ListItem title="Warranty documents" description="An obligation in which a third party agrees to repay a debt.">
                        <IconArrowUp />
                    </ListItem>

                    <ListItem title="Quick credi" description="An obligation in which a third party agrees to repay a debt.">
                        <IconCard />
                    </ListItem>

                    <ListItem title="Create a deposit" description="An obligation in which a third party agrees to repay a debt.">
                        <IconDownload />
                    </ListItem>
                </ListRoot>
            </div>

            <div className="flex-1 relative flex items-center justify-center px-5">
                <Image src={fig9} alt="" />

                <IconCircle variant="secondary" className="absolute top-[30%] left-[20%] transition-all">
                    <IconSmartphone />
                </IconCircle>

                <IconCircle variant="secondary" className="absolute top-[85%] right-[35%] transition-all">
                    <IconHeart />
                </IconCircle>

                <IconCircle variant="secondary" className="absolute top-[5%] right-[20%] transition-all">
                    <IconCard />
                </IconCircle>
            </div>
        </Section>
    )
}
