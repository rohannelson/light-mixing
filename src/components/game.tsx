//Note to self - maybe set 'blockSize' as a css variable rather than a prop?
import { useState, type ChangeEvent } from "react";
import Board from "./board";
import ColourList from "./colour-list";
import Score from "./score";
import Options from "./options";
import type { BoardColour } from "../lib/types";
import "drag-drop-touch";
import { POSSIBLE_TERTIARY_COLOURS } from "./consts";
import initBoard from "./initBoard";

export default function Game({
  tertiary = false,
  sandbox = false,
}: {
  tertiary?: boolean;
  sandbox?: boolean;
}) {
  const [boardSize, setBoardSize] = useState(3);
  const blockSize = `calc(100/${boardSize})%`;
  const { initListArray, initBoardColours, initColoursArray } = initBoard({
    tertiary,
    sandbox,
  });
  let listArray = initListArray(boardSize);
  const [boardColours, setBoardColours] = useState(initBoardColours(boardSize));
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

  const [colourHeldIndex, setColourHeldIndex] = useState<undefined | number>(
    undefined
  );
  function handleClick(i: number) {
    console.log("board clicked, colourHeldIndex: ", colourHeldIndex);
    handleTurn(i, colourHeldIndex);
  }

  function handleDrop(e: React.DragEvent<HTMLButtonElement>, i: number) {
    const li = Number(e.dataTransfer.getData("text/plain"));
    handleTurn(i, li);
  }

  function handleTurn(boardIndex: number, listIndex: number | undefined) {
    if (listIndex === undefined) {
      return;
    }
    let newBoardColours = [...boardColours];
    newBoardColours[boardIndex] = addHexes(
      boardColours[boardIndex],
      coloursArray[listIndex]
    );
    if (
      !POSSIBLE_TERTIARY_COLOURS.includes(newBoardColours[boardIndex].colour)
    ) {
      setMisclicks(misclicks + 1);
      return;
    }
    setBoardColours(newBoardColours);
    !sandbox && setColoursArray(coloursArray.toSpliced(listIndex, 1));
    setMoves(moves + 1);
    !sandbox && setColourHeldIndex(undefined);
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
          sandbox={sandbox}
        />
        <div />
        <ColourList
          colourList={coloursArray.slice(0, boardSize)}
          listArray={listArray}
          colourHeldIndex={colourHeldIndex}
          setColourHeldIndex={setColourHeldIndex}
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
