import { IconCircle } from "@/components/IconCircle";
import { IconMinus } from "@/components/Icons/IconMinus";
import { IconPlus } from "@/components/Icons/IconPlus";
import { Section } from "@/components/Section";
import { SessionTitle } from "@/components/SessionTitle";

export function HomeInvestiment() {
    return (
        <Section id="section-6" legend="">
            <div className="flex-1 w-full m-4 py-4 px-0">
                <SessionTitle label="investimentos" title="Mais dinheiro na sua" highlight="carteira" />

                <div className="mb-8">
                    <h6 className="text-gray-5 font-medium text-xl mt-8">Para começar, qual o valor você gostaria de investir</h6>

                    <div className="flex items-center justify-between">
                        <h5 className="mt-2 font-bold font-header text-2xl">R$ <span className="money-investment">1000</span> </h5>

                        <div className="flex items-center justify-center gap-3">
                            <div className="button-minus-money">
                                <IconCircle variant="primary">
                                    <IconMinus />
                                </IconCircle>
                            </div>

                            <div className="button-plus-money">
                                <IconCircle variant="primary">
                                    <IconPlus />
                                </IconCircle>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h6 className="text-gray-5 font-medium text-xl mt-4">Quanto tempo deixaria seu dinheiro investido?</h6>

                    <div className="flex items-center justify-between">
                        <h5 className="mt-2 font-bold font-header text-2xl"> <span className="time-investment">12</span> meses</h5>

                        <div className="flex items-center justify-center gap-3">
                            <div className="button-minus-time">
                                <IconCircle variant="primary">
                                    <IconMinus />
                                </IconCircle>
                            </div>

                            <div className="button-plus-time">
                                <IconCircle variant="primary">
                                    <IconPlus />
                                </IconCircle>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 m-4 py-4 px-0">
                <p className="max-w-xl mt-1 font-body text-base font-light leading-7 text-gray-7">
                    Aqui na Paybank, você investe com ao menos <span className="font-bold text-black-lighten">100% do CDI (13.75%&nbsp;a.a.)</span>
                    automaticamente, aqui seu dinheiro rende bem mais que a
                    poupança. Coloque os valores e veja você mesmo.
                </p>

                <div className="border-t-2 border-t-white-darken mt-8">
                    <h6 className="text-gray-5 font-medium text-xl mt-8">na sua carteira terá</h6>
                    <h2 className="font-header font-medium text-5xl uppercase leading-[140%] bg-gradient-g5 bg-clip-text text-transparent my-2">R$ <span className="result-investment">60845.54</span> </h2>
                    <h6 className="text-gray-5 font-medium text-xl">em 1 ano rendendo na PayBank</h6>
                </div>

                <p className="max-w-xl text-center mt-16 font-body text-base font-light leading-7 text-gray-7">
                    Valores utilizados no simulador de investimentos
                    (referentes à data de última atualização - esses
                    valores podem alterar de acordo com o mercado): <br />
                    Data da última atualização: 03/03/23
                </p>
            </div>
        </Section>
    )
}
