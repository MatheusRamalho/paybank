import * as React from "react"

import { IconProps } from './IconType'

export function IconDolar({ className }: IconProps) {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-3.5-6H14a.5.5 0 000-1h-4a2.5 2.5 0 010-5h1V6h2v2h2.5v2H10a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v2h-2v-2H8.5v-2z"
        fill="#65744D"
      />
    </svg>
  )
}
