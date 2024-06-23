import * as React from "react"

import { IconProps } from './IconType'

export function IconContactless({ className }: IconProps) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
      <path
        d="M32.733 12c8.478 12.114 8.233 20.468 0 33m-7.369-27.923c6.074 8.708 5.585 13.512 0 22M18 22.154c3.91 5.093 3.42 8.226 0 13.538"
        stroke="#FBFFF5"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
