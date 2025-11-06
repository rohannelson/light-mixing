import Block from "./block";

export default function Board({
  boardSize,
  blockSize,
  handleClick,
  handleDrop,
  boardColours,
  sandbox,
  goal,
  victory,
}: {
  boardSize: number;
  blockSize: string;
  handleClick: (i: number) => void;
  handleDrop: (e: React.DragEvent<HTMLButtonElement>, i: number) => void;
  boardColours: number[];
  sandbox: boolean;
  goal: number[];
  victory: boolean;
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
            background={boardColours[i]}
            sandbox={sandbox}
            goal={goal[i]}
            victory={victory}
          />
        );
      })}
    </div>
  );
}
