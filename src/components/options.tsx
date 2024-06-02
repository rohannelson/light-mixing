import type { ChangeEvent } from "react";
import Separator from "./separator";

export default function Options({
  handleChange,
  handleReset,
}: {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleReset: () => void;
}) {
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
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <Separator className="my-2" />
      <button type="button" onClick={handleReset} className="border border-slate-400 p-1">
        Reset Game
      </button>
    </>
  );
}
