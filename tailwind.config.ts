import type { Config } from "tailwindcss";
import BannerImg from './public/BannerImg.jpg'
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			bannerImg: 'url(BannerImg)'
  		},
  		colors: {
  			text: {
  				'50': '#070e12',
  				'100': '#0e1c25',
  				'200': '#1d3849',
  				'300': '#2b546e',
  				'400': '#397093',
  				'500': '#478db8',
  				'600': '#6ca3c6',
  				'700': '#91bad4',
  				'800': '#b6d1e2',
  				'900': '#dae8f1',
  				'950': '#edf4f8'
  			},
  			background: 'hsl(var(--background))',
  			primary: {
  				'50': '#040f16',
  				'100': '#081d2b',
  				'200': '#0f3a57',
  				'300': '#175782',
  				'400': '#1f74ad',
  				'500': '#2691d9',
  				'600': '#52a7e0',
  				'700': '#7dbde8',
  				'800': '#a8d3f0',
  				'900': '#d4e9f7',
  				'950': '#e9f4fb',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#020f18',
  				'100': '#031e30',
  				'200': '#073c5f',
  				'300': '#0a5a8f',
  				'400': '#0d78bf',
  				'500': '#1196ee',
  				'600': '#40abf2',
  				'700': '#70c0f5',
  				'800': '#a0d5f8',
  				'900': '#cfeafc',
  				'950': '#e7f4fd',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#170802',
  				'100': '#2f1004',
  				'200': '#5d2109',
  				'300': '#8c310d',
  				'400': '#bb4111',
  				'500': '#e95216',
  				'600': '#ee7444',
  				'700': '#f29773',
  				'800': '#f6baa2',
  				'900': '#fbdcd0',
  				'950': '#fdeee8',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
