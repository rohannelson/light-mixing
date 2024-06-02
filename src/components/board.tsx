import Block from "./block";

export default function Board({
  boardSize,
  blockSize,
  handleClick,
  boardColours,
}: {
  boardSize: number;
  blockSize: string;
  handleClick: (i: number) => void;
  boardColours: string[];
}) {
  const sizeArray = new Array(boardSize ** 2).fill("");

  return (
    <div
      className={`bg-white grid grid-cols-${boardSize} gap-1 w-full col-span-${boardSize} grid-rows-[min-content]`}
    >
      {sizeArray.map((v, i) => {
        return (
          <Block
            size={blockSize}
            key={i}
            handleClick={() => handleClick(i)}
            background={boardColours[i]}
          />
        );
      })}
    </div>
  );
}
