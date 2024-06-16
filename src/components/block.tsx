export default function Block({
  size,
  handleClick,
  background,
}: {
  size: string;
  handleClick: () => void;
  background: string;
}) {
  let shadow = background == "000000" ? "shadow-[#ffffff]" : "";
  return (
    <button
      onClick={handleClick}
      className={`w-${size} bg-[#${background}] aspect-square rounded-full shadow-glow shadow-[#${background}] ${shadow}`}
    ></button>
  );
}
