import type { GameProps } from "../lib/types";

type Level = GameProps & { name: string; next: string };

export const TUTORIALS: Level[] = [
  {
    name: "click",
    size: 2,
    goal: [0xff0000, 0xff0000, 0xff0000, 0xff0000],
    text: "Click (or touch) the black circles to move colours from the list on the right to the game board.",
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
    text: "This game is about mixing light. Light mixes differently to pigment.<br/><br/>Mix all of the primary colours to make white!",
    next: "",
  },
];
