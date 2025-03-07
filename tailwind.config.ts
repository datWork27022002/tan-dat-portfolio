import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/PageComponents/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/not-found.tsx",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            fontFamily: {
                primary: "var(--body-font)",
                secondnary: "var( --second-font)",
            },
            fontSize: { title: "18px" },
            colors: {
                primary: "var(--primary)",
            },
            boxShadow: {
                custom: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            },

            width: {},
            padding: {},
            margin: {},
        },
    },
    plugins: [],
};
export default config;
