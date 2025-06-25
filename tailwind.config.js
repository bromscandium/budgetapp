module.exports = {
    content: [
        "./src/App.{js,jsx,ts,tsx}",
        "./src/index.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
};
