const colors = require(`tailwindcss/colors`);

module.exports = {
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'fill-current'
    ],
    theme: {
        extend: {

            // Calculate REM sizes to match design: https://nekocalc.com/px-to-rem-converter
            fontSize: {
                xxs: '0.625rem',    // 10px
                xs: '0.75rem',      // 12px
                sm: '0.875rem',     // 14px
                base: '1rem',       // 16px
                lg: '1.125rem',     // 18px
                xl: '1.25rem',      // 20px
                '2xl': '1.375rem',  // 22px
                '3xl': '1.5rem',    // 24px
                '4xl': '1.875rem',  // 30px
                '5xl': '2.20rem',   // 36px
                '6xl': '2.85rem',      // 48px
                '7xl': '3.75rem',   // 60px
                '8xl': '4.3rem',    // 72px
                '9xl': '5.625rem',  // 90px
                '10xl': '6.25rem',  // 100px
                '11xl': '7.5rem',   // 120px
                '12xl': '8.75rem',  // 140px
            },

            // fontFamily: {
            //     sans: ['"proxima-nova"', 'impact', 'Helvetica', 'sans-serif']
            // },
            
            zIndex: {
                '5': 5,
                '60': 60,
                '70': 70,
                '80': 80,
                '90': 90,
                '100': 100
            },

            lineHeight: {
                display: '0.85'
            },

            colors: {
                // Tailwind themes
                white: '#FFFFFF',
                black: '#171717',
                blue: colors.blue,
                indigo: colors.indigo,
                orange: colors.orange,
                red: colors.red,
                yellow: colors.amber,
                pink: colors.pink,

                // Project colours - https://javisperez.github.io/tailwindcolorshades/#/
                // TBC

                // Social media where 500 is default brand color
                facebook: {
                    50: '#F5F7FA',
                    100: '#EBEEF5',
                    200: '#CED6E5',
                    300: '#B1BDD6',
                    400: '#768BB7',
                    500: '#3B5998',
                    600: '#355089',
                    700: '#23355B',
                    800: '#1B2844',
                    900: '#121B2E',
                },
                twitter: {
                    50: '#F4FAFE',
                    100: '#E8F6FE',
                    200: '#C7E8FC',
                    300: '#A5D9FA',
                    400: '#61BDF6',
                    500: '#1DA1F2',
                    600: '#1A91DA',
                    700: '#116191',
                    800: '#0D486D',
                    900: '#093049',
                },
                pinterest: {
                    50: '#FCF3F4',
                    100: '#F8E6E8',
                    200: '#EFC1C6',
                    300: '#E59CA4',
                    400: '#D15260',
                    500: '#BD081C',
                    600: '#AA0719',
                    700: '#710511',
                    800: '#55040D',
                    900: '#390208',
                },
                instagram: {
                    50: '#FCF5F9',
                    100: '#F9EBF3',
                    200: '#F0CDE0',
                    300: '#E6AECE',
                    400: '#D472A9',
                    500: '#C13584',
                    600: '#AE3077',
                    700: '#74204F',
                    800: '#57183B',
                    900: '#3A1028',
                },
                linkedin: {
                    50: '#F2F8FB',
                    100: '#E6F1F8',
                    200: '#BFDDED',
                    300: '#99C9E1',
                    400: '#4DA0CB',
                    500: '#0077B5',
                    600: '#006BA3',
                    700: '#00476D',
                    800: '#003651',
                    900: '#002436',
                },
            },

            spacing: {
                '88': '22rem',
                '1/2': '50%',
                '1/3': '33.33333%',
                '2/3': '66.66667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.66667%',
                '2/6': '33.33333%',
                '3/6': '50%',
                '4/6': '66.66667%',
                '5/6': '83.33333%',
                '1/12': '8.33333%',
                '2/12': '16.66667%',
                '3/12': '25%',
                '4/12': '33.33333%',
                '5/12': '41.66667%',
                '6/12': '50%',
                '7/12': '58.33333%',
                '8/12': '66.66667%',
                '9/12': '75%',
                '10/12': '83.33333%',
                '11/12': '91.66667%',
                '13/12': '108.33333%',
                '14/12': '116.66667%',
                'full': '100%',
            },

            screens: {
                'sm': '400px',
                'md': '600px',
                'lg': '900px',
                'xl': '1200px',
                '2xl': '1600px',
            },

            minHeight: {
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh'
            },

            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
                'in-out-expo': 'cubic-bezier(0.86, 0, 0.07, 1)',
            },

            transitionProperty: {
                'width': 'width',
                'height': 'height',
            },

            gridTemplateColumns: {
                '24': 'repeat(24, minmax(0, 1fr))',
            },

            gridColumn: {
                'span-13': 'span 13 / span 13',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20 / span 20',
                'span-21': 'span 21 / span 21',
                'span-22': 'span 22 / span 22',
                'span-23': 'span 23 / span 23',
                'span-24': 'span 24 / span 24',
            },

            letterSpacing: {
                tightest: '-0.2rem',
                tighter: '-.05rem',
                tight: '-.025rem',
                normal: '0',
                wide: '.05rem',
                wider: '.1rem',
                widest: '.15rem',
            }

        }
    },
    plugins: [],
}