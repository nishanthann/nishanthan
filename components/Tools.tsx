"use client";
import { Badge } from "@/components/ui/badge";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Antigravity,
  AuthJS,
  BetterAuth,
  CoPilot,
  Css,
  Docker,
  Express,
  Git,
  GitHub,
  JavaScript,
  MongoDB,
  Mongoose,
  Motionframer,
  Mui,
  NextJs,
  Node,
  Npm,
  Pnpm,
  Postgres,
  Postman,
  Prisma,
  React as ReactIcon,
  ReactQuery,
  Redux,
  ShadCN,
  Tailwind,
  TypeScript,
  Vercel,
  VScode,
  Zod,
} from "./Icons";
import { TitleSection } from "./ui/TitleSection";

gsap.registerPlugin(ScrollTrigger);

export function BadgeFormation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const rows = containerRef.current.querySelectorAll(".tool-row");

      // Set initial state for all rows
      rows.forEach((row, i) => {
        const isOdd = i % 2 !== 0;
        const direction = isOdd ? 100 : -100;
        gsap.set(row, { xPercent: direction, opacity: 0 });
      });

      // All rows slide IN at the same time (no stagger)
      rows.forEach((row, i) => {
        const isOdd = i % 2 !== 0;
        const direction = isOdd ? 100 : -100;

        gsap.fromTo(
          row,
          { xPercent: direction, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom-=100",
              end: "top 30%",
              scrub: 1,
            },
          },
        );

        // All rows slide OUT at the same time
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <TitleSection
        title="Tools of the Trade"
        description="The tools, libraries, and frameworks that help me craft seamless digital experiences."
      />
      <div
        ref={containerRef}
        className="relative mx-auto flex sm:mt-10 w-full max-w-3xl flex-col items-center gap-4 px-10 "
      >
        {/* Row 1 */}
        <div className="tool-row flex flex-wrap justify-center gap-3">
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <NextJs />
            </div>
            NextJS
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <ReactIcon />
            </div>
            React
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Node />
            </div>
            NodeJS
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Express />
            </div>
            Express
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <VScode />
            </div>
            VScode
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Antigravity />
            </div>
            Antigravity
          </Badge>
        </div>

        {/* Row 2 */}
        <div className="tool-row flex flex-wrap justify-center gap-3">
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <TypeScript />
            </div>
            TypeScript
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <JavaScript />
            </div>
            JavaScript
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Css />
            </div>
            CSS
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Tailwind />
            </div>
            Tailwind
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <ShadCN />
            </div>
            ShadCN
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Mui />
            </div>
            MUI
          </Badge>
        </div>

        {/* Row 3 */}
        <div className="tool-row flex flex-wrap justify-center gap-3">
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <MongoDB />
            </div>
            MongoDB
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Postgres />
            </div>
            PostgreSQL
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Mongoose />
            </div>
            Mongoose
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Prisma />
            </div>
            Prisma
          </Badge>
        </div>

        {/* Row 5 */}
        <div className="tool-row flex flex-wrap justify-center gap-3">
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Redux />
            </div>
            Redux
          </Badge>

          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <ReactQuery />
            </div>
            Tanstack Query
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <BetterAuth />
            </div>
            BetterAuth
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <AuthJS />
            </div>
            AuthJS
          </Badge>

          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Zod />
            </div>
            Zod
          </Badge>
        </div>

        {/* Row 6 */}
        <div className="tool-row flex flex-wrap justify-center gap-3">
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Git />
            </div>
            Git
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <GitHub />
            </div>
            GitHub
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <CoPilot />
            </div>
            CoPilot
          </Badge>
        </div>

        {/* Row 7 */}
        <div className="tool-row flex gap-3">
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Docker />
            </div>
            Docker
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Postman />
            </div>
            Postman
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Motionframer />
            </div>
            Framer Motion
          </Badge>
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Vercel />
            </div>
            Vercel
          </Badge>
        </div>

        {/* Row 8 */}
        <div className="tool-row flex flex-wrap justify-center gap-3">
          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Npm />
            </div>
            npm
          </Badge>

          <Badge
            variant={"outline"}
            className="text-[10px] px-2 py-0.5 md:text-sm md:px-3 md:py-1"
          >
            <div>
              <Pnpm />
            </div>
            Pnpm
          </Badge>
        </div>
      </div>
    </div>
  );
}
