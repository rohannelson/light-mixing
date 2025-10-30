export const FULL_RGB = ["ff0000", "00ff00", "0000ff"];
export const HALF_RGB = ["7f0000", "007f00", "00007f"];
export const POSSIBLE_SECONDARY_COLOURS = [
  ...FULL_RGB,
  "ffff00",
  "00ffff",
  "ff00ff",
  "ffffff",
];
export const POSSIBLE_TERTIARY_COLOURS = [
  ...FULL_RGB,
  ...POSSIBLE_SECONDARY_COLOURS,
  ...HALF_RGB,
  "7f7f00",
  "7f007f",
  "007f7f",
  "7f7f7f",
  "ff7f00",
  "ff7f7f",
  "ff007f",
  "7fff00",
  "7fff7f",
  "00ff7f",
  "7f00ff",
  "7f7fff",
  "007fff",
  "ffff7f",
  "ff7fff",
  "7fffff",
];
