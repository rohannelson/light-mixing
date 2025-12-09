import type { GameProps } from "../lib/types";

type Level = GameProps & { name: string; next: string };

export const TUTORIALS: Level[] = [
  {
    name: "click",
    size: 2,
    goal: [0xff0000, 0xff0000, 0xff0000, 0xff0000],
    text: "Click (or tap) the black circles to move colours from the list on the right to the game board.",
    next: "goals",
  },
  {
    name: "goals",
    size: 2,
    goal: [0xff0000, 0x00ff00, 0xff0000, 0x00ff00],
    text: "The aim of each level is to get the colour of the circles to match the colour of the glow around them. <br/><br/>For this level you want two red circles and two green circles.<br/><br/>If you get stuck you can click the 'Reset Game' button in the bottom right.",
    next: "select",
  },
  {
    name: "select",
    goal: [0x00ff00, 0x0000ff, 0x00ff00, 0x0000ff],
    size: 2,
    text: `By default, the next colour is the one at the top of the list, but you can select different ones to use them next. You can also drag and drop.<br/><br/>
    Select the green square to get started!`,
    next: "mixing",
    list: [0xff0000, 0x00ff00, 0x0000ff, 0x0000ff, 0x00ff00],
  },
  {
    name: "mixing",
    size: 2,
    list: [
      0xff0000, 0xff0000, 0x00ff00, 0x00ff00, 0x0000ff, 0x0000ff, 0xff0000,
      0xff0000, 0x00ff00, 0x00ff00, 0x0000ff, 0x0000ff,
    ],
    text: "This game is about mixing light. Light mixes differently to pigment.<br/><br/>Mix all of the primary colours to make white!",
    next: "congratulations",
  },
];

export const SECONDARY: Level[] = [
  {
    name: "white",
    goal: [
      0xffffff, 0xff0000, 0x00ff00, 0x0000ff, 0xffffff, 0x0000ff, 0x00ff00,
      0xff0000, 0xffffff,
    ],
    text: `Mix red, green, and blue to make white.<br/><br/>Can you finish the level without making any mistakes (misclicks)?`,
    next: "magenta",
  },
  {
    name: "magenta",
    text: "Mixing red and blue makes magenta.",
    goal: [
      0xff0000, 0xff00ff, 0xff0000, 0xff00ff, 0xffffff, 0xff00ff, 0xff0000,
      0xff00ff, 0xff0000,
    ],
    next: "cyan",
  },
  {
    name: "cyan",
    text: "Cyan is made from blue and green.",
    goal: [
      0xffffff, 0x00ffff, 0xffffff, 0x00ffff, 0x0000ff, 0x00ffff, 0xffffff,
      0x00ffff, 0xffffff,
    ],
    next: "yellow",
  },
  {
    name: "yellow",
    text: "I wonder what makes yellow?",
    goal: [
      0x00ff00, 0xffff00, 0xff0000, 0xffffff, 0xffff00, 0xffffff, 0x00ff00,
      0xffff00, 0xff0000,
    ],
    next: "multi",
  },
  {
    name: "multi",
    goal: [
      0xff0000, 0xff00ff, 0xffffff, 0x00ff00, 0xffff00, 0xffffff, 0x0000ff,
      0x00ffff, 0xffffff,
    ],
    next: "4x4",
  },
  {
    name: "4x4",
    size: 4,
    goal: [
      0xff0000, 0xffff00, 0xff00ff, 0xff0000, 0xffff00, 0x00ff00, 0x0000ff,
      0xff00ff, 0xff00ff, 0x0000ff, 0x00ff00, 0xffff00, 0xff0000, 0xff00ff,
      0xffff00, 0xff0000,
    ],
    next: "boss",
  },
  {
    name: "boss",
    size: 4,
    goal: [
      0xff00ff, 0xffff00, 0x00ffff, 0xffff00, 0xffffff, 0x00ffff, 0x00ff00,
      0x00ffff, 0xff00ff, 0xffff00, 0x00ffff, 0xffff00, 0xff0000, 0xff00ff,
      0xffffff, 0xff00ff,
    ],
    next: "nice",
  },
];

export const TERTIARY: Level[] = [
  {
    name: "introducing-tertiary-colours",
    text: "These levels include half-strength colours. <br/><br/> Sometimes the difference half-strength colours make can be pretty subtle, so lights that need a half-strength colour have diffraction spikes to make things a bit easier.<br/><br/>Can you see which greens are warmer and which are cooler?",
    goal: [
      0x00ff00, 0x80ff00, 0x00ff00, 0x00ff80, 0x80ff80, 0x00ff80, 0x00ff00,
      0x80ff00, 0x00ff00,
    ],
    next: "study-in-blue-green",
  },
  {
    name: "study-in-blue-green",
    text: "Unless otherwise specified, you are given the minimum number of colours needed to achieve the goal.<br/><br/>This means that you shouldn't use two half-strength colours where you could use one full-strength colour.",
    goal: [
      0x00ffff, 0x00ff80, 0x00ff00, 0x0080ff, 0x80ffff, 0x00ff80, 0x0000ff,
      0x0080ff, 0x00ffff,
    ],
    next: "study-in-red-blue",
  },
  {
    name: "study-in-red-blue",
    goal: [
      0xff0000, 0xff0080, 0x800080, 0xff0080, 0xff00ff, 0x8000ff, 0x800080,
      0x8000ff, 0x0000ff,
    ],
    next: "study-in-red-green",
  },
  {
    name: "study-in-red-green",
    goal: [
      0xffff00, 0xff8000, 0xff8080, 0x80ff00, 0xffff80, 0xff8000, 0x80ff80,
      0x80ff00, 0xffff00,
    ],
    next: "red-green-2",
  },
  {
    name: "red-green-2",
    text: "Time to take things up a notch =D",
    goal: [
      0x8000ff, 0xff8000, 0x80ff00, 0x0080ff, 0xff8000, 0xff0000, 0x00ff00,
      0x80ff00, 0x80ff00, 0x00ff00, 0xff0000, 0xff8000, 0x0080ff, 0x80ff00,
      0xff8000, 0x8000ff,
    ],
    size: 4,
    next: "finito",
  },
];
