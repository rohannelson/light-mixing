//Note to self - set 'blockSize' as a css variable rather than a prop
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
  const [boardColours, setBoardColours] = useState([]);
  const colourOptions = ["ff0000", "00ff00", "0000ff"];
  const possibleColours = [...colourOptions, "ffff00", "00ffff", "ff00ff", "ffffff"];

  //This is a bit tangled, you should separate boardColours from coloursList
  function initBoardState(boardSize) {
    const listArray = new Array(boardSize).fill("");
    useEffect(() => {
      setBoardColours(new Array(boardSize ** 2).fill("000000"));
    }, [boardSize]);
    return listArray.map(() => {
      return randomColour();
    });
  }

  function randomColour() {
    return colourOptions[Math.floor(Math.random() * colourOptions.length)];
  }

  const [colourList, setColourList] = useState(initBoardState(boardSize));

  function addHexes(num1: string, num2: string) {
    console.log("num1: ", num1, " num2: ", num2);
    let output = (parseInt(num1, 16) + parseInt(num2, 16)).toString(16);
    while (output.length < 6) {
      output = "0" + output;
    }
    console.log("output: ", output);
    return output;
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
    let newColourList = [colourList[1], colourList[2], randomColour()];
    setColourList(newColourList);
    setMoves(moves + 1);
  }

  const [skips, setSkips] = useState(0);
  const [skipBackground, setSkipBackground] = useState("ffffff");

  function handleSkipClick() {
    setSkipBackground(colourList[0]);
    let newColourList = [colourList[1], colourList[2], randomColour()];
    setColourList(newColourList);
    setSkips(skips + 1);
  }

  function handleBoardSizeChange(e: ChangeEvent) {
    const newBoardSize = parseInt(e.currentTarget.value);
    setBoardSize(newBoardSize);
    setColourList(initBoardState(newBoardSize));
  }

  return (
    <div className="max-h-screen">
      <h1 className="text-2xl uppercase">Light Mixing Game</h1>
      <div className={`grid grid-cols-${boardSize + 2} gap-4`}>
        <div className="flex flex-col">
          <SkipColour background={skipBackground} handleClick={handleSkipClick} />
          <Score moves={moves} misclicks={misclicks} skips={skips} />
          <Separator />
          <Options handleChange={handleBoardSizeChange} />
        </div>
        <Board
          boardSize={boardSize}
          blockSize={blockSize}
          boardColours={boardColours}
          handleClick={handleClick}
        />
        <ColourList boardSize={boardSize} colourList={colourList} />
      </div>
    </div>
  );
}
