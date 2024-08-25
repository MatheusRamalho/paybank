import Link from 'next/link'

import { LogoFull } from '@/components/LogoFull'
import { SocialMedia } from '@/components/SocialMedia'
import { LinkButton } from '@/components/LinkButton'
import { IconFacebook } from '@/components/IconFacebook'
import { IconInstagram } from '@/components/IconInstagram'
import { IconTwitter } from '@/components/IconTwitter'
import { IconYoutube } from '@/components/IconYoutube'
import { IconGoogleplay } from '@/components/IconGoogleplay'
import { IconApple } from '@/components/IconApple'
import { IconSend } from '@/components/IconSend'

export function Footer() {
    return (
        <footer className="w-full px-2 pt-28 pb-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between flex-col gap-8 sm:flex-row pb-10 border-b-2 border-b-white-darken">
                    <div className="flex-1 flex flex-row items-center justify-start">
                        <LogoFull />
                    </div>

                    <div className="flex-1">
                        <h5 className="font-body font-normal text-black-light text-sm mb-2">
                            Seja o primeiro a ouvir nossas notícias bancárias à
                            vista
                        </h5>

                        <div className="flex flex-row items-center justify-start gap-3">
                            <input
                                className="flex-1 w-full py-3 px-4 bg-white-light border-2 border-white-light rounded-xl text-black-lighten text-base leading-7 font-light focus:border-white-normal"
                                type="text"
                                placeholder="Digite aqui o seu e-mail"
                            />

                            <button className="size-14 border-none rounded-lg bg-gradient-g4 flex items-center justify-center">
                                <IconSend />
                            </button>
                        </div>
                    </div>
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
                        <p className="text-center text-sm text-gray-6">
                            © 2024 PayBank
                        </p>
                    </div>

                    <div className="w-[calc(100% - 32px)] m-4 px-0 float-none md:w-[calc(100% - 32PX)] md:float-left py-0 flex items-center justify-center">
                        <p className="text-center text-sm text-gray-6">
                            Powered by
                            <Link
                                href="http://matheusramalho.dev"
                                className="ml-2 underline"
                                target="_blank"
                            >
                                Matheus Ramalho
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
