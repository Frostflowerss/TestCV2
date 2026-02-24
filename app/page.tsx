
"use client";
import { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          const bars = entry.target.querySelectorAll(".skill-fill");
          bars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width") + "%";
          });
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / height) * 100;
      document.getElementById("progressBar").style.width = progress + "%";

      document.querySelectorAll(".parallax").forEach(el => {
        el.style.transform = `translateY(${scrollTop * 0.05}px)`;
      });
    });

    document.querySelectorAll(".magnetic").forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
      });
    });

  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-32">

      <section className="fade-up parallax">
        <h1 className="text-4xl font-semibold">
          PHAM NGOC THIEM <span className="text-accent">| ARCHITECT</span>
        </h1>
        <p className="mt-4 opacity-80">6+ Years Experience</p>
      </section>

      <section className="fade-up">
        <div className="section-title">Professional Summary</div>
        <p className="mt-6 leading-7 opacity-80">
          Architect with over 6 years of BIM and architectural experience.
        </p>
      </section>

      <section className="fade-up">
        <div className="section-title">Software Skills</div>
        <div className="mt-8 space-y-6">
          <div className="glow-card p-5 rounded-xl border border-white/10">
            <div>Revit</div>
            <div className="skill-bar mt-3">
              <div className="skill-fill" data-width="92"></div>
            </div>
          </div>
          <div className="glow-card p-5 rounded-xl border border-white/10">
            <div>Navisworks</div>
            <div className="skill-bar mt-3">
              <div className="skill-fill" data-width="88"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up">
        <div className="section-title">Employment</div>
        <div className="mt-8 glow-card p-6 rounded-xl border border-white/10">
          <div className="font-semibold">2022 – Present</div>
          <div className="text-accent">BIM Manager – VNCC</div>
        </div>
      </section>

      <section className="fade-up">
        <button className="magnetic px-6 py-3 bg-accent text-black rounded-full font-semibold">
          Download CV
        </button>
      </section>

    </main>
  );
}
