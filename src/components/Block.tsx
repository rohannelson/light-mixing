import type React from "react";
import { toHexStr } from "../lib/utils";

export default function Block({
  size,
  handleClick,
  handleDrop,
  background,
  sandbox,
  goal,
  victory,
}: {
  size: string;
  handleClick: () => void;
  handleDrop: (e: React.DragEvent<HTMLButtonElement>) => void;
  background: number;
  sandbox: boolean;
  goal: number;
  victory: boolean;
}) {
  let shadow = "shadow-empty";
  if (victory) {
    shadow = "transition-shadow duration-[1200ms] shadow-win";
  } else if (background === goal) {
    shadow = "shadow-match";
  } else if (background !== 0x000000) {
    shadow = "shadow-glow";
  }

  const starry = `absolute left-1/2 top-1/2
    w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2
    pointer-events-none blur-[2px] contrast-[1.2]
    [background:repeating-conic-gradient(from_0deg,rgba(var(--goal-r),var(--goal-g),var(--goal-b),0.98)_0deg_3deg,rgba(255,255,255,0)_0deg_45deg)]
    [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)] z-[-1]
  `;

  return (
    <button
      onClick={handleClick}
      onDrop={(e) => {
        e.preventDefault();
        handleDrop(e);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`w-${size} relative bg-[${toHexStr(background)}] aspect-square ${
        sandbox ? "" : "rounded-full"
      } ${shadow} shadow-[${toHexStr(goal)}]`}
      style={
        {
          "--goal-r": (goal >> 16) & 255,
          "--goal-g": (goal >> 8) & 255,
          "--goal-b": goal & 255,
        } as React.CSSProperties
      }
    >
      <span className={goal.toString(16).includes("8") ? starry : ""}></span>
    </button>
  );
}
