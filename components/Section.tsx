import { clsx } from "clsx";

export function Section({
  id,
  title,
  subtitle,
  children,
  right,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <section id={id} className="py-10">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-[13px] tracking-wide2 uppercase text-accent-500/95">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-sm muted max-w-3xl">{subtitle}</p>
          ) : null}
        </div>
        {right ? <div className="hidden md:block">{right}</div> : null}
      </div>
      <div className="mt-6 border-t hairline pt-6">{children}</div>
    </section>
  );
}
