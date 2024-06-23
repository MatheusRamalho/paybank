import * as React from "react"

import { IconProps } from './IconType'

export function IconPlus({ className }: IconProps) {
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
        d="M10.09 22v-8.069H2v-3.862h8.09V2h3.855v8.069H22v3.862h-8.055V22h-3.856z"
        fill="#FBFFF5"
      />
    </svg>
  )
}
