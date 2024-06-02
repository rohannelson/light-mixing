export default function SkipColour({
  //size,
  background,
  handleClick,
}: {
  //size: string;
  background: string;
  handleClick: () => void;
}) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="skip-button" className="w-full text-center">
        SKIP COLOUR
      </label>
      <button
        id="skip-button"
        onClick={handleClick}
        className={`w-full aspect-square bg-[#${background}] border border-solid border-black`}
      ></button>
    </div>
  );
}
