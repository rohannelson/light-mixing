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
    text: `Mix red, green, and blue to make white.<br/><br/>Can you finish the level without making any mistakes (misclicks)?`,
    next: "magenta",
  },
  {
    name: "magenta",
    text: "Mix red and blue to make magenta.",
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
