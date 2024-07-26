import { IconSend } from './icons/IconSend'

export function Newsletter() {
    return (
        <div className="flex-1">
            <h5 className="font-body font-normal text-black-light text-sm mb-2">
                {' '}
                Seja o primeiro a ouvir nossas notícias bancárias à vista{' '}
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
    )
}
