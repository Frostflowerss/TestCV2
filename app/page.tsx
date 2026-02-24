import cv from "@/data/cv.json";
import { MotionController } from "@/components/MotionController";
import { HeaderHero } from "@/components/HeaderHero";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { SkillBar } from "@/components/SkillBar";
import { ProjectList } from "@/components/ProjectList";
import { Reveal } from "@/components/Reveal";

export default function Page() {
  return (
    <main className="px-4 md:px-8 relative">
      <MotionController />
      <div className="mx-auto max-w-5xl relative z-10">
        <HeaderHero name={cv.name} title={cv.title} tagline={cv.tagline} contacts={cv.contacts} />

        <Section id="summary" title="TÓM TẮT CHUYÊN MÔN" subtitle="Professional Summary">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal as="div" delay={0.2} className="text-sm leading-7 muted">{cv.summary.vi}</Reveal>
            <Reveal as="div" delay={0.4} className="text-sm leading-7 muted">{cv.summary.en}</Reveal>
          </div>
        </Section>

        <Section id="employment" title="LỊCH SỬ CÔNG VIỆC" subtitle="Employment History">
          <Timeline items={cv.employment} />
        </Section>

        <Section id="edu" title="HỌC VẤN" subtitle="Education">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {cv.education.map((e, idx) => (
                <Reveal key={idx} as="div" delay={idx * 0.25} className="rounded-2xl border hairline bg-ink-900/50 p-5">
                  <div className="text-[12px] muted2">{e.period}</div>
                  <div className="mt-1 font-semibold">{e.school}</div>
                  <div className="mt-1 text-sm muted">{e.degree}</div>
                </Reveal>
              ))}
            </div>
            <div className="space-y-4">
              {cv.courses.map((c, idx) => (
                <Reveal key={idx} as="div" delay={0.15 + idx * 0.25} className="rounded-2xl border hairline bg-ink-900/50 p-5">
                  <div className="text-[12px] muted2">{c.period}</div>
                  <div className="mt-1 font-semibold">{c.name}</div>
                  <div className="mt-1 text-sm text-accent-500/90">{c.org}</div>
                  <div className="mt-1 text-sm muted">{c.note}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" title="KĨ NĂNG PHẦN MỀM" subtitle="Software Skills">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {cv.skills.slice(0, Math.ceil(cv.skills.length / 2)).map((s, idx) => (
                <Reveal key={idx} as="div" delay={idx * 0.18}><SkillBar name={s.name} level={s.level} value={s.value} /></Reveal>
              ))}
            </div>
            <div className="space-y-4">
              {cv.skills.slice(Math.ceil(cv.skills.length / 2)).map((s, idx) => (
                <Reveal key={idx} as="div" delay={idx * 0.18}><SkillBar name={s.name} level={s.level} value={s.value} /></Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" title="KINH NGHIỆM - VAI TRÒ CHÍNH" subtitle="Experience – Primary Role">
          <ProjectList items={cv.projects} />
        </Section>

        <section id="contact" className="py-10">
          <Reveal as="div" delay={0} className="rounded-3xl border hairline bg-ink-900/60 p-8 md:p-10">
            <div className="text-[13px] tracking-wide2 uppercase text-accent-500/95">CONTACT</div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {cv.contacts.map((c, idx) => (
                <Reveal key={idx} as="div" delay={0.2 + idx * 0.2} className="rounded-2xl border hairline bg-ink-900/50 p-5">
                  <div className="text-[12px] muted2">{c.label}</div>
                  {c.href ? (
                    <a className="mt-1 block text-sm hover:text-paper-100" href={c.href}>{c.value}</a>
                  ) : (
                    <div className="mt-1 text-sm">{c.value}</div>
                  )}
                </Reveal>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/cv.pdf" className="btn px-4 py-2 rounded-xl bg-accent-500/90 text-ink-950 text-sm font-semibold hover:bg-accent-500">
                {cv.pdf.label}
              </a>
              <a href="#summary" className="btn px-4 py-2 rounded-xl border hairline text-sm muted hover:text-paper-100 hover:border-white/20">
                Back to top
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
