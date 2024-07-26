import Image from 'next/image'

import { IconArrowUp } from '@/components/icons/IconArrowUp'
import { IconCard } from '@/components/icons/IconCard'
import { IconDownload } from '@/components/icons/IconDownload'
import { IconHeart } from '@/components/icons/IconHeart'
import { IconSmartphone } from '@/components/icons/IconSmartphone'
import { List } from '@/components/list'
import { Section } from '@/components/section'
import { SessionTitle } from '@/components/session-title'
import { IconCircle } from '@/components/icon-circle'
import { IconApple } from '@/components/icons/IconApple'
import { IconGoogleplay } from '@/components/icons/IconGoogleplay'
import { LinkButton } from '@/components/link-button'
import fig9 from '@/assets/svgs/fig9-paybank.svg'

export function HomeFuture() {
    return (
        <Section id="section-3" legend="">
            <div className="flex-1">
                <SessionTitle
                    label="o futuro"
                    title="É a onda do"
                    highlight="futuro"
                    description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor."
                />

                <div className="flex items-start gap-3 my-5">
                    <LinkButton variant="white" name="Google Play" url="#">
                        {' '}
                        <IconGoogleplay />{' '}
                    </LinkButton>
                    <LinkButton variant="white" name="Apple Play" url="#">
                        {' '}
                        <IconApple />{' '}
                    </LinkButton>
                </div>

                <List.Root>
                    <List.Item
                        title="Warranty documents"
                        description="An obligation in which a third party agrees to repay a debt."
                    >
                        <IconArrowUp />
                    </List.Item>

                    <List.Item
                        title="Quick credi"
                        description="An obligation in which a third party agrees to repay a debt."
                    >
                        <IconCard />
                    </List.Item>

                    <List.Item
                        title="Create a deposit"
                        description="An obligation in which a third party agrees to repay a debt."
                    >
                        <IconDownload />
                    </List.Item>
                </List.Root>
            </div>

            <div className="flex-1 relative flex items-center justify-center px-5">
                <Image src={fig9} alt="" />

                <IconCircle
                    variant="secondary"
                    className="absolute top-[30%] left-[20%] transition-all"
                >
                    <IconSmartphone />
                </IconCircle>

                <IconCircle
                    variant="secondary"
                    className="absolute top-[85%] right-[35%] transition-all"
                >
                    <IconHeart />
                </IconCircle>

                <IconCircle
                    variant="secondary"
                    className="absolute top-[5%] right-[20%] transition-all"
                >
                    <IconCard />
                </IconCircle>
            </div>
        </Section>
    )
}
