"use client";

export default function ShowcaseSection() {
  return (
    <section className="relative w-full bg-black text-white border-t border-[#1A1A1A] border-b border-[#1A1A1A]">
      {/* OUTER CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-20 py-20">
        {/* 12 COLUMN GRID */}
        <div className="grid grid-cols-12 border border-[#1A1A1A]">
          {/* ================= LEFT LARGE BLOCK ================= */}
          <div className="col-span-6 border-r border-[#1A1A1A] relative">
            {/* top micro text */}
            <div className="absolute top-6 left-6 text-[12px] tracking-wide text-[#B3B3B3] uppercase">
              // PUSH THE BOUNDARIES OF STYLE.
            </div>

            {/* image */}
            <div className="h-[420px] flex items-center justify-center">
              <img
                src="/jacket.jpg"
                alt="Acronym Jacket"
                className="h-[340px] object-contain"
              />
            </div>

            {/* overlay title */}
            <div className="absolute left-6 bottom-24 text-[52px] font-extrabold tracking-tight">
              ACRONYM®
            </div>

            {/* bottom caption */}
            <div className="absolute left-6 bottom-6 text-[12px] text-[#A6A6A6] uppercase tracking-wide">
              PUSH THE BOUNDARIES OF STYLE.
            </div>
          </div>

          {/* ================= RIGHT LARGE BLOCK ================= */}
          <div className="col-span-6 border-b border-[#1A1A1A] relative p-10">
            <div className="space-y-2">
              <h3 className="text-[28px] font-bold uppercase">Nike</h3>
              <h2 className="text-[46px] font-extrabold uppercase leading-tight">
                90 National
              </h2>
            </div>

            {/* button + price */}
            <div className="flex items-center mt-6">
              <button className="bg-[#FF3C00] text-white text-[14px] px-6 py-3 uppercase tracking-wide">
                Add to Cart
              </button>
              <span className="ml-auto text-[14px] text-[#FF3C00]">$90</span>
            </div>

            {/* orange slash + text block */}
            <div className="flex items-start gap-6 mt-16">
              <div className="text-[36px] text-[#FF3C00] font-bold">/</div>

              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <span className="text-[10px] px-3 py-1 border border-[#333] rounded-full uppercase">
                    You're The Worst
                  </span>
                  <span className="text-[10px] px-3 py-1 bg-[#FF3C00] rounded-full uppercase">
                    1995 Bold
                  </span>
                </div>

                <p className="text-[13px] text-[#8C8C8C] max-w-[260px] leading-relaxed">
                  More than fashion—this is movement. Designed for those who
                  dare to stand out.
                </p>
              </div>
            </div>
          </div>

          {/* ================= LOWER PRODUCT ROW ================= */}

          {/* LEFT SMALL CARD */}
          <div className="col-span-4 border-r border-[#1A1A1A] border-b border-[#1A1A1A] relative p-6">
            <span className="absolute top-4 right-4 text-[11px] text-[#FF3C00]">
              $90
            </span>
            <img
              src="/orange-shirt.jpg"
              alt="Orange Shirt"
              className="h-[180px] mx-auto object-contain"
            />
          </div>

          {/* CENTER CARD */}
          <div className="col-span-4 border-r border-[#1A1A1A] border-b border-[#1A1A1A] relative p-6">
            <span className="absolute top-4 left-6 text-[11px] uppercase">
              1995 Bold Tee
            </span>
            <img
              src="/white-tee.jpg"
              alt="White Tee"
              className="h-[180px] mx-auto object-contain mt-6"
            />
            <span className="absolute top-4 right-4 text-[11px] text-[#FF3C00]">
              $90
            </span>
          </div>

          {/* RIGHT CARD */}
          <div className="col-span-4 border-b border-[#1A1A1A] relative p-6">
            <span className="absolute top-4 right-4 text-[11px] text-[#FF3C00]">
              $90
            </span>
            <img
              src="/red-sweatshirt.jpg"
              alt="Red Sweatshirt"
              className="h-[180px] mx-auto object-contain"
            />
          </div>

          {/* ================= BOTTOM LEFT 10+ ================= */}
          <div className="col-span-6 border-r border-[#1A1A1A] relative h-[220px] flex items-end p-10">
            <div className="flex items-end leading-none">
              <span className="text-[140px] font-extrabold text-[#F2F2F2]">
                10
              </span>
              <span className="text-[140px] font-extrabold text-[#FF3C00] ml-2">
                +
              </span>
            </div>
          </div>

          {/* ================= BOTTOM RIGHT TAG BLOCK ================= */}
          <div className="col-span-6 relative h-[220px] flex flex-col justify-end items-end p-10">
            <span className="text-[10px] px-3 py-1 border border-[#333] rounded-full uppercase mb-4">
              Streetwear
            </span>

            <p className="text-[13px] uppercase text-right max-w-[240px] leading-relaxed">
              Crafted for visionaries, rebels, and trendsetters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
