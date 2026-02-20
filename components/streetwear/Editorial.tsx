"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const tags = [
  "STREETWEAR",
  "EXCLUSIVE",
  "COLLABS",
  "ESSENTIALS",
  "PERFORMANCE",
  "MINIMALIST",
];

export default function Editorial() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        tagsRef.current?.children ? Array.from(tagsRef.current.children) : [],
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.5",
      )
      .from(
        imageRef.current,
        {
          scale: 1.1,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1",
      );

    // Floating effect for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-12">
          <div className="relative">
            <h2
              ref={titleRef}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none z-10 relative"
            >
              Nike 90
              <br />
              Legacy
            </h2>
            {/* Red lighting circle background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/20 blur-[100px] rounded-full -z-10"></div>
          </div>

          <div ref={tagsRef} className="flex flex-wrap gap-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-6 py-2 border border-black rounded-full font-bold text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="max-w-md text-gray-600 font-mono text-sm leading-relaxed">
            Embracing the raw energy of urban culture. A collection that defies
            norms and sets new standards. Where heritage meets innovation.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative aspect-4/5 w-full">
          <div ref={imageRef} className="relative w-full h-full">
            <Image
              src="/pho1.avif"
              alt="Profile photo"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Overlay text */}
            <div className="absolute bottom-6 left-6 text-white mix-blend-difference font-bold text-xl tracking-widest">
              EDITION 02 / 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
