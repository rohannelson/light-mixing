export default function SkipColour({
  background,
  handleClick,
}: {
  background: string;
  handleClick: () => void;
}) {
  return (
    <div className="flex flex-col w-full">
      <button
        id="skip-button"
        onClick={handleClick}
        className={`w-full aspect-square bg-[#${background}] border border-solid border-white font-semibold`}
      >
        DISCARD
      </button>
    </div>
  );
}
