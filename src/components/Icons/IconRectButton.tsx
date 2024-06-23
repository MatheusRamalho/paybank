import * as React from "react"

import { IconProps } from './IconType'

export function IconRectButton({ className }: IconProps) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
        className={className}

    >
      <path stroke="#DCFD9E" strokeWidth={2} d="M9 18H47V38H9z" />
    </svg>
  )
}
