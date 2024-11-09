export default function Block({
  size,
  handleClick,
  handleDrop,
  background,
  sandbox,
}: {
  size: string;
  handleClick: () => void;
  handleDrop: (e: React.DragEvent<HTMLButtonElement>) => void;
  background: string;
  sandbox: boolean;
}) {
  let shadow = background == "000000" ? "shadow-[#ffffff]" : "";
  return (
    <button
      onClick={handleClick}
      onDrop={(e) => {
        e.preventDefault();
        handleDrop(e);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`w-${size} bg-[#${background}] aspect-square ${
        sandbox ? "" : "rounded-full"
      } shadow-glow shadow-[#${background}] ${shadow}`}
    ></button>
  );
}
