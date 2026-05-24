export default function TechBadge({ children }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-slate-900/80 px-3 py-1 text-xs text-cyan-200">
      {children}
    </span>
  );
}
