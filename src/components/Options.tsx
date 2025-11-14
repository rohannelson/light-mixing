import type { ChangeEvent } from "react";

export default function Options({
  handleChange,
  handleReset,
  boardSize,
  sandbox = false,
}: {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleReset: () => void;
  boardSize: number;
  sandbox?: boolean;
}) {
  const colSpan = boardSize - 2 > 0 ? boardSize - 2 : 1;
  return (
    <>
      {sandbox ? (
        <label className={`font-semibold col-span-${colSpan} w-fit self-end`}>
          Board Size
          <br />
          <select
            id="board-size"
            defaultValue="3"
            className="w-full p-1 bg-black border-white border"
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
      ) : (
        <div></div>
      )}
      {boardSize > 2 && <div />}
      <button
        type="button"
        onClick={handleReset}
        className="border border-white w-full font-semibold"
      >
        Reset
        <br />
        Game
      </button>
    </>
  );
}
