export default function Separator({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-solid border-slate-300 w-full ${className}`}></div>
  );
}
