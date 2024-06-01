//Note to self - set 'blockSize' as a css variable rather than a prop
import { useState } from "react";
import Board from "./board";
import ColourList from "./colour-list";
import SkipColour from "./skip";
import Score from "./score";

export default function Game() {
  const blockSize = 24;
  const boardSize = 3;
  const [boardColours, setBoardColours] = useState(
    new Array(boardSize ** 2).fill("000000")
  );
  const colourOptions = ["ff0000", "00ff00", "0000ff"];
  const possibleColours = [...colourOptions, "ffff00", "00ffff", "ff00ff", "ffffff"];

  const listArray = new Array(boardSize).fill("");

  function randomColour() {
    return colourOptions[Math.floor(Math.random() * colourOptions.length)];
  }

  const [colourList, setColourList] = useState(
    listArray.map(() => {
      return randomColour();
    })
  );

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

  return (
    <>
      <div className="flex flex-col">
        <SkipColour
          size={blockSize}
          background={skipBackground}
          handleClick={handleSkipClick}
        />
        <Score moves={moves} misclicks={misclicks} skips={skips} />
      </div>
      <Board
        boardSize={boardSize}
        blockSize={blockSize}
        boardColours={boardColours}
        handleClick={handleClick}
      />
      <ColourList boardSize={boardSize} blockSize={blockSize} colourList={colourList} />
    </>
  );
}
