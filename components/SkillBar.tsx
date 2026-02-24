export function SkillBar({
  name,
  level,
  value,
}: {
  name: string;
  level: string;
  value: number; // 0..1
}) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div className="grid grid-cols-12 items-center gap-3">
      <div className="col-span-6">
        <div className="text-sm text-paper-100">{name}</div>
        <div className="text-[12px] muted2">{level}</div>
      </div>
      <div className="col-span-6">
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-accent-500/90"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
