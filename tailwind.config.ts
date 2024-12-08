import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			'primary': 'var(--primary)',
			'primary-hover': 'var(--primary-hover)',
			'dark': 'var(--dark)',
			'secondary': 'var(--secondary)',
			'grey': 'var(--grey)',
			'primary-dark': 'var(--primary-dark)',
			'primary-grey': 'var(--primary-grey)',
			'primary-light': 'var(--primary-light)',
			'white': 'var(--white)',
			'midnight-blue': 'var(--midnight-blue)',
			'separator-grey': 'var(--separator-grey)',
			'dark-gray-50': 'var(--dark-gray-50)',
			'white-50': 'var(--white-50)',
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
