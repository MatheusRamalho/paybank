import { ReactNode } from 'react'

interface ListItemProps {
    title: string
    description: string
    children: ReactNode
}

export function ListItem({ title, description, children }: ListItemProps) {
    return (
        <li className="flex items-center justify-center gap-2">
            <div className="size-14 rounded-full bg-secondary-700/40 flex items-center justify-center">
                {/* <Camera className="size-5 text-primary-500" /> */}
                {children}
            </div>

            <div className="flex-1 flex flex-col gap-1">
                <h6 className="font-header font-bold text-base text-black-light">
                    {' '}
                    {title}{' '}
                </h6>
                <p className="font-body text-base font-light leading-7 text-gray-7">
                    {' '}
                    {description}{' '}
                </p>
            </div>
        </li>
    )
}
