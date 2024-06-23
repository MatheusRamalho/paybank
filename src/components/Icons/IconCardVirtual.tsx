import * as React from "react"

import { IconProps } from './IconType'

export function IconCardVirtual({ className }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
        className={className}

    >
      <path
        d="M3 10V5a1 1 0 011-1h16a1 1 0 011 1v5M3 10v9a1 1 0 001 1h16a1 1 0 001-1v-9M3 10h18m-7 6h4"
        stroke="#65744D"
        strokeWidth={2}
        strokeDasharray="8 1"
      />
    </svg>
  )
}
