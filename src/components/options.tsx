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
  const gapArray = new Array(boardSize - 2).fill("");
  console.log(gapArray);
  return (
    <>
      <label className="font-semibold">
        Board Size
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
      {gapArray.map((v, i) => (
        <div key={i} />
      ))}
      <button
        type="button"
        onClick={handleReset}
        className="border border-slate-400 w-full"
      >
        Reset
        <br />
        Game
      </button>
    </>
  );
}
