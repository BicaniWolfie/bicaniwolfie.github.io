import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			animation: {
				typewriter: "typewriter 2s steps(26) forwards",
			},
			fontFamily: {
				"console": ["Consolas", "monospace"],
			},
			keyframes: {
				typewriter: {
					to: {
						left: "100%",
					},
				},
			},
		},
	},

	plugins: [typography, forms, aspectRatio],
} satisfies Config;
