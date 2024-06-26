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
    //primary colours
    "bg-[#ff0000]",
    "bg-[#0000ff]",
    "bg-[#00ff00]",
    //secondary colours
    "bg-[#ffff00]",
    "bg-[#00ffff]",
    "bg-[#ff00ff]",
    //tertiary colours
    "bg-[#7f0000]",
    "bg-[#007f00]",
    "bg-[#00007f]",
    "bg-[#7f7f00]",
    "bg-[#7f007f]",
    "bg-[#007f7f]",
    "bg-[#7f7f7f]",
    "bg-[#ff7f00]",
    "bg-[#ff7f7f]",
    "bg-[#ff007f]",
    "bg-[#7fff00]",
    "bg-[#7fff7f]",
    "bg-[#00ff7f]",
    "bg-[#7f00ff]",
    "bg-[#7f7fff]",
    "bg-[#007fff]",
    "bg-[#ffff7f]",
    "bg-[#ff7fff]",
    "bg-[#7fffff]",
    "bg-red",
    "bg-green",
    "bg-blue",
    "grid-cols-[repeat(3,_1fr)_1rem_1fr]",
    "grid-cols-[repeat(4,_1fr)_1rem_1fr]",
    "grid-cols-[repeat(5,_1fr)_1rem_1fr]",
    "grid-cols-[repeat(6,_1fr)_1rem_1fr]",
    "shadow-[#ffffff]",
    //primary colours
    "shadow-[#ff0000]",
    "shadow-[#0000ff]",
    "shadow-[#00ff00]",
    //secondary colours
    "shadow-[#ffff00]",
    "shadow-[#00ffff]",
    "shadow-[#ff00ff]",
    //tertiary colours
    "shadow-[#7f0000]",
    "shadow-[#007f00]",
    "shadow-[#00007f]",
    "shadow-[#7f7f00]",
    "shadow-[#7f007f]",
    "shadow-[#007f7f]",
    "shadow-[#7f7f7f]",
    "shadow-[#ff7f00]",
    "shadow-[#ff7f7f]",
    "shadow-[#ff007f]",
    "shadow-[#7fff00]",
    "shadow-[#7fff7f]",
    "shadow-[#00ff7f]",
    "shadow-[#7f00ff]",
    "shadow-[#7f7fff]",
    "shadow-[#007fff]",
    "shadow-[#ffff7f]",
    "shadow-[#ff7fff]",
    "shadow-[#7fffff]",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0px 0px 10px 1px",
      },
    },
  },
  plugins: [],
};
