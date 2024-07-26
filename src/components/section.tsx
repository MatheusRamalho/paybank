import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionProps {
    id: string
    legend: string
    children: ReactNode
    className?: string
}

export function Section({ id, legend, children, className }: SectionProps) {
    return (
        <section
            id={id}
            className={twMerge('container mx-auto py-32 px-6', className)}
        >
            <h6 hidden> {legend} </h6>

            <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                {' '}
                {children}{' '}
            </div>
        </section>
    )
}
