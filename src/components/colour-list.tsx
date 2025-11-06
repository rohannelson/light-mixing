import type { Dispatch, SetStateAction } from "react";
import { toHexStr } from "../lib/utils";

export default function ColourList({
  colourList,
  listArray,
  setColourHeldIndex,
  colourHeldIndex,
}: {
  colourList: number[];
  listArray: string[];
  setColourHeldIndex: Dispatch<SetStateAction<number>>;
  colourHeldIndex: number;
}) {
  return (
    <div className="grid grid-cols-subgrid gap-1">
      {listArray.map((v, i) => {
        return (
          <PreviewBlock
            background={colourList?.[i] ?? 0}
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
  background: number;
  i: number;
  setColourHeldIndex: Dispatch<SetStateAction<number>>;
  colourHeldIndex: number;
}) {
  return (
    <div
      className={`w-full h-full bg-[${toHexStr(
        background
      )}] border border-solid border-black aspect-square shadow-glow shadow-[${toHexStr(
        background
      )}] ${colourHeldIndex === i ? "scale-110" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setColourHeldIndex(i);
      }}
      draggable={true}
      onDrag={(e) => {
        e.preventDefault();
      }}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", i.toString());
      }}
    ></div>
  );
}
