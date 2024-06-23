import * as React from "react"

import { IconProps } from './IconType'

export function IconService({ className }: IconProps) {
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
        d="M3.161 4.47a6.5 6.5 0 018.84-.329 6.5 6.5 0 019.178 9.154l-7.765 7.79a2 2 0 01-2.719.102l-.11-.1-7.764-7.792a6.5 6.5 0 01.34-8.826zm1.414 1.413a4.5 4.5 0 00-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3.001 3.001 0 01-4.244-4.242l2.102-2.103a4.5 4.5 0 00-5.837.19l-.154.145zm8.486 2.828a1 1 0 011.414 0l4.242 4.242.708-.706a4.5 4.5 0 00-6.211-6.51l-.153.146-3.182 3.182a1 1 0 00-.078 1.327l.078.087a1 1 0 001.327.078l.087-.078 1.768-1.768z"
        fill="#65744D"
      />
    </svg>
  )
}
