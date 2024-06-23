import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['var(--m-plus-1-font)', 'ui-sans-serif', 'system-ui'],
                body: ['var(--red-har-display-font)', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                'primary-300': '#849170',
                'primary-500': '#65744D',
                'primary-700': '#515D3D',

                'secondary-300': '#DCFD9E',
                'secondary-500': '#D2F988',
                'secondary-700': '#A9C96B',

                'black-light': '#1A1C15',
                'black-lighten': '#2F3329',
                'black-normal': '#12140D',
                'black-dark': '#060802',
                'black-darken': '#090F1D',

                'white-light': '#FBFFF5',
                'white-normal': '#F2F7E9',
                'white-dark': '#E8EDDF',
                'white-darken': '#CCD2C1',

                'gray-1': '#252626',
                'gray-2': '#353536',
                'gray-3': '#4C4C4D',
                'gray-4': '#646465',
                'gray-5': '#7C7C7D',
                'gray-6': '#949494',
                'gray-7': '#9EA0A3',

                'red-normal': '#F03D3D',
                'red-dark': '#d03333',
                'red-light': '#f05454',

                'green-normal': '#0BB07B',
                'green-dark': '#28bb49',
                'green-light': '#50e170',

                'yellow-normal': '#FFCE52',
                'yellow-dark': '#d9b043',
                'yellow-light': '#ffd76b',
            },
            backgroundImage: {
                'gradient-g1': 'linear-gradient(225deg, #65744D 8.12%, #A9C96B 92.21%)',
                'gradient-g2': 'linear-gradient(180deg, rgba(243, 250, 230, 0.7) 0%, #F3FAE6 100%)',
                'gradient-g3': 'linear-gradient(217.08deg, #BBE768 2.12%, #496022 98.96%)',
                'gradient-g4': 'linear-gradient(217.08deg, #A9C96B 2.12%, #515D3D 98.96%)',
                'gradient-g5': 'linear-gradient(224.78deg, #65744D 8.12%, #A9C96B 92.21%)',
                'gradient-g6': 'linear-gradient(217.08deg, rgba(187, 231, 104, 0.6) 2.12%, rgba(73, 96, 34, 0.6) 98.96%)',
                'gradient-g7': 'linear-gradient(225deg, rgba(62, 79, 29, 0.9) 2.12%, rgba(89, 102, 67, 0.9) 98.96%)',

                'btn': "url('/assets/svgs/btn.svg')",
                'btn-arrow': "url('/assets/svgs/btn-arrow.svg')",
            },
            boxShadow: {
                s1: '0px 7px 32px rgba(92, 118, 46, 0.6)',
                s2: '0px 3px 16px rgba(44, 64, 10, 0.2)',
                s3: '12px 32px 72px rgba(78, 89, 59, 0.4)',
                s4: '0px 7px 56px rgba(92, 118, 46, 0.4)',
            },
        },
    },
    plugins: [],
}

export default config
