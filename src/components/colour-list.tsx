export default function ColourList({
  colourList,
  listArray,
}: {
  colourList: string[];
  listArray: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      {listArray.map((v, i) => {
        return <PreviewBlock background={colourList[i]} key={i} />;
      })}
    </div>
  );
}

function PreviewBlock({ background }: { background: string }) {
  return (
    <div
      className={`w-full bg-[#${background}] border border-solid border-black aspect-square`}
    ></div>
  );
}
