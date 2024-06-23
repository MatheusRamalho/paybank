import Link from 'next/link'

import { IconFacebook } from '../Icons/IconFacebook'
import { IconInstagram } from '../Icons/IconInstagram'
import { IconTwitter } from '../Icons/IconTwitter'
import { IconYoutube } from '../Icons/IconYoutube'
import { LogoFull } from '../LogoFull'
import { IconNy } from '../Icons/IconNy'
import { LinkGooglePay } from '../LinkGooglePay/LinkGooglePlay'
import { LinkApple } from '../LinkApple/LinkApple'
import { Newsletter } from '../Newsletter/Newsletter'
import { SocialMediaRoot } from '../SocialMedia/SocialMediaRoot'
import { SocialMediaItem } from '../SocialMedia/SocialMediaItem'

export function Footer() {
    return (
        <footer className="w-full px-2 pt-28 pb-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between flex-col lg:flex-row pb-10 border-b-2 border-b-white-darken">
                    <div className="flex-1 flex flex-row items-center justify-start">
                        <LogoFull />
                    </div>

                    <div className="flex-1 text-center">
                        <h5 className=""> Be the first to hearour sight banking news </h5>
                    </div>

                    <Newsletter />
                </div>

                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div className="flex-1">
                        <h5 className="">
                            Stay connect with anyone & anywhere
                        </h5>
                    </div>

                    <SocialMediaRoot>
                        <SocialMediaItem url="#"> <IconFacebook /> </SocialMediaItem>
                        <SocialMediaItem url="#"> <IconInstagram /> </SocialMediaItem>
                        <SocialMediaItem url="#"> <IconTwitter /> </SocialMediaItem>
                        <SocialMediaItem url="#"> <IconYoutube /> </SocialMediaItem>
                    </SocialMediaRoot>

                    <div className="flex-1 flex flex-row items-center justify-end gap-3">
                        <LinkApple url="#" />
                        <LinkGooglePay url="#" />
                    </div>
                </div>

                <div className="flex items-center justify-between flex-col md:flex-row">
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
