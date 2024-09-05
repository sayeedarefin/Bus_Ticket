/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}', // Add the path to your HTML and JS files
        './public/**/*.html',   // Adjust paths according to your project structure
    ],
    theme: {
        extend: {
            colors: {
                'custom-green': '#1DD100', // set custom color
                'custom-black': '#030712', // set custom color
            },
        },
    },
    plugins: [],
}
