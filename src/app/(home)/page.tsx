import { ScreenLoading } from '@/components/ScreenLoading'

import { HomeAllApp } from './modules/all-app'
import { HomeCard } from './modules/card'
import { HomeControl } from './modules/control'
import { HomePeople } from './modules/people'
import { HomeFuture } from './modules/future'
import { HomeHero } from './modules/hero'
import { HomeInvestiment } from './modules/investiment'
import { HomeJoin } from './modules/join'
import { HomeJoin2 } from './modules/join2'
import { HomeSecurity } from './modules/security'

export default function Home() {
    return (
        <>
            {/* <ScreenLoading /> */}

            <main className="w-full h-full">
                <HomeHero />
                <HomeControl />
                <HomeAllApp />
                <HomeFuture />

                {/* // OLHAR */}
                {/* <HomeSecurity /> */}
                {/* <HomeJoin /> */}

                <HomePeople />
                <HomeInvestiment />
                <HomeCard />
                <HomeJoin2 />
            </main>
        </>
    )
}
