//Note to self - maybe set 'blockSize' as a css variable rather than a prop?
import { useState, type ChangeEvent } from "react";
import Board from "./board";
import ColourList from "./colour-list";
import Score from "./score";
import Options from "./options";
import type { BoardColour } from "../lib/types";
import { shuffle } from "../lib/utils";
import "drag-drop-touch";

export default function Game({ tertiary }: { tertiary: boolean }) {
  const [boardSize, setBoardSize] = useState(3);
  const blockSize = `calc(100/${boardSize})%`;
  function initListArray(boardSize: number) {
    return new Array(boardSize).fill("");
  }
  let listArray = initListArray(boardSize);
  const [boardColours, setBoardColours] = useState(initBoardColours(boardSize));
  const fullRgb = ["ff0000", "00ff00", "0000ff"];
  const halfRgb = ["7f0000", "007f00", "00007f"];
  const colourOptions = tertiary ? halfRgb : fullRgb;
  const possibleSecondaryColours = [
    ...fullRgb,
    "ffff00",
    "00ffff",
    "ff00ff",
    "ffffff",
  ];
  const possibleTertiaryColours = [
    ...fullRgb,
    ...possibleSecondaryColours,
    ...halfRgb,
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

  function initBoardColours(boardSize: number) {
    return new Array(boardSize ** 2).fill({
      colour: "000000",
      tertiary: tertiary,
    });
  }

  function initColoursArray(boardSize: number): string[] {
    const rgbOptions = tertiary ? halfRgb : fullRgb;
    const colourAmount = tertiary ? boardSize ** 2 * 2 : boardSize ** 2;
    const coloursArray = rgbOptions
      .map((rgbOption) => {
        return Array(colourAmount).fill(rgbOption);
      })
      .flat();
    return shuffle(coloursArray);
  }

  const [coloursArray, setColoursArray] = useState(initColoursArray(boardSize));

  function addHexes(boardColour: BoardColour, listColour: string): BoardColour {
    function splitTertiary(colour: string): string[] {
      //Split colours into RGB array for tertiary 'addition'
      const red = colour.substring(0, 2);
      const green = colour.substring(2, 4);
      const blue = colour.substring(4, 6);
      return [red, green, blue];
    }
    function tertiarySwitch(): BoardColour {
      //Check and handle if the block is changing to tertiary
      if (!boardColour.tertiary && boardColour.colour != "ffffff") {
        let i = listColour.indexOf("ff");
        if (boardColour.colour.substring(i, i + 2) == "ff") {
          return {
            colour: splitTertiary(boardColour.colour)
              .map((colour) => colour.replace("ff", "7f"))
              .join(""),
            tertiary: true,
          };
        }
      }
      return boardColour;
    }
    console.log("tertiary before switch", tertiary);
    boardColour = tertiary ? tertiarySwitch() : boardColour;
    console.log(
      "After switch - ",
      "boardColour: ",
      boardColour,
      " listColour: ",
      listColour
    );
    function tertiaryAddition(): string {
      //handle tertiary 'addition
      const boardColourArray = splitTertiary(boardColour.colour);
      //0 = red, 1 = green, 2 = blue
      const i = splitTertiary(listColour).indexOf("7f");
      if (boardColourArray[i] == "00") {
        boardColourArray[i] = "7f";
      } else if (boardColourArray[i] == "7f") {
        boardColourArray[i] = "ff";
      } else {
        return "msclck";
      }
      return boardColourArray.join("");
    }
    let output = !boardColour.tertiary
      ? (parseInt(boardColour.colour, 16) + parseInt(listColour, 16))
          .toString(16)
          .padStart(6, "0")
      : tertiaryAddition();

    console.log("output: ", output);
    return { ...boardColour, colour: output };
  }

  const [moves, setMoves] = useState(0);
  const [misclicks, setMisclicks] = useState(0);

  function handleClick(i: number) {
    handleTurn(i, 0);
  }

  function handleDrop(e: React.DragEvent<HTMLButtonElement>, i: number) {
    const li = Number(e.dataTransfer.getData("text/plain"));
    handleTurn(i, li);
  }
  function handleTurn(boardIndex: number, listIndex: number) {
    let newBoardColours = [...boardColours];
    newBoardColours[boardIndex] = addHexes(
      boardColours[boardIndex],
      coloursArray[listIndex]
    );
    if (!possibleTertiaryColours.includes(newBoardColours[boardIndex].colour)) {
      setMisclicks(misclicks + 1);
      return;
    }
    setBoardColours(newBoardColours);
    setColoursArray(coloursArray.toSpliced(listIndex, 1));
    setMoves(moves + 1);
  }
  // const [skips, setSkips] = useState(0);
  // const [skipBackground, setSkipBackground] = useState("000000");
  // function handleSkipClick() {
  //   setSkipBackground(coloursArray[0]);
  //   setColoursArray(coloursArray.slice(1));
  //   setSkips(skips + 1);
  // }

  function handleBoardSizeChange(e: ChangeEvent<HTMLSelectElement>) {
    const newBoardSize = parseInt(e.currentTarget.value);
    setBoardSize(newBoardSize);
    setBoardColours(initBoardColours(newBoardSize));
    listArray = initListArray(newBoardSize);
    setColoursArray(initColoursArray(newBoardSize));
  }

  function handleReset() {
    setBoardColours(initBoardColours(boardSize));
    setColoursArray(initColoursArray(boardSize));
    setMoves(0);
    setMisclicks(0);
    // setSkips(0);
    // setSkipBackground("000000");
  }

  const gridColumns = `grid-cols-[repeat(${boardSize},_1fr)_1rem_1fr]`;

  return (
    <div className="max-w-[500px] m-4">
      <div className="flex flex-wrap gap-x-2">
        <h1 className="text-2xl uppercase font-bold">Light Mixing Game</h1>
        <a href="/" className="underline ml-auto">
          back
        </a>
      </div>
      <div className={`grid ${gridColumns} gap-1`}>
        <div className={`col-span-${boardSize + 2} grid ${gridColumns}`}>
          <label className={`col-span-${boardSize} text-center font-semibold`}>
            GAME BOARD
          </label>
          <div />
          <label className="font-semibold text-right">NEXT</label>
        </div>
        <Board
          boardSize={boardSize}
          blockSize={blockSize}
          boardColours={boardColours}
          handleClick={handleClick}
          handleDrop={handleDrop}
        />
        <div />
        <ColourList
          colourList={coloursArray.slice(0, boardSize)}
          listArray={listArray}
        />
        {/* <SkipColour background={skipBackground} handleClick={handleSkipClick} /> */}
        <Score moves={moves} misclicks={misclicks} />
        <Options
          handleChange={handleBoardSizeChange}
          handleReset={handleReset}
          boardSize={boardSize}
        />
      </div>
    </div>
  );
}
