import { shuffle, splitRGB } from "../lib/utils";
import { FULL_RGB, HALF_RGB } from "./consts";

export default function initBoard({
  tertiary,
  sandbox,
}: {
  tertiary: boolean;
  sandbox: boolean;
}) {
  function initListArray(boardSize: number): string[] {
    return new Array(boardSize).fill("");
  }

  function initBoardColours(boardSize: number): number[] {
    return new Array(boardSize ** 2).fill(0x000000);
  }

  //'ListColours' is an array of colours that the player can place on the game board.
  function initListColours(boardSize: number, goal: number[]): number[] {
    if (sandbox) {
      if (tertiary) return [...HALF_RGB, ...FULL_RGB];
      return [...FULL_RGB, ...FULL_RGB];
    } else if (goal.length > 0) {
      const list: number[] = [];
      goal.map((v) => {
        let { r, g, b } = splitRGB(v);
        if (tertiary) {
          if (r === 0xff) {
            list.push(...[0x800000, 0x800000]);
            r = 0;
          }
          if (g === 0xff) {
            list.push(...[0x008000, 0x008000]);
            g = 0;
          }
          if (b === 0xff) {
            list.push(...[0x80, 0x80]);
            b = 0;
          }
        }
        if (r !== 0) list.push(r << 16);
        if (g !== 0) list.push(g << 8);
        if (b !== 0) list.push(b);
      });
      return shuffle(list);
    } else {
      const rgbOptions = tertiary ? HALF_RGB : FULL_RGB;
      const coloursAmount = tertiary ? boardSize ** 2 * 2 : boardSize ** 2;
      const coloursArray = rgbOptions
        .map((rgbOption) => {
          //You need 'coloursAmount' of each rgbOption to make the whole game board white.
          return Array(coloursAmount).fill(rgbOption);
        })
        .flat();
      return shuffle(coloursArray);
    }
  }

  return {
    initListArray,
    initListColours,
    initBoardColours,
  };
}
