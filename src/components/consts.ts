export const FULL_RGB = ["ff0000", "00ff00", "0000ff"];
export const HALF_RGB = ["800000", "008000", "000080"];
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
  "808000",
  "800080",
  "008080",
  "808080",
  "ff8000",
  "ff8080",
  "ff0080",
  "80ff00",
  "80ff80",
  "00ff80",
  "8000ff",
  "8080ff",
  "0080ff",
  "ffff80",
  "ff80ff",
  "80ffff",
];
