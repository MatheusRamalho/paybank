import { ReactNode } from 'react'

interface ControlCardProps {
    title: string
    description: string
    children: ReactNode
}

export function ControlCard({ title, description, children }: ControlCardProps) {
    return (
        <article className="w-72 p-1 rounded-lg">
            <div className="w-full flex items-center gap-2">
                <div className="size-14 rounded-full bg-secondary-700/40 flex items-center justify-center">
                    {/* <Camera className="size-5 text-primary-500" /> */}
                    {children}
                </div>

                <h6 className="flex-1 font-header font-bold text-base text-black-light"> {title} </h6>
            </div>

            <div className="pl-16">
                <p className="font-body text-base font-light leading-7 text-gray-7"> {description} </p>
            </div>
        </article>
    )
}
