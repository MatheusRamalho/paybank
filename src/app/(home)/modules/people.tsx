import Image from "next/image";

import { Section } from "@/components/Section";
import { IconInstagram } from "@/components/Icons/IconInstagram";

import img1 from '@/assets/imgs/img1-paybank.png'
import img2 from '@/assets/imgs/img2-paybank.png'
import img3 from '@/assets/imgs/img3-paybank.png'

export function HomePeople() {
    return (
        <Section id="section-4" legend="">
            <div className="">
                <div className="grid-6">
                    <div className="people-paybank p-3">
                        <Image src={img1} alt="" />
                    </div>
                </div>

                <div className="grid-6">
                    <h6 className="uppercase color-gradient h7">pessoas reais</h6>

                    <h3 className="mt-1">
                        Por trás disso tudo, tem um objetivo:
                        <span className="color-gradient">pessoas</span>
                    </h3>

                    <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur. Et ut tempus
                        facilisis tristique. Vitae consequat vel tortor aenean
                        imperdiet posuere neque. Sollicitudin at at volutpat
                        scelerisque ut aliquet velit tempor.
                    </p>
                </div>
            </div>

            <div className="">
                <div className="grid-6">
                    <div className="people-paybank p-3">
                        <Image src={img2} alt="" />
                    </div>

                    <a href="#" className="btn-white flex-start-row mt-4 inline-block">
                        <div className="flex-start-row">
                            <IconInstagram />
                            <h6 className="h7 mx-1">Instagram</h6>
                        </div>
                    </a>

                    <h4 className="mt-3">Por isso, nos siga no <br /> Instagram</h4>
                </div>

                <div className="grid-6">
                    <div className="people-paybank p-2">
                        <Image src={img3} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    )
}
