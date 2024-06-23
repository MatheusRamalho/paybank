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
import { LinkApple } from "@/components/LinkApple/LinkApple";
import { LinkGooglePay } from "@/components/LinkGooglePay/LinkGooglePlay";

import fig9 from '@/assets/svgs/fig9-paybank.svg'

export function HomeFuture() {
    return (
        <Section id="section-3" legend="">
            <div className="flex-1">
                <SessionTitle label="o futuro" title="É a onda do" highlight="futuro" description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor." />

                <div className="flex items-start gap-3 my-5">
                    <LinkApple url="#" />
                    <LinkGooglePay url="#" />
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

                <div className="bg-icon-white" id="icon1-fig9">
                    <IconSmartphone />
                </div>

                <div className="bg-icon-white" id="icon2-fig9">
                    <IconHeart />
                </div>

                <div className="bg-icon-white" id="icon3-fig9">
                    <IconCard />
                </div>
            </div>
        </Section>
    )
}
