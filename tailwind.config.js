const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "320px",
			...defaultTheme.screens,
		},
		fontFamily: {
			base: ["ABeeZee", "sans-serif"],
			handwriting: ["Cookie", "cursive"],
		},
		extend: {
			colors: {
				parfete: {
					rose: "#ff0066",
					orange: "#FF9900",
					bleu: "#33CCFF",
					turquoise: "#00CCCC",
					blanc: "#FFFFFF",
					jaune: "#FFFF33",
					anthracite: "404040",
				},
			},
		},
	},
	plugins: [],
}
