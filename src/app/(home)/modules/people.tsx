import Image from "next/image";

import { Section } from "@/components/Section";
import { SessionTitle } from "@/components/SessionTitle";
import { IconInstagram } from "@/components/Icons/IconInstagram";

import img1 from '@/assets/imgs/img1-paybank.png'
import img2 from '@/assets/imgs/img2-paybank.png'
import img3 from '@/assets/imgs/img3-paybank.png'

export function HomePeople() {
    return (
        <Section id="section-4" legend="">
            <div className="">
                <div className="flex">
                    <div className="flex-1">
                        <div className="relative block p-6 after:content-[''] after:z-[-1] after:absolute after:-top-[18px] after:left-[18px] after:size-4/5 after:rounded-xl after:border-2 after:border-secondary-700 after:skew-x-[-18deg] -after:transition after:duration-100 hover:after:transform-people-img">
                            <Image src={img1} className="w-full" alt="" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <SessionTitle label="pessoas reais" title="Por trás disso tudo, tem um objetivo:" highlight="pessoas" description="Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis tristique. Vitae consequat vel tortor aenean imperdiet posuere neque. Sollicitudin at at volutpat scelerisque ut aliquet velit tempor." />
                    </div>
                </div>

                <div className="flex mt-20">
                    <div className="flex-1">
                        <div className="relative block p-6 after:content-[''] after:z-[-1] after:absolute after:-top-[18px] after:left-[18px] after:size-4/5 after:rounded-xl after:border-2 after:border-secondary-700 after:skew-x-[-18deg] -after:transition after:duration-100 hover:after:transform-people-img">
                            <Image src={img2} className="w-full" alt="" />
                        </div>

                        <a href="#" className="btn-white flex-start-row mt-4 inline-block">
                            <div className="flex-start-row">
                                <IconInstagram />
                                <h6 className="h7 mx-1">Instagram</h6>
                            </div>
                        </a>

                        <h4 className="mt-3">Por isso, nos siga no <br /> Instagram</h4>
                    </div>

                    <div className="flex-1">
                        <div className="relative block p-6 after:content-[''] after:z-[-1] after:absolute after:-top-[18px] after:left-[18px] after:size-4/5 after:rounded-xl after:border-2 after:border-secondary-700 after:skew-x-[-18deg] -after:transition after:duration-100 hover:after:transform-people-img">
                            <Image src={img3} className="w-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
