type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-md animate-pulse space-y-6 overflow-x-hidden px-3 py-6 md:max-w-lg md:py-10 lg:max-w-2xl">
        <div className="h-80 w-full rounded-lg bg-slate-200 dark:bg-slate-700"></div>
        {new Array(5).fill(0).map((_, i) => (
          <div
            className="h-2 w-full rounded bg-slate-200 dark:bg-slate-700"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
