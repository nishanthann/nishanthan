"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Elevated", value: 128 },
  { label: "Unfiltered", value: 150 },
  { label: "Refined", value: 175 },
  { label: "Breakthrough", value: 200, highlight: true },
  { label: "Dynamic", value: 250 },
];

export default function Metrics() {
  const containerRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    rowsRef.current.forEach((row, index) => {
      if (!row) return;

      const valueElement = row.querySelector(".metric-value");
      const targetValue = metrics[index].value;

      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
      });

      if (valueElement) {
        gsap.to(valueElement, {
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            once: true,
          },
          textContent: targetValue,
          duration: 2,
          snap: { textContent: 1 },
          ease: "power1.out",
          onUpdate: function (this: gsap.core.Tween) {
            const target = this.targets()[0] as HTMLElement;
            const val = parseFloat(target.textContent || "0");
            valueElement.innerHTML = Math.ceil(val) + "+";
          },
        });
      }
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-neutral-100 text-black overflow-hidden relative"
    >
      <div className="absolute top-25 left-0 text-[20vw] leading-none font-bold text-gray-200 select-none pointer-events-none -translate-y-1/2 translate-x-12">
        10+
      </div>

      <div className="max-w-5xl mx-auto relative z-10 px-6">
        <div className="flex flex-col">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={(el) => {
                rowsRef.current[index] = el;
              }}
              className={`flex items-center justify-between py-8 border-b border-gray-300 ${
                metric.highlight ? "bg-[#FF3C00] text-white -mx-6 px-6" : ""
              }`}
            >
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                {metric.label}
              </h3>
              <div className="text-4xl md:text-6xl font-bold font-mono metric-value">
                0
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
