export default function Score({
  moves,
  misclicks,
}: // skips,
{
  moves: number;
  misclicks: number;
  // skips: number;
}) {
  return (
    <dl className="flex flex-col mt-1 col-span-2">
      <div className="flex">
        <dt className="font-semibold">Moves:&nbsp;</dt>
        <dd>{moves}</dd>
      </div>
      {/* <div className="flex">
        <dt className="font-semibold">Skips:&nbsp;</dt>
        <dd>{skips}</dd>
      </div> */}
      <div className="flex">
        <dt className="font-semibold text-sm">Misclicks:&nbsp;</dt>
        <dd>{misclicks}</dd>
      </div>
    </dl>
  );
}
