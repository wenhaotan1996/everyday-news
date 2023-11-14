type Props = {};

export default function LoadingPage({}: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 px-4 py-6 md:grid-cols-2 lg:grid-cols-3">
      {new Array(6).fill(0).map((_, i) => (
        <div
          className="h-80 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700"
          key={i}
        ></div>
      ))}
    </div>
  );
}
