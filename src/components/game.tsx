import { useState } from "react";
import Board from "./board";
import ColourList from "./colour-list";

export default function Game() {
  const blockSize = 24;
  const boardSize = 3;
  const [boardColours, setBoardColours] = useState(
    new Array(boardSize ** 2).fill("#000000")
  );
  const colourOptions = ["#ff0000", "#00ff00", "#0000ff"];

  const listArray = new Array(boardSize).fill("");

  function randomColour() {
    return colourOptions[Math.floor(Math.random() * colourOptions.length)];
  }

  const [colourList, setColourList] = useState(
    listArray.map(() => {
      return randomColour();
    })
  );

  function handleClick(i: number) {
    let newBoardColours = [...boardColours];
    newBoardColours[i] = colourList[0];
    setBoardColours(newBoardColours);
    let newColourList = [colourList[1], colourList[2], randomColour()];
    setColourList(newColourList);
  }

  return (
    <>
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
