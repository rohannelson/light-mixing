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
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "bg-[#000000]",
    "bg-[#ffffff]",
    "bg-[#ff0000]",
    "bg-[#0000ff]",
    "bg-[#00ff00]",
    "bg-[#ffff00]",
    "bg-[#00ffff]",
    "bg-[#ff00ff]",
    "bg-red",
    "bg-green",
    "bg-blue",
    "grid-cols-[repeat(3,_1fr)_1rem_1fr]",
    "grid-cols-[repeat(4,_1fr)_1rem_1fr]",
    "grid-cols-[repeat(5,_1fr)_1rem_1fr]",
    "grid-cols-[repeat(6,_1fr)_1rem_1fr]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
