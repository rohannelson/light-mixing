import { $nextLevel } from "../lib/stores";
import { useStore } from "@nanostores/react";
import { capitalise } from "../lib/utils";

export default function Resume() {
  const nextLevel = useStore($nextLevel);
  const { stage, level } = nextLevel;
  return (
    <>
      {level && (
        <a
          href={`./${stage}/${level}/`}
          className="mt-2 border border-black bg-white px-2 py-1 text-black hover:underline"
        >
          {capitalise(stage)}: {level}
        </a>
      )}
    </>
  );
}
