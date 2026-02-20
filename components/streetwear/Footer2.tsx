"use client";

export default function Footer2() {
  return (
    <footer className="relative w-full bg-[#0D0D0D] text-white overflow-hidden">
      {/* TOP SECTION */}
      <div className="max-w-[1400px] mx-auto px-8 pt-24 pb-16 border-b border-[#1F1F1F]">
        <div className="grid grid-cols-12 gap-8">
          {/* LEFT TITLE */}
          <div className="col-span-7">
            <h2 className="text-[72px] leading-[0.95] font-extrabold tracking-[-1px] text-[#F2F2F2] uppercase">
              REDEFINING <br /> STREET CULTURE.
            </h2>
          </div>

          {/* RIGHT NAVIGATION */}
          <div className="col-span-5 flex justify-end gap-24 pt-4">
            <div className="flex flex-col gap-4 text-[15px] text-[#B3B3B3]">
              <a className="hover:text-white transition-colors">Home</a>
              <a className="hover:text-white transition-colors">About</a>
              <a className="hover:text-white transition-colors">Services</a>
            </div>

            <div className="flex flex-col gap-4 text-[15px] text-[#B3B3B3]">
              <a className="hover:text-white transition-colors">Insights</a>
              <a className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE GRID SECTION */}
      <div className="max-w-[1400px] mx-auto px-8 py-16 border-b border-[#1F1F1F]">
        <div className="grid grid-cols-12">
          {/* LEFT COLUMN */}
          <div className="col-span-4 border-r border-[#1F1F1F] pr-8">
            <div className="flex items-center gap-6 mb-10">
              <span className="text-sm text-[#888]">Streetwear</span>
              <button className="bg-[#FF3C00] text-white px-8 py-3 text-sm uppercase tracking-wide hover:opacity-90 transition">
                Back To Home
              </button>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-span-4 border-r border-[#1F1F1F] px-8">
            <p className="text-[14px] leading-[1.6] text-[#A6A6A6] max-w-[320px]">
              Fashion is the art of self-expression, transforming creativity
              into wearable forms that shape our identity, influence culture,
              and define the way we connect with the world around us.
            </p>

            <p className="text-xs uppercase text-[#777] mt-8 tracking-wide">
              BREAK THE MOLD.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-4 relative flex items-center justify-end">
            <span
              className="text-[200px] font-thin text-transparent select-none"
              style={{ WebkitTextStroke: "2px #FF3C00" }}
            >
              02
            </span>
          </div>
        </div>
      </div>

      {/* LEGAL ROW */}
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex justify-between items-center text-[13px] text-[#777]">
          <span>© 2023 Zend. All rights reserved.</span>

          <div className="flex gap-10">
            <a className="hover:text-white transition">
              Shipping info & returns
            </a>
            <a className="hover:text-white transition">Lookbook</a>
            <a className="hover:text-white transition">Terms & conditions</a>
            <a className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 text-[220px] font-extrabold text-[#111] opacity-70 pointer-events-none select-none">
        NOCTURNL
      </div>
    </footer>
  );
}
