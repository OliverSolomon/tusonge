"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  playbackRate?: number; // e.g. 0.6 for slower playback
  loop?: boolean;
  normalizeToSeconds?: number; // desktop/tablet normalization target in seconds
  normalizeMobileSeconds?: number; // mobile normalization target in seconds
};

// A versatile video: scroll-scrub by default; when autoplay is true, plays at given rate and loops.
export default function ScrollVideo({ src, poster, className, autoplay = false, playbackRate = 0.75, loop = false, normalizeToSeconds, normalizeMobileSeconds }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll-driven mode
  useEffect(() => {
    if (autoplay) return; // disable scroll mapping in autoplay mode
    const onScroll = () => {
      const el = containerRef.current;
      const vid = videoRef.current;
      if (!el || !vid || !duration) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height + vh;
      const visibleTop = Math.min(Math.max(0, vh - rect.top), total);
      const progress = Math.min(1, Math.max(0, visibleTop / total));
      vid.currentTime = progress * duration;
    };
    let raf = requestAnimationFrame(function tick() {
      onScroll();
      raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [duration, autoplay]);

  // Track mobile breakpoint (<= 640px)
  useEffect(() => {
    const mm = typeof window !== "undefined" ? window.matchMedia("(max-width: 640px)") : null;
    if (!mm) return;
    const update = () => setIsMobile(!!mm.matches);
    update();
    // Safari <14 uses addListener
    if (typeof mm.addEventListener === "function") {
      mm.addEventListener("change", update);
      return () => mm.removeEventListener("change", update);
    } else if (typeof (mm as any).addListener === "function") {
      (mm as any).addListener(update);
      return () => (mm as any).removeListener(update);
    }
  }, []);

  // Autoplay mode controls
  useEffect(() => {
    if (!autoplay) return;
    const vid = videoRef.current;
    if (!vid) return;
    const setRate = () => {
      try {
        const d = vid.duration || duration;
        let rate = playbackRate;
        const target = isMobile && normalizeMobileSeconds ? normalizeMobileSeconds : normalizeToSeconds;
        if (target && d > 0) {
          rate = d / target; // e.g., if d=10s and target=30s => 0.333x
        }
        // Clamp to reasonable bounds
        if (!isFinite(rate) || rate <= 0) rate = 0.1;
        if (rate > 4) rate = 4;
        vid.playbackRate = rate;
      } catch {}
    };
    const tryPlay = async () => {
      try {
        await vid.play();
      } catch {
        // ignored — browser may block until interaction, but at least attributes are set
      }
    };
    setRate();
    tryPlay();
    const onMeta = () => setRate();
    vid.addEventListener("loadedmetadata", onMeta);
    return () => vid.removeEventListener("loadedmetadata", onMeta);
  }, [autoplay, playbackRate, normalizeToSeconds, normalizeMobileSeconds, duration, isMobile]);

  return (
    <div ref={containerRef} className={className}>
      <div className="relative overflow-hidden rounded-lg border border-black/10 dark:border-white/15">
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          playsInline
          muted
          controls={false}
          autoPlay={autoplay}
          loop={loop}
          className="w-full h-auto block"
          onLoadedMetadata={(e) => setDuration((e.target as HTMLVideoElement).duration || 0)}
        />
        {poster && (
          <div className="pointer-events-none absolute inset-0">
            <Image src={poster} alt="Video poster" fill className="object-cover opacity-0" />
          </div>
        )}
      </div>
    </div>
  );
}

