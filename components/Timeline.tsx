import { Reveal } from "./Reveal";

export function Timeline({
  items,
}: {
  items: Array<{
    period: string;
    role: string;
    company: string;
    highlights: string[];
  }>;
}) {
  return (
    <Reveal className="tline" as="div" delay={0}>
      <div className="space-y-8 relative pl-10">
        {items.map((it, idx) => (
          <Reveal key={idx} as="div" delay={idx * 0.65} className="relative">
            <div className="absolute left-[-30px] top-[2px] h-5 w-5 rounded-full border border-white/20 bg-ink-900 shadow-soft grid place-items-center">
              <div className="h-2 w-2 rounded-full bg-accent-500/90" />
            </div>

            <div className="text-[12px] muted2">{it.period}</div>
            <div className="mt-1 text-base font-semibold">{it.role}</div>
            <div className="text-sm text-accent-500/90">{it.company}</div>

            <ul className="mt-3 space-y-2 text-sm muted list-disc pl-5">
              {it.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
