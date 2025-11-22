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
      } ${shadow} shadow-[${toHexStr(goal)}] after:absolute after:inset-0 after:rounded-full after:content-[''] after:[background:radial-gradient(circle_closest-corner,transparent_0%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.4)_100%)]`}
      style={
        {
          "--goal-r": (goal >> 16) & 255,
          "--goal-g": (goal >> 8) & 255,
          "--goal-b": goal & 255,
        } as React.CSSProperties
      }
    >
      {goal.toString(16).includes("8") && (
        <span
          className={
            "pointer-events-none absolute left-1/2 top-1/2 z-[-1] h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 blur-[1px] contrast-[1.2] [background:repeating-conic-gradient(from_0deg,rgba(var(--goal-r),var(--goal-g),var(--goal-b),0.98)_0deg_3deg,rgba(255,255,255,0)_0deg_45deg)] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)]"
          }
        ></span>
      )}
    </button>
  );
}
