export default function GradientCard({ className = "", children }) {
  return (
    <div
      className={`rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(56,189,248,0.2)] ${className}`}
    >
      {children}
    </div>
  );
}
