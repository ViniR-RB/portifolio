export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
      <span className="block size-2 rounded-full bg-green-400 animate-pulse"></span>
      <span className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
        Disponível para Projetos
      </span>
    </div>
  );
}
