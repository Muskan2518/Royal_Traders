"use client";

import { useState } from "react";
import Image from "next/image";

type Item =
  | { type: "video"; src: string; alt: string }
  | { type: "image"; src: string; alt: string };

const ITEMS: Item[] = [
  { type: "video", src: "/videos/generator-1.mp4", alt: "Generator buyers in Hyderabad" },
  ...Array.from({ length: 10 }, (_, i) => ({
    type: "image" as const,
    src: `/images/ac${i + 1}.jpg`,
    alt: `AC buyers in Hyderabad - ${i + 1}`
  })),
  ...[2, 3, 4, 5].map((n) => ({
    type: "image" as const,
    src: `/images/gen${n}.jpg`,
    alt: `Generator buyers in Hyderabad - ${n}`
  }))
];

export default function AcGeneratorGallery() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
          {ITEMS.map((item) => (
            <div
              key={item.src}
              onClick={() => setSelected(item)}
              className="overflow-hidden rounded-2xl shadow-md aspect-square border-4 border-brand-700 cursor-pointer hover:shadow-lg transition-shadow bg-black"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.type === "video" ? (
              <video
                src={selected.src}
                className="w-auto h-auto max-w-4xl max-h-[80vh]"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1000}
                height={700}
                className="w-auto h-auto max-w-4xl max-h-[80vh]"
                priority
              />
            )}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl text-black hover:bg-ink-200 transition z-10"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
