import { twMerge } from 'tailwind-merge'

interface CreditCardVerseProps {
    className?: string
}

export function CreditCardVerse({ className }: CreditCardVerseProps) {
    return (
        <div
            className={twMerge(
                'w-56 h-80 md:w-64 md:h-96 rounded-2xl border-2 border-[#4E5C37] bg-gradient-g7 shadow-s3 backdrop-blur-lg',
                className,
            )}
        >
            <div className="w-16 h-full bg-secondary-700/50 rounded-l-2xl" />

            <div className="absolute top-6 right-4">
                <div className="relative w-fit flex">
                    <div className="size-9 rounded-full bg-white-dark opacity-20" />
                    <div className="size-9 rounded-full bg-white-dark opacity-50 absolute left-6" />
                </div>

                <h6 className="text-white-light uppercase font-header font-medium text-sm leading-[150%] mt-8">
                    {' '}
                    •••• 4859{' '}
                </h6>
            </div>
        </div>
    )
}
