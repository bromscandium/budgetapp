module.exports = {
    content: [
        "./src/App.{js,jsx,ts,tsx}",
        "./src/index.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#177EFE',
                'primary-light': '#5A9BFF',
                'primary-dark': '#125FCC',
                background: '#FFFFFF',
                card: '#F8F8F8',
                text: '#111111',
                muted: '#999999',
                accent: '#FF3366',
                danger: '#DC2626',
                success: '#22C55E',
                dark: {
                    background: '#0A0A0A',
                    card: '#1A1A1A',
                    text: '#F0F0F0',
                    muted: '#666666',
                }
            },
            fontFamily: {
                extralight: ['SourceSans3-ExtraLight'],
                light: ['SourceSans3-Light'],
                regular: ['SourceSans3-Regular'],
                medium: ['SourceSans3-Medium'],
                semibold: ['SourceSans3-SemiBold'],
                bold: ['SourceSans3-Bold'],
                extrabold: ['SourceSans3-ExtraBold'],
                black: ['SourceSans3-Black'],
            },
            fontSize: {
                base: '1rem',
                xl: '1.25rem',
                xxl: '1.5rem',
                xxxl: '2rem',
                xxxxl: '3rem',
            },
        },
    },
    plugins: [],
};
