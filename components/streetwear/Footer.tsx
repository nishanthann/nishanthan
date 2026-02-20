"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-8">
          <h2
            ref={textRef}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none max-w-2xl"
          >
            Redefining
            <br />
            Street Culture.
          </h2>

          <div className="flex gap-8 text-sm font-mono text-gray-400">
            <Link
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Discord
            </Link>
          </div>

          <div className="text-xs text-gray-600 uppercase tracking-widest mt-12">
            © 2026 Streetwear Inc. All Rights Reserved.
          </div>
        </div>

        <div className="text-[10rem] font-bold text-transparent font-outline-1 opacity-20 pointer-events-none select-none leading-none">
          02
        </div>
      </div>
    </footer>
  );
}
