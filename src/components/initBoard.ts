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

  function initBoardColours(boardSize: number) {
    return new Array(boardSize ** 2).fill({
      colour: "000000",
      tertiary: tertiary,
    });
  }

  //'ColoursArray' is an array of colours that the player can place on the game board.
  function initColoursArray(boardSize: number): string[] {
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
