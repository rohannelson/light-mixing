import type { ChangeEvent } from "react";

export default function Options({
  handleChange,
  handleReset,
  boardSize,
}: {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleReset: () => void;
  boardSize: number;
}) {
  const colSpan = boardSize - 2 > 0 ? boardSize - 2 : 1;
  console.log(colSpan);
  return (
    <>
      <label className={`font-semibold col-span-${colSpan} w-fit`}>
        Board Size
        <br />
        <select
          id="board-size"
          defaultValue="3"
          className="w-full p-1"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <div />
      <button
        type="button"
        onClick={handleReset}
        className="border border-slate-400 w-full font-semibold"
      >
        Reset
        <br />
        Game
      </button>
    </>
  );
}
