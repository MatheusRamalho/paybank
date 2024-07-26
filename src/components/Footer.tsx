import Link from 'next/link'

import { IconFacebook } from './icons/icon-facebook'
import { IconInstagram } from './icons/icon-instagram'
import { IconTwitter } from './icons/icon-twitter'
import { IconYoutube } from './icons/icon-youtube'
import { LogoFull } from './logo-full'
import { IconNy } from './icons/icon-ny'
import { Newsletter } from './newsletter'
import { SocialMedia } from './social-media'
import { LinkButton } from './link-button'
import { IconGoogleplay } from './icons/icon-googleplay'
import { IconApple } from './icons/icon-apple'

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
                        <h5 className="font-body font-normal text-black-light text-base">
                            Fique conectado com qualquer pessoa e em qualquer
                            lugar
                        </h5>
                    </div>

                    <SocialMedia.Root>
                        <SocialMedia.Item url="#">
                            <IconFacebook />
                        </SocialMedia.Item>

                        <SocialMedia.Item url="#">
                            <IconInstagram />
                        </SocialMedia.Item>

                        <SocialMedia.Item url="#">
                            <IconTwitter />
                        </SocialMedia.Item>

                        <SocialMedia.Item url="#">
                            <IconYoutube />
                        </SocialMedia.Item>
                    </SocialMedia.Root>

                    <div className="flex-1 flex flex-row items-center justify-end gap-3">
                        <LinkButton variant="white" name="Google Play" url="#">
                            <IconGoogleplay />
                        </LinkButton>

                        <LinkButton variant="white" name="Apple Play" url="#">
                            <IconApple />
                        </LinkButton>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-col md:flex-row mt-10 lg:mt-0">
                    <div className="w-[calc(100% - 32px)] m-4 px-0 float-none md:w-[calc(100% - 32PX)] md:float-left py-0">
                        <p className="text-center">© 2022 PayBank.com</p>
                    </div>

                    <div className="w-[calc(100% - 32px)] m-4 px-0 float-none md:w-[calc(100% - 32PX)] md:float-left py-0 flex items-center justify-center">
                        <p className="text-center">Powered by Násser Yousef:</p>

                        <Link
                            href="http://nasseryousef.com.br/"
                            className="ml-2"
                            target="_blank"
                        >
                            <IconNy />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
