"use client";

import { useRef, useLayoutEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import {
  AuthJS,
  BetterAuth,
  Express,
  Framer,
  MongoDB,
  NextJs,
  Node,
  React,
  Tailwind,
  TypeScript,
} from "./Icons";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Invoicer",
      description:
        "Vehicle Booking Lite app enabling users to view, search, book, and manage vehicles through dashboard. CRUD operations for efficient booking.",
      image: "/einvoicer.webp",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-400",
      tags: [
        { icon: <TypeScript className="w-4 h-4" />, label: "TypeScript" },
        { icon: <NextJs className="w-4 h-4" />, label: "Next.js" },
        { icon: <AuthJS className="w-4 h-4" />, label: "AuthJS" },
        { icon: <Tailwind className="w-4 h-4" />, label: "Tailwind" },
      ],
      website: "https://e-invoice-rho.vercel.app",
      github: "https://github.com/example",
    },
    {
      title: "Nextus LMS",
      description:
        "Lightweight Learning Management System with admin/user dashboards, Stripe payments, drag-and-drop course builder, file uploads, and server actions.",
      image: "/lms.webp",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      tags: [
        { icon: <NextJs className="w-4 h-4" />, label: "Next.js" },
        { icon: <TypeScript className="w-4 h-4" />, label: "TypeScript" },
        { icon: <BetterAuth className="w-4 h-4" />, label: "BetterAuth" },
        { icon: <Tailwind className="w-4 h-4" />, label: "Tailwind" },
      ],
      website: "https://lms-nextjs-theta.vercel.app/",
      github: "https://github.com/yourusername/learnflow-lms",
    },
    {
      title: "Go Rentals",
      description:
        "Vehicle Booking Lite app enabling users to view, search, book, and manage vehicles through dashboard. CRUD operations for efficient booking.",
      image: "/gorental.webp",
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-400",
      tags: [
        { icon: <React className="w-4 h-4" />, label: "React" },
        { icon: <Node className="w-4 h-4" />, label: "Node" },
        { icon: <Express className="w-4 h-4" />, label: "Express" },
        { icon: <MongoDB className="w-4 h-4" />, label: "MongoDB" },
      ],
      website: "https://go-rental-lyart.vercel.app/",
      github: "https://github.com/nishanthann/go-rental",
    },
    {
      title: "Bridal Beauty Suite",
      description:
        "Comprehensive bridal makeup booking platform featuring artist portfolios, trial scheduling, package customization, and real-time availability management.",
      image: "/sh.webp",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-400",
      tags: [
        { icon: <NextJs className="w-4 h-4" />, label: "Next.js" },
        { icon: <Tailwind className="w-4 h-4" />, label: "Tailwind" },
        { icon: <Framer className="w-4 h-4" />, label: "Framer" },
      ],
      website: "https://shbridalmakeover.com/",
      github: "https://github.com/yourusername/bridal-beauty-suite",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate horizontal scroll distance
      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden "
    >
      {/* Horizontal Scroll Track */}
      <div
        ref={trackRef}
        className="flex items-center h-full gap-8 pl-8 md:pl-16 md:mt-10"
        style={{ willChange: "transform" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}

        {/* "View All" Final Slide */}
        <div className="shrink-0 w-[50vw] md:w-[30vw] h-[75vh] rounded-3xl flex flex-col items-center justify-center bg-primary/5 border border-primary/20">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more?
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-white transition-all duration-300 group bg-primary/10 hover:bg-primary px-8 py-3 rounded-full border border-primary/20 hover:border-transparent"
          >
            View all projects
            <ChevronsRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
