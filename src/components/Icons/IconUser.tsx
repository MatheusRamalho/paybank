import * as React from "react"

import { IconProps } from './IconType'

export function IconUser({ className }: IconProps) {
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
        d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 015 5v3a5 5 0 01-4.783 4.995L12 15a5 5 0 01-5-5V7a5 5 0 014.783-4.995L12 2zm0 2a3 3 0 00-2.995 2.824L9 7v3a3 3 0 005.995.176L15 10V7a3 3 0 00-3-3z"
        fill="#65744D"
      />
    </svg>
  )
}
