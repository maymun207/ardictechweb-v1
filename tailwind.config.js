/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00FFFF',
        'electric-blue': '#00D9FF',
        'deep-magenta': '#9D4EDD',
        'deep-purple': '#7B2CBF',
        'magenta': '#C77DFF',
        'purple': '#9D4EDD',
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(to right, #9D4EDD, #7B2CBF, #00D9FF, #00FFFF)',
        'magenta-cyan': 'linear-gradient(to right, #9D4EDD, #00D9FF)',
        'purple-cyan': 'linear-gradient(to right, #7B2CBF, #00FFFF)',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.04em',
      },
    },
  },
  plugins: [],
}
