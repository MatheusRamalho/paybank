import * as React from "react"

import { IconProps } from './IconType'

export function IconSend({ className }: IconProps) {
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
        d="M4 12.939h5.55V11.06H4V2.47a.475.475 0 01.227-.404.457.457 0 01.458-.007l17.076 9.53A.466.466 0 0122 12a.475.475 0 01-.24.411l-17.075 9.53a.457.457 0 01-.624-.178.475.475 0 01-.061-.232v-8.592z"
        fill="#FBFFF5"
      />
    </svg>
  )
}
