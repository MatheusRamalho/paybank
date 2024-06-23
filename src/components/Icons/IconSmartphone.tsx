import * as React from "react"

import { IconProps } from './IconType'

export function IconSmartphone({ className }: IconProps) {
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
        d="M7 4v16h10V4H7zM6 2h12a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm6 15a1 1 0 110 2 1 1 0 010-2z"
        fill="#65744D"
      />
    </svg>
  )
}
