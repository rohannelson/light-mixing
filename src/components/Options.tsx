import type { ChangeEvent } from "react";

export default function Options({
  handleChange,
  handleReset,
  handleUndo,
  boardSize,
  sandbox = false,
}: {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleReset: () => void;
  handleUndo: () => void;
  boardSize: number;
  sandbox?: boolean;
}) {
  return (
    <>
      {sandbox && (
        <label
          className={`col-end-[-4] ml-auto w-fit self-end font-semibold ${boardSize > 4 && "col-span-2"}`}
        >
          Board Size
          <br />
          <select
            id="board-size"
            defaultValue="3"
            className="w-full border border-white bg-black p-1"
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
      )}
      <button
        className="col-start-[-4] mt-2 border border-solid border-white font-semibold"
        onClick={handleUndo}
      >
        Undo
      </button>
      <button
        type="button"
        onClick={handleReset}
        className="col-start-[-2] mt-2 w-full border border-white font-semibold leading-4"
      >
        Reset
        <br />
        Game
      </button>
    </>
  );
}
