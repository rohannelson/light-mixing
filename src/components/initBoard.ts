import { shuffle } from "../lib/utils";
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

  //'ColoursArray' is an array of colours that the player can place on the game board.
  function initColoursArray(boardSize: number): number[] {
    if (sandbox) {
      if (tertiary) return [...HALF_RGB, ...FULL_RGB];
      return [...FULL_RGB, ...FULL_RGB];
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
    initColoursArray,
    initBoardColours,
  };
}
