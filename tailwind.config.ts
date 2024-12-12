import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;
