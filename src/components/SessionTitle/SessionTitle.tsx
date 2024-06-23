interface SessionTitleProps {
    label: string
    title: string
    highlight?: string
    description?: string
}

export function SessionTitle({ label, title, highlight, description }: SessionTitleProps) {
    return (
        <div className="py-2 mb-6 flex flex-col gap-2">
            <h6 className="font-header font-medium text-lg uppercase leading-[140%] bg-gradient-g5 bg-clip-text text-transparent"> {label} </h6>

            <h3 className="font-header font-normal text-6xl leading-[120%]">
                {title}

                <span className="bg-gradient-g1 bg-clip-text text-transparent"> {highlight} </span>
            </h3>

            {description && <p className="mt-2 font-body text-base font-light leading-7 text-gray-7"> {description} </p> }
        </div>
    )
}
