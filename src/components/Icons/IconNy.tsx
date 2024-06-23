import * as React from "react"

import { IconProps } from './IconType'

export function IconNy({ className }: IconProps) {
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
        d="M13.52 2h3.96c1.188 0 1.782 0 2.15.37.37.368.37.962.37 2.15V16.94c0 2.946 0 4.419-.837 4.717-.836.299-1.769-.841-3.634-3.12l-3.96-4.84c-.281-.344-.422-.517-.496-.722C11 12.768 11 12.546 11 12.1V4.52c0-1.188 0-1.782.37-2.15.368-.37.962-.37 2.15-.37z"
        fill="#515D3D"
      />
      <path
        d="M10.48 22H6.52c-1.188 0-1.782 0-2.15-.37C4 21.263 4 20.669 4 19.48V7.06c0-2.946 0-4.419.837-4.717.836-.299 1.769.841 3.634 3.121l3.96 4.839c.281.344.422.517.496.722.073.206.073.428.073.874v7.58c0 1.188 0 1.782-.37 2.15-.368.37-.962.37-2.15.37z"
        fill="#849170"
      />
    </svg>
  )
}
