export default function ColourList({
  boardSize,
  blockSize,
  colourList,
}: {
  boardSize: number;
  blockSize: number;
  colourList: string[];
}) {
  const listArray = new Array(boardSize).fill("");
  return (
    <div className="flex flex-col gap-1">
      {listArray.map((v, i) => {
        return <PreviewBlock size={blockSize} background={colourList[i]} key={i} />;
      })}
    </div>
  );
}

function PreviewBlock({ size, background }: { size: number; background: string }) {
  return (
    <div
      className={`w-${size} h-${size} bg-[#${background}] border border-solid border-black`}
    ></div>
  );
}
