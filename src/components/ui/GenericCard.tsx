export default function GenericCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex w-full flex-col p-6 border gap-4 border-slate-600 bg-zinc-900 h-fit"
    >
      {children}
    </div>
  );
}

