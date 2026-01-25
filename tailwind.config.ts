import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Primary Colors
                brand: {
                    red: {
                        DEFAULT: '#C62828',
                        50: '#FFEBEE',
                        100: '#FFCDD2',
                        200: '#EF9A9A',
                        300: '#E57373',
                        400: '#EF5350',
                        500: '#C62828',
                        600: '#B71C1C',
                        700: '#A31515',
                        800: '#8B0000',
                        900: '#6D0000',
                    },
                    green: {
                        DEFAULT: '#2E7D32',
                        50: '#E8F5E9',
                        100: '#C8E6C9',
                        200: '#A5D6A7',
                        300: '#81C784',
                        400: '#66BB6A',
                        500: '#2E7D32',
                        600: '#1B5E20',
                        700: '#145214',
                        800: '#0D3B0D',
                        900: '#062506',
                    },
                },
                // Neutral Construction Tones
                concrete: {
                    DEFAULT: '#9E9E9E',
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#EEEEEE',
                    300: '#E0E0E0',
                    400: '#BDBDBD',
                    500: '#9E9E9E',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#212121',
                },
                steel: {
                    DEFAULT: '#37474F',
                    light: '#546E7A',
                    dark: '#263238',
                    black: '#1A1F23',
                },
                asphalt: {
                    DEFAULT: '#2C2C2C',
                    dark: '#1A1A1A',
                    darker: '#0D0D0D',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
            },
            animation: {
                'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                'slide-down': 'slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                'slide-left': 'slideLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                'slide-right': 'slideRight 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                'fade-in': 'fadeIn 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                'draw-line': 'drawLine 1.5s ease-out forwards',
                'beam-slide': 'beamSlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'foundation-rise': 'foundationRise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'blueprint-draw': 'blueprintDraw 2s ease-out forwards',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                drawLine: {
                    '0%': { strokeDashoffset: '1000' },
                    '100%': { strokeDashoffset: '0' },
                },
                beamSlide: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                foundationRise: {
                    '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
                    '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
                },
                blueprintDraw: {
                    '0%': { strokeDashoffset: '2000', opacity: '0.3' },
                    '50%': { opacity: '1' },
                    '100%': { strokeDashoffset: '0', opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'blueprint-grid': `
          linear-gradient(to right, rgba(90, 90, 90, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(90, 90, 90, 0.1) 1px, transparent 1px)
        `,
                'construction-pattern': `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(198, 40, 40, 0.03) 10px,
            rgba(198, 40, 40, 0.03) 20px
          )
        `,
            },
            backgroundSize: {
                'blueprint': '50px 50px',
            },
            boxShadow: {
                'construction': '0 4px 20px rgba(0, 0, 0, 0.15)',
                'steel': '0 8px 32px rgba(55, 71, 79, 0.25)',
                'elevated': '0 12px 40px rgba(0, 0, 0, 0.12)',
            },
            transitionTimingFunction: {
                'construction': 'cubic-bezier(0.22, 1, 0.36, 1)',
            },
        },
    },
    plugins: [],
};

export default config;
