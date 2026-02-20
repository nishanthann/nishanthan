import { cn } from "@/lib/utils";
import { Rubik_Glitch } from "next/font/google";

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400", // only available weight
});

export default function BigBackgroundText() {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 w-full
                 h-[200vh] flex items-center justify-center
                 z-0 select-none"
    >
      <h1
        className={cn(
          rubikGlitch.className,
          "text-[20vw] font-extrabold leading-none text-foreground/5 whitespace-nowrap",
        )}
      >
        Nonchalent
      </h1>
    </div>
  );
}
