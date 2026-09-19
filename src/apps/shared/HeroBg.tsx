"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import pursebag from "@/assets/women/case-tan.webp";
import chainbag from "@/assets/women/woven-handbag-tan.webp";
import bagc from "@/assets/bag-content.webp";

const slides = [
  { src: pursebag, alt: "Purse Bag" },
  { src: chainbag, alt: "Chain Bag" },
  { src: bagc, alt: "Bag Content" },
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <Image
          key={slide.alt}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          fetchPriority={i === 0 ? undefined : "low"}
          sizes="100vw"
          aria-hidden={i !== current}
          className={`object-cover transition-[opacity,transform] duration-3000 ease-in-out motion-reduce:transition-none ${
            i === current ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
      ))}
    </div>
  );
}