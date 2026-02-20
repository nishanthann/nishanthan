"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headlineRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    })
      .from(
        numberRef.current,
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1",
      )
      .from(
        navRef.current,
        {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .from(
        imageRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8",
      );
  }, []);

  return (
    <section className="relative h-screen w-full bg-white text-black overflow-hidden flex flex-col justify-between p-6 md:p-12">
      {/* Nav */}
      <nav ref={navRef} className="flex justify-between items-start z-10">
        <div className="text-sm font-bold tracking-widest uppercase">
          Street / Wear / 2026
        </div>
        <div className="flex gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#" className="hover:text-[#FF3C00] transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-[#FF3C00] transition-colors">
            Collections
          </a>
          <a href="#" className="hover:text-[#FF3C00] transition-colors">
            About
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <h1
          ref={headlineRef}
          className="text-7xl md:text-[10rem] leading-none font-black tracking-tighter uppercase"
        >
          Break
          <br />
          The Mold.
        </h1>
      </div>

      {/* Decorative Elements */}
      <div
        ref={numberRef}
        className="absolute top-1/2 right-12 -translate-y-1/2 text-[15rem] md:text-[30rem] font-bold text-transparent font-outline-2 opacity-20 pointer-events-none select-none"
        style={{
          WebkitTextStroke: "2px #FF3C00",
        }}
      >
        02
      </div>

      <div
        ref={imageRef}
        className="absolute top-24 right-12 w-32 h-40 md:w-64 md:h-80 bg-gray-200 overflow-hidden"
      >
        {/* Placeholder for artistic portrait */}
        <div className="w-full h-full bg-neutral-300 relative grayscale contrast-125">
          <Image
            src="/pho1.avif"
            alt="Portrait"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="flex justify-between items-end z-10">
        <div className="text-xs font-mono max-w-[200px]">
          PREMIUM STREETWEAR COLLECTION. DESIGNED FOR THE BOLD. CRAFTED FOR THE
          FUTURE.
        </div>
        <div className="text-sm font-bold animate-bounce">SCROLL DOWN</div>
      </div>
    </section>
  );
}
