/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "bg-[#000000]",
    "bg-[#ffffff]",
    "bg-[#ff0000]",
    "bg-[#0000ff]",
    "bg-[#00ff00]",
    "bg-red",
    "bg-green",
    "bg-blue",
    "w-24",
    "h-24",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
