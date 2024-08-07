import { ComponentPropsWithoutRef } from 'react'

export function IconGoogleplay(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4 1.734a1 1 0 01.501.135l16.004 9.266a1 1 0 010 1.73L4.501 22.13A.999.999 0 013 21.266V2.734a1 1 0 011-1zm8.292 11.68l-4.498 4.498 5.699-3.3-1.2-1.2-.001.002zM5 6.118v11.76l5.88-5.88L5 6.118zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.58h.001zm-7.49-4.336l4.5 4.5 1.199-1.2-5.699-3.3z"
                fill="#65744D"
            />
        </svg>
    )
}
