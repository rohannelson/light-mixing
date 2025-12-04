export const FULL_RGB = [0xff0000, 0x00ff00, 0x0000ff];

export const HALF_RGB = [0x800000, 0x008000, 0x000080];

export const POSSIBLE_SECONDARY_COLOURS = [
  ...FULL_RGB,
  0xffff00,
  0x00ffff,
  0xff00ff,
  0xffffff,
];

export const POSSIBLE_TERTIARY_COLOURS = [
  ...FULL_RGB,
  ...POSSIBLE_SECONDARY_COLOURS,
  ...HALF_RGB,
  0x808000,
  0x800080,
  0x008080,
  0x808080,
  0xff8000,
  0xff8080,
  0xff0080,
  0x80ff00,
  0x80ff80,
  0x00ff80,
  0x8000ff,
  0x8080ff,
  0x0080ff,
  0xffff80,
  0xff80ff,
  0x80ffff,
];

export const GAME_DEFAULTS = {
  tertiary: false,
  sandbox: false,
  size: 3,
  goal: [],
  text: "",
  name: "",
  next: "",
  list: [],
  board: [],
  stage: "",
};
