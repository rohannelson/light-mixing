import type { Dispatch, SetStateAction } from "react";

export default function ColourList({
  colourList,
  listArray,
  setColourHeldIndex,
  colourHeldIndex,
}: {
  colourList: string[];
  listArray: string[];
  setColourHeldIndex: Dispatch<SetStateAction<undefined | number>>;
  colourHeldIndex: number | undefined;
}) {
  return (
    <div className="grid grid-cols-subgrid gap-1">
      {listArray.map((v, i) => {
        return (
          <PreviewBlock
            background={colourList[i]}
            key={i}
            i={i}
            setColourHeldIndex={setColourHeldIndex}
            colourHeldIndex={colourHeldIndex}
          />
        );
      })}
    </div>
  );
}

function PreviewBlock({
  background,
  i,
  setColourHeldIndex,
  colourHeldIndex,
}: {
  background: string;
  i: number;
  setColourHeldIndex: Dispatch<SetStateAction<undefined | number>>;
  colourHeldIndex: number | undefined;
}) {
  return (
    <div
      className={`w-full h-full bg-[#${background}] border border-solid border-black aspect-square shadow-glow shadow-[#${background}] ${
        colourHeldIndex === i ? "scale-110" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        setColourHeldIndex(i);
        console.log("clicked");
      }}
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
