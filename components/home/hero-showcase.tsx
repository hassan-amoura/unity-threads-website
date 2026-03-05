"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    src: "https://placehold.co/800x1000/f2efea/2f3a40?text=Unity+Threads",
    caption: "Comfort that moves with you",
    alt: "Unity Threads look — soft, everyday wear."
  },
  {
    src: "https://placehold.co/800x1000/1f4e79/ffffff?text=Designed+For+You",
    caption: "Designed for real life",
    alt: "Unity Threads look — designed for real life."
  },
  {
    src: "https://placehold.co/800x1000/e8e4e0/2f3a40?text=Sensory+Kind",
    caption: "Sensory-kind fits",
    alt: "Unity Threads look — sensory-friendly design."
  }
];

const ROTATE_MS = 4500;

export function HeroShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative h-80 md:h-[420px] w-full overflow-hidden rounded-[2rem] bg-ut-muted/20 shadow-soft">
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ut-slate/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="text-sm font-medium text-white drop-shadow-md md:text-base">
                {s.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-4 flex gap-1.5 md:bottom-6 md:right-6" aria-label="Slide indicator">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all focus-ring ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-current={i === index ? "true" : undefined}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
