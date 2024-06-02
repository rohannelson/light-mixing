export default function ColourList({
  boardSize,
  colourList,
}: {
  boardSize: number;
  colourList: string[];
}) {
  const listArray = new Array(boardSize).fill("");
  return (
    <div className="flex flex-col gap-1">
      {listArray.map((v, i) => {
        return <PreviewBlock background={colourList[i]} key={i} />;
      })}
    </div>
  );
}

function PreviewBlock({ background }: { background: string }) {
  return (
    <div
      className={`w-full h-full bg-[#${background}] border border-solid border-black`}
    ></div>
  );
}
