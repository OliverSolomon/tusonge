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
  normalizeToSeconds?: number; // when set, adjust playbackRate so one loop ≈ this duration
};

// A versatile video: scroll-scrub by default; when autoplay is true, plays at given rate and loops.
export default function ScrollVideo({ src, poster, className, autoplay = false, playbackRate = 0.75, loop = false, normalizeToSeconds }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);

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

  // Autoplay mode controls
  useEffect(() => {
    if (!autoplay) return;
    const vid = videoRef.current;
    if (!vid) return;
    const setRate = () => {
      try {
        const d = vid.duration || duration;
        let rate = playbackRate;
        if (normalizeToSeconds && d > 0) {
          rate = d / normalizeToSeconds; // e.g., if d=10s and normalize=30s => 0.333x
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
  }, [autoplay, playbackRate, normalizeToSeconds, duration]);

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

