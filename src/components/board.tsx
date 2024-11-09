import Block from "./block";
import { type BoardColour } from "../lib/types";

export default function Board({
  boardSize,
  blockSize,
  handleClick,
  handleDrop,
  boardColours,
  sandbox,
}: {
  boardSize: number;
  blockSize: string;
  handleClick: (i: number) => void;
  handleDrop: (e: React.DragEvent<HTMLButtonElement>, i: number) => void;
  boardColours: BoardColour[];
  sandbox: boolean;
}) {
  const sizeArray = new Array(boardSize ** 2).fill("");

  return (
    <div
      className={`grid grid-cols-${boardSize} gap-1 w-full col-span-${boardSize}`}
    >
      {sizeArray.map((v, i) => {
        return (
          <Block
            size={blockSize}
            key={i}
            handleClick={() => handleClick(i)}
            handleDrop={(e) => handleDrop(e, i)}
            background={boardColours[i].colour}
            sandbox={sandbox}
          />
        );
      })}
    </div>
  );
}
