import type { SetStateAction, Dispatch } from "react";

export default function Options({
  setBoardSize,
}: {
  setBoardSize: Dispatch<SetStateAction<number>>;
}) {
  return (
    <label className="font-semibold">
      Board Size
      <select
        id="board-size"
        defaultValue="3"
        className="w-full p-1"
        onChange={(e) => {
          setBoardSize(parseInt(e.currentTarget.value));
        }}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </label>
  );
}
