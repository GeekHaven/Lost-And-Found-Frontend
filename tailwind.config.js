/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			maxWidth: {
				"screen-xl": "84rem",
			},
			maxHeight: {
				128: "34rem",
			},
			translate: {
				5: "5rem",
			},
			gridTemplateColumns: {
				input: "auto 1fr auto",
			},
			height: {
				hero: "calc(100vh - 8rem)",
				"hero-mobile": "calc(100vh - 10rem)",
				divider: "1px",
			},
			width: {
				"auth-banner": "40rem",
				"auth-form": "calc(100% - 40rem)",
				"job-card": "calc(100vh - 53.5rem)",
				divider: "1px",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				green: {
					100: "var(--green-100)",
					200: "var(--green-200)",
				},
				orange: {
					100: "var(--orange-100)",
					200: "var(--orange-200)",
				},
				lightblue: {
					100: "var(--lightblue-100)",
					200: "var(--lightblue-200)",
				},
				blue: {
					100: "var(--blue-100)",
					200: "var(--blue-200)",
				},
				light: {
					100: "var(--light-100)",
					200: "var(--light-200)",
					300: "var(--light-300)",
					400: "var(--light-400)",
					navbar: "var(--light-navbar)",
				},
				dark: {
					100: "var(--dark-100)",
					200: "var(--dark-200)",
					300: "var(--dark-300)",
					navbar: "var(--dark-navbar)",
				},
				white: "var(--white)",
				black: "var(--black)",
				transparent: "var(--transparent)",
			},
		},
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
	important: true,
};
