import Link from 'next/link'

import { IconFacebook } from './Icons/IconFacebook'
import { IconInstagram } from './Icons/IconInstagram'
import { IconTwitter } from './Icons/IconTwitter'
import { IconYoutube } from './Icons/IconYoutube'
import { LogoFull } from './LogoFull'
import { IconNy } from './Icons/IconNy'
import { Newsletter } from './Newsletter/Newsletter'
import { SocialMediaRoot } from './SocialMedia/SocialMediaRoot'
import { SocialMediaItem } from './SocialMedia/SocialMediaItem'
import { LinkButton } from './LinkButton'
import { IconGoogleplay } from './Icons/IconGoogleplay'
import { IconApple } from './Icons/IconApple'

export function Footer() {
    return (
        <footer className="w-full px-2 pt-28 pb-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between flex-col gap-8 sm:flex-row pb-10 border-b-2 border-b-white-darken">
                    <div className="flex-1 flex flex-row items-center justify-start">
                        <LogoFull />
                    </div>

                    <Newsletter />
                </div>

                <div className="flex items-center justify-between flex-col lg:flex-row pt-10 lg:pt-0">
                    <div className="flex-1">
                        <h5 className="font-body font-normal text-black-light text-base"> Fique conectado com qualquer pessoa e em qualquer lugar </h5>
                    </div>

                    <SocialMediaRoot>
                        <SocialMediaItem url="#"> <IconFacebook /> </SocialMediaItem>
                        <SocialMediaItem url="#"> <IconInstagram /> </SocialMediaItem>
                        <SocialMediaItem url="#"> <IconTwitter /> </SocialMediaItem>
                        <SocialMediaItem url="#"> <IconYoutube /> </SocialMediaItem>
                    </SocialMediaRoot>

                    <div className="flex-1 flex flex-row items-center justify-end gap-3">
                        <LinkButton variant="white" name="Google Play" url="#"> <IconGoogleplay /> </LinkButton>
                        <LinkButton variant="white" name="Apple Play" url="#"> <IconApple /> </LinkButton>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-col md:flex-row mt-10 lg:mt-0">
                    <div className="w-[calc(100% - 32px)] m-4 px-0 float-none md:w-[calc(100% - 32PX)] md:float-left py-0">
                        <p className="text-center">© 2022 PayBank.com</p>
                    </div>

                    <div className="w-[calc(100% - 32px)] m-4 px-0 float-none md:w-[calc(100% - 32PX)] md:float-left py-0 flex items-center justify-center">
                        <p className="text-center"> Powered by Násser Yousef: </p>

                        <Link href="http://nasseryousef.com.br/" className="ml-2" target="_blank">
                            <IconNy />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
