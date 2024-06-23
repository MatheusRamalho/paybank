import { ReactNode } from "react"

interface ListRootProps {
    children : ReactNode
}

export function ListRoot({ children }: ListRootProps) {
    return (
        <ul className="flex flex-col gap-8 py-2 w-fit"> {children} </ul>
    )
}
