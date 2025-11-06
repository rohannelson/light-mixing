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
      className={`w-${size} bg-[${toHexStr(background)}] aspect-square ${
        sandbox ? "" : "rounded-full"
      } ${shadow} shadow-[${toHexStr(goal)}]`}
    ></button>
  );
}
