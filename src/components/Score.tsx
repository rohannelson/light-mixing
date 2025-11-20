export default function Score({
  undos,
  misclicks,
}: {
  undos: number;
  misclicks: number;
}) {
  return (
    <dl className="mt-1 flex flex-col">
      <div className="flex">
        <dt className="font-semibold">Misclicks:&nbsp;</dt>
        <dd>{misclicks}</dd>
      </div>
      <div className="flex">
        <dt className="font-semibold">Undos:&nbsp;</dt>
        <dd>{undos}</dd>
      </div>
    </dl>
  );
}
