"use client";
import { motion } from "framer-motion";

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
    <div className="relative">
      <div className="absolute left-[10px] top-0 bottom-0 w-px bg-white/10" />
      <div className="space-y-8">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-[2px] h-5 w-5 rounded-full border border-white/20 bg-ink-900 shadow-soft grid place-items-center">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
