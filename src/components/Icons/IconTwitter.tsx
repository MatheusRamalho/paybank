import { ComponentPropsWithoutRef } from 'react'

export function IconTwitter(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M15.3 5.55a2.9 2.9 0 00-2.9 2.847l-.028 1.575a.599.599 0 01-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 01.034.993L7.793 18.17c.947.06 1.846.017 2.592-.13 4.718-.943 7.855-4.493 7.855-10.349 0-.478-1.012-2.14-2.94-2.14zm-4.9 2.81a4.9 4.9 0 018.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.31-3.268.651-8.02-.42-9.382-1.842.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538H10.4z"
                fill="#65744D"
            />
        </svg>
    )
}
