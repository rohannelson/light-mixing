//Note to self - maybe set 'blockSize' as a css variable rather than a prop?
import { useState, type ChangeEvent } from "react";
import Board from "./board";
import ColourList from "./colour-list";
import Score from "./score";
import Options from "./options";
import "drag-drop-touch";
import { POSSIBLE_TERTIARY_COLOURS } from "./consts";
import initBoard from "./initBoard";

export default function Game({
  tertiary = false,
  sandbox = false,
  size = 3,
  goal = [],
}: {
  tertiary?: boolean;
  sandbox?: boolean;
  size?: number;
  goal?: number[];
}) {
  const [boardSize, setBoardSize] = useState(size);
  const blockSize = `calc(100/${boardSize})%`;
  goal = goal.length === 0 ? new Array(boardSize ** 2).fill(0xffffff) : goal;
  const { initListArray, initBoardColours, initColoursArray } = initBoard({
    tertiary,
    sandbox,
  });
  let listArray = initListArray(boardSize);
  const [boardColours, setBoardColours] = useState(initBoardColours(boardSize));
  const [coloursArray, setColoursArray] = useState(initColoursArray(boardSize));
  const [victory, setVictory] = useState(false);

  function splitRGB(colour: number): { r: number; g: number; b: number } {
    //Split colours into RGB array
    const r = (colour >> 16) & 0xff; // top 8 bits
    const g = (colour >> 8) & 0xff; // middle 8 bits
    const b = colour & 0xff;
    return { r, g, b };
  }

  function checkMax(int: number) {
    return int === 0x100 ? 0xff : int;
  }

  function addHexes(boardColour: number, listColour: number): number {
    const { r: boardR, g: boardG, b: boardB } = splitRGB(boardColour);
    const { r: listR, g: listG, b: listB } = splitRGB(listColour);
    const r = checkMax(boardR + listR);
    const g = checkMax(boardG + listG);
    const b = checkMax(boardB + listB);
    const colour = (r << 16) | (g << 8) | b;
    return colour;
  }

  const [moves, setMoves] = useState(0);
  const [misclicks, setMisclicks] = useState(0);

  const [colourHeldIndex, setColourHeldIndex] = useState<number>(0);
  function handleClick(i: number) {
    handleTurn(i, colourHeldIndex);
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
    if (!POSSIBLE_TERTIARY_COLOURS.includes(newBoardColours[boardIndex])) {
      setMisclicks(misclicks + 1);
      return;
    }
    setBoardColours(newBoardColours);
    !sandbox && setColoursArray(coloursArray.toSpliced(listIndex, 1));
    setMoves(moves + 1);
    if (newBoardColours.every((val, i) => val === goal[i])) {
      console.log("Win!!!");
      setVictory(true);
    }
  }

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
  }

  const gridColumns = `grid-cols-[repeat(${boardSize},_1fr)_1rem_1fr]`;

  return (
    <>
      <div
        id="victory-screen"
        className={`bg-white absolute h-screen w-full transition duration-1000 z-10 flex ${
          victory ? "visbile opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex-col mx-auto content-center">
          <div className="bg-black p-4 rounded">Boxy box</div>
        </div>
      </div>
      <div className="flex">
        <div className="flex mx-auto">
          <div className="max-w-[500px] m-4">
            <div className="flex flex-wrap gap-x-2">
              <h1 className="text-2xl uppercase font-bold">
                Light Mixing Game
              </h1>
              <a href="/" className="underline ml-auto">
                back
              </a>
            </div>
            <div className={`grid ${gridColumns} gap-1`}>
              <div className={`col-span-${boardSize + 2} grid ${gridColumns}`}>
                <label
                  className={`col-span-${boardSize} text-center font-semibold`}
                >
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
                sandbox={sandbox}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
