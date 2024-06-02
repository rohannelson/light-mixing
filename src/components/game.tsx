//Note to self - maybe set 'blockSize' as a css variable rather than a prop?
import { useState, useEffect, type ChangeEvent } from "react";
import Board from "./board";
import ColourList from "./colour-list";
import SkipColour from "./skip";
import Score from "./score";
import Options from "./options";
import Separator from "./separator";

export default function Game() {
  const [boardSize, setBoardSize] = useState(3);
  const blockSize = `calc(100/${boardSize})%`;
  function initListArray(boardSize: number) {
    return new Array(boardSize).fill("");
  }
  let listArray = initListArray(boardSize);
  const [boardColours, setBoardColours] = useState(initBoardColours(boardSize));
  const colourOptions = ["ff0000", "00ff00", "0000ff"];
  const possibleColours = [...colourOptions, "ffff00", "00ffff", "ff00ff", "ffffff"];

  //This is a bit tangled, you should separate boardColours from coloursList
  function initBoardColours(boardSize: number) {
    return new Array(boardSize ** 2).fill("000000");
  }

  function initListColours() {
    return listArray.map(() => {
      return randomColour();
    });
  }

  function randomColour() {
    return colourOptions[Math.floor(Math.random() * colourOptions.length)];
  }

  const [colourList, setColourList] = useState(initListColours());

  function addHexes(num1: string, num2: string) {
    console.log("num1: ", num1, " num2: ", num2);
    let output = (parseInt(num1, 16) + parseInt(num2, 16)).toString(16);
    while (output.length < 6) {
      output = "0" + output;
    }
    console.log("output: ", output);
    return output;
  }

  function updateColourList(colourList: string[]) {
    let newColourList = [...colourList];
    let count = 0;
    while (count < colourList.length - 1) {
      newColourList[count] = colourList[count + 1];
      count++;
    }
    newColourList[colourList.length - 1] = randomColour();
    setColourList(newColourList);
  }

  const [moves, setMoves] = useState(0);
  const [misclicks, setMisclicks] = useState(0);
  function handleClick(i: number) {
    let newBoardColours = [...boardColours];
    newBoardColours[i] = addHexes(boardColours[i], colourList[0]);
    if (!possibleColours.includes(newBoardColours[i])) {
      setMisclicks(misclicks + 1);
      return;
    }
    setBoardColours(newBoardColours);
    updateColourList(colourList);
    setMoves(moves + 1);
  }

  const [skips, setSkips] = useState(0);
  const [skipBackground, setSkipBackground] = useState("ffffff");

  function handleSkipClick() {
    setSkipBackground(colourList[0]);
    updateColourList(colourList);
    setSkips(skips + 1);
  }

  function handleBoardSizeChange(e: ChangeEvent<HTMLSelectElement>) {
    const newBoardSize = parseInt(e.currentTarget.value);
    setBoardSize(newBoardSize);
    setBoardColours(initBoardColours(newBoardSize));
    listArray = initListArray(newBoardSize);
    setColourList(initListColours());
  }

  function handleReset() {
    setBoardColours(initBoardColours(boardSize));
    setColourList(initListColours());
  }

  return (
    <div className="max-h-screen">
      <h1 className="text-2xl uppercase">Light Mixing Game</h1>
      <div className={`grid grid-cols-${boardSize + 2} gap-4 grid-rows-[min-content]`}>
        <div className={`col-span-${boardSize + 2} grid grid-cols-${boardSize + 2}`}>
          <label className="font-semibold">DISCARD BUTTON</label>
          <label className={`col-span-${boardSize} text-center font-semibold`}>
            GAME BOARD
          </label>
          <label className="text-right font-semibold">NEXT UP</label>
        </div>
        <div className="flex flex-col">
          <SkipColour background={skipBackground} handleClick={handleSkipClick} />
          <Score moves={moves} misclicks={misclicks} skips={skips} />
          <Separator className="mt-1" />
          <Options handleChange={handleBoardSizeChange} handleReset={handleReset} />
        </div>
        <Board
          boardSize={boardSize}
          blockSize={blockSize}
          boardColours={boardColours}
          handleClick={handleClick}
        />
        <ColourList colourList={colourList} listArray={listArray} />
      </div>
    </div>
  );
}
