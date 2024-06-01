export default function SkipColour({
  size,
  background,
  handleClick,
}: {
  size: number;
  background: string;
  handleClick: () => void;
}) {
  return (
    <div className="flex flex-col">
      <button
        id="skip-button"
        onClick={handleClick}
        className={`w-${size} h-${size} bg-[#${background}] border border-solid border-black`}
      ></button>
      <label htmlFor="skip-button" className="w-full text-center">
        SKIP COLOUR
      </label>
    </div>
  );
}
