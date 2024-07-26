import { ComponentPropsWithoutRef } from 'react'

export function IconMastercard(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <ellipse
                cx={18.5}
                cy={28}
                rx={15.5}
                ry={16}
                fill="#E8EDDF"
                fillOpacity={0.2}
            />
            <ellipse
                cx={37.5}
                cy={28}
                rx={15.5}
                ry={16}
                fill="#E8EDDF"
                fillOpacity={0.5}
            />
        </svg>
    )
}
