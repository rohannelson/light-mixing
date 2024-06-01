import { useState } from "react";
export default function Block({
  size,
  handleClick,
  background,
}: {
  size: number;
  handleClick: () => void;
  background: string;
}) {
  return (
    <button
      onClick={handleClick}
      className={`w-${size} h-${size} bg-[#${background}] border border-solid border-black`}
    ></button>
  );
}
