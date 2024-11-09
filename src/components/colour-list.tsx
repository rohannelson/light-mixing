export default function ColourList({
  colourList,
  listArray,
}: {
  colourList: string[];
  listArray: string[];
}) {
  return (
    <div className="grid grid-cols-subgrid gap-1">
      {listArray.map((v, i) => {
        return <PreviewBlock background={colourList[i]} key={i} i={i} />;
      })}
    </div>
  );
}

function PreviewBlock({ background, i }: { background: string; i: number }) {
  return (
    <div
      className={`w-full h-full bg-[#${background}] border border-solid border-black aspect-square shadow-glow shadow-[#${background}]`}
      draggable={true}
      onDrag={(e) => {
        e.preventDefault();
        console.log("background: ", background);
      }}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", i.toString());
      }}
    ></div>
  );
}
