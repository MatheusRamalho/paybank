import * as React from "react"

export function Logo() {
    return (
        <svg
            width={57}
            height={37}
            viewBox="0 0 57 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width={24.6308}
                height={30.618}
                rx={2.50026}
                transform="matrix(1 0 -.42388 .90572 12.979 8.512)"
                fill="#2F3329"
            />
            
            <rect
                width={39.8391}
                height={26.6804}
                rx={2.50026}
                transform="matrix(1 0 -.42388 .90572 16.8 0)"
                fill="url(#paint0_linear_600_2271)"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_600_2271"
                    x1={35.4284}
                    y1={-1.23873}
                    x2={17.1503}
                    y2={34.8735}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BBE768" />
                    <stop offset={1} stopColor="#496022" />
                </linearGradient>
            </defs>
        </svg>
    )
}
