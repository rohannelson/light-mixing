import { $nextLevel } from "../lib/stores";
const nextLevel = $nextLevel.get();
console.log("nextLevel: ", nextLevel);

export default function Resume() {
  return (
    <>
      {nextLevel && (
        <a href="/next" className="border px-2 py-1 hover:underline">
          {nextLevel}
        </a>
      )}
    </>
  );
}
