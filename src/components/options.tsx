import type { ChangeEvent } from "react";

export default function Options({
  handleChange,
}: {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
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
  );
}
