//Note to self - maybe set 'blockSize' as a css variable rather than a prop?
import { useState, type ChangeEvent } from "react";
import Board from "./Board";
import ColourList from "./Colour-list";
import Score from "./Score";
import Options from "./Options";
import "drag-drop-touch";
import { GAME_DEFAULTS, POSSIBLE_TERTIARY_COLOURS } from "./consts";
import initBoard from "./initBoard";
import { splitRGB } from "../lib/utils";
import type { GameProps, History } from "../lib/types";

export default function Game({
  tertiary = GAME_DEFAULTS.tertiary,
  sandbox = GAME_DEFAULTS.sandbox,
  size = GAME_DEFAULTS.size,
  goal = GAME_DEFAULTS.goal,
  text = GAME_DEFAULTS.text,
  name = GAME_DEFAULTS.name,
  next = GAME_DEFAULTS.next,
  list = GAME_DEFAULTS.list,
  board = GAME_DEFAULTS.board,
}: GameProps) {
  const [boardSize, setBoardSize] = useState(size);
  const blockSize = `calc(100/${boardSize})%`;
  goal = goal.length === 0 ? new Array(boardSize ** 2).fill(0xffffff) : goal;
  const { initListArray, initBoardColours, initListColours } = initBoard({
    tertiary,
    sandbox,
    board,
  });
  let listArray = initListArray(boardSize);
  const [boardColours, setBoardColours] = useState(initBoardColours(boardSize));
  const [listColours, setListColours] = useState(
    initListColours(boardSize, goal, list),
  );
  const [victory, setVictory] = useState(false);
  const [history, setHistory] = useState<History[]>([]);

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

  const [undos, setUndos] = useState(0);
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
      listColours[listIndex],
    );
    if (!POSSIBLE_TERTIARY_COLOURS.includes(newBoardColours[boardIndex])) {
      setMisclicks(misclicks + 1);
      return;
    }
    setBoardColours(newBoardColours);
    !sandbox && setListColours(listColours.toSpliced(listIndex, 1));
    if (newBoardColours.every((val, i) => val === goal[i])) {
      setVictory(true);
    }
    const nextHistory = [
      ...history,
      {
        boardColours: boardColours,
        listColours: listColours,
      },
    ];
    setHistory(nextHistory);
    console.log("history", nextHistory);
  }

  function handleBoardSizeChange(e: ChangeEvent<HTMLSelectElement>) {
    const newBoardSize = parseInt(e.currentTarget.value);
    setBoardSize(newBoardSize);
    setBoardColours(initBoardColours(newBoardSize));
    listArray = initListArray(newBoardSize);
    setListColours(initListColours(newBoardSize, goal, list));
  }

  function handleReset() {
    setBoardColours(initBoardColours(boardSize));
    setListColours(initListColours(boardSize, goal, list));
    setUndos(0);
    setMisclicks(0);
    setVictory(false);
    setColourHeldIndex(0);
  }

  function handleUndo() {
    if (history.length > 0) {
      const { boardColours, listColours } = [...history].pop() as History;
      console.log("boardColours: ", boardColours);
      console.log("listColours: ", listColours);
      setBoardColours(boardColours);
      setListColours(listColours);
      setHistory((prev) => prev.slice(0, -1));
      setUndos(undos + 1);
    }
  }

  const gridColumns = `grid-cols-[repeat(${boardSize},_1fr)_1rem_1fr]`;

  return (
    <>
      <div
        id="victory-screen"
        className={`absolute z-10 flex h-screen w-full bg-white transition delay-100 duration-[2000ms] ${
          victory ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex-col content-center">
          <div
            className={`rounded bg-black p-8 ${
              victory
                ? "visible opacity-100 transition delay-[1500ms] duration-1000"
                : "invisible opacity-0"
            }`}
          >
            <dl className="flex">
              <dt className="font-semibold">Undos:</dt>
              <dd className="ml-1">{undos}</dd>
              <dt className="ml-4 font-semibold">Misclicks:</dt>
              <dd className="ml-1">{misclicks}</dd>
            </dl>
            <div className="mt-2 flex justify-between gap-4">
              <a
                href="/"
                className="rounded border border-solid border-white p-1 px-2"
              >
                Back
              </a>
              <button
                onClick={handleReset}
                className="rounded border border-solid border-white p-1 px-2"
              >
                Again
              </button>
              <a
                href={`../${next}/`}
                className="rounded border border-solid border-white p-1 px-2"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mx-auto flex">
          <div className="m-4 max-w-[500px]">
            <div className="flex flex-wrap gap-x-2">
              <h1 className="mb-2 text-2xl font-bold uppercase">
                Light Mixing Game
              </h1>
              <a href="/" className="ml-auto underline">
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
                <label className="text-right font-semibold">NEXT</label>
              </div>
              <Board
                boardSize={boardSize}
                blockSize={blockSize}
                boardColours={boardColours}
                handleClick={handleClick}
                handleDrop={handleDrop}
                sandbox={sandbox}
                goal={goal}
                victory={victory}
              />
              <div />
              <ColourList
                colourList={listColours.slice(0, boardSize)}
                listArray={listArray}
                colourHeldIndex={colourHeldIndex}
                setColourHeldIndex={setColourHeldIndex}
              />
              <Score undos={undos} misclicks={misclicks} />
              <Options
                handleChange={handleBoardSizeChange}
                handleReset={handleReset}
                handleUndo={handleUndo}
                boardSize={boardSize}
                sandbox={sandbox}
              />
            </div>
            {text && (
              <>
                <hr className="mb-1 mt-3"></hr>
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
