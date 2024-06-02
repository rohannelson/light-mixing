export default function Block({
  size,
  handleClick,
  background,
}: {
  size: string;
  handleClick: () => void;
  background: string;
}) {
  return (
    <button
      onClick={handleClick}
      className={`w-${size} bg-[#${background}] border border-solid border-black aspect-square`}
    ></button>
  );
}
