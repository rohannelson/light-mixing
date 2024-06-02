export default function ColourList({
  boardSize,
  //blockSize,
  colourList,
}: {
  boardSize: number;
  //blockSize: string;
  colourList: string[];
}) {
  const listArray = new Array(boardSize).fill("");
  return (
    <div className="flex flex-col gap-1">
      {listArray.map((v, i) => {
        return <PreviewBlock /*size={blockSize}*/ background={colourList[i]} key={i} />;
      })}
    </div>
  );
}

function PreviewBlock({
  /*size,*/ background,
}: {
  /*size: string;*/ background: string;
}) {
  return (
    <div
      className={`w-full h-full bg-[#${background}] border border-solid border-black`}
    ></div>
  );
}
