"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(leftImageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        rightImageRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      )
      .from(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .from(
        buttonRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      );

    // Parallax effect
    gsap.to(leftImageRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(rightImageRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Column - Large Image */}
        <div
          ref={leftImageRef}
          className="relative aspect-3/4 w-full border border-white/20"
        >
          <div className="absolute inset-0 bg-neutral-800">
            <Image
              src="/pho1.avif"
              alt="Profile photo"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </div>

          {/* Decorative Grid Lines */}
          <div className="absolute -left-4 top-1/2 w-8 h-px bg-[#FF3C00]"></div>
          <div className="absolute left-1/2 -bottom-4 w-px h-8 bg-[#FF3C00]"></div>
        </div>

        {/* Right Column - Product Details & Smaller Image */}
        <div className="flex flex-col gap-8">
          <div
            ref={rightImageRef}
            className="relative aspect-square w-full max-w-md ml-auto border border-[#FF3C00]/30 bg-[#FF3C00]/10"
          >
            <Image
              src="/profile3.jpg"
              alt="Profile photo"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />

            <div className="absolute bottom-4 left-4 text-[#FF3C00] font-mono text-xs">
              LIMITED EDITION / 005
            </div>
          </div>

          <div className="space-y-6 mt-12 text-right">
            <h2
              ref={titleRef}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
            >
              Nike 90
              <br />
              <span className=" font-outline-1 text-white">National</span>
            </h2>

            <div
              className="flex items-center justify-end gap-6"
              ref={buttonRef}
            >
              <span className="text-[#FF3C00] font-bold text-xl">$ 280.00</span>
              <button className="bg-[#FF3C00] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white h-full"></div>
        ))}
      </div>
    </section>
  );
}
