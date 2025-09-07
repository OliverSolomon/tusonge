"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

export type ViewKey = "battery" | "wheelchair" | "attachment";

const IMAGE_MAP: Record<ViewKey, { src: string; alt: string }> = {
  battery: {
    src: "/sample-3rdwheel.png",
    alt: "Tusonge battery module in the front attachment",
  },
  wheelchair: {
    src: "/sample-wheelchair-attached.png",
    alt: "Manual wheelchair with Tusonge attachment",
  },
  attachment: {
    src: "/sample-3rdwheel.png",
    alt: "Tusonge front attachment, standalone",
  },
};

export default function DonateMedia() {
  const [view, setView] = useState<ViewKey>("wheelchair");
  const [zoomed, setZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Pick a focal point in percentages (x,y) depending on view
  const focal = useMemo(() => {
    switch (view) {
      case "battery":
        return { x: 65, y: 60 }; // approximate area of the battery pack
      case "wheelchair":
        return { x: 50, y: 50 };
      case "attachment":
      default:
        return { x: 50, y: 55 };
    }
  }, [view]);

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <div
          ref={containerRef}
          className={"relative overflow-hidden rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 aspect-[16/10]"}
        >
          <Image
            src={IMAGE_MAP[view].src}
            alt={IMAGE_MAP[view].alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`select-none transition-transform duration-500 ease-out object-cover ${
              zoomed ? "scale-[1.8]" : "scale-100"
            }`}
            style={{
              transformOrigin: `${focal.x}% ${focal.y}%`,
            }}
            priority={false}
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm border ${
              view === "battery"
                ? "bg-foreground text-background border-transparent"
                : "border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
            onClick={() => setView("battery")}
          >
            Zoom in on the battery
          </button>
          <button
            className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm border ${
              view === "wheelchair"
                ? "bg-foreground text-background border-transparent"
                : "border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
            onClick={() => setView("wheelchair")}
          >
            View the wheelchair
          </button>
          <button
            className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm border ${
              view === "attachment"
                ? "bg-foreground text-background border-transparent"
                : "border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
            onClick={() => setView("attachment")}
          >
            View the attachment
          </button>
          <button
            className="inline-flex items-center rounded-md px-3 py-1.5 text-sm border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setZoomed((z) => !z)}
          >
            {zoomed ? "Reset zoom" : "Zoom in"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-medium">Support this innovation</h3>
        <p className="text-black/75 dark:text-white/75">
          Your contribution helps us manufacture sustainable battery packs, refine the attachment mechanics, and get devices into the hands of users across Kenya.
        </p>
        <div className="flex gap-3">
          <a href="mailto:donations@tusonge.org" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
            Donate to this part
          </a>
          <a href="mailto:partnerships@tusonge.org" className="inline-flex items-center rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
            Sponsor components
          </a>
        </div>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>
            Battery focus: recycled Li-ion and LiFePO4 cells, BMS safety, pack assembly
          </li>
          <li>
            Attachment focus: motors, controllers, frame and clamp components
          </li>
          <li>
            Wheelchair integration: compatibility testing across common frames
          </li>
        </ul>
      </div>
    </div>
  );
}

