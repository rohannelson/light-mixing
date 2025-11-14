import type { GameProps } from "../lib/types";

type Level = GameProps & { name: string; next: string };

export const TUTORIALS: Level[] = [
  {
    name: "1",
    size: 2,
    goal: [0xffffff, 0xffffff, 0xffffff, 0xffffff],
    text: "These are instructions",
    next: "2",
  },
  {
    name: "2",
    goal: [
      0xffff00, 0xff00ff, 0x00ffff, 0xffff00, 0xffffff, 0x00ffff, 0xffff00,
      0xff00ff, 0x00ffff,
    ],
    text: "Do what I say",
    next: "3",
  },
  {
    name: "3",
    goal: [
      0xffff80, 0xff80ff, 0x80ffff, 0xffff80, 0xffffff, 0x80ffff, 0xffff80,
      0xff80ff, 0x80ffff,
    ],
    text: "This one's tricky!",
    next: "",
  },
];
