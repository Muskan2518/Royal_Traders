"use client";

import { useState } from "react";
import Image from "next/image";

type Selection = { type: "video"; src: string } | { type: "image"; num: number };

export default function GeneratorGallery() {
  const [selected, setSelected] = useState<Selection | null>(null);

  return (
    <>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
          <div
            onClick={() => setSelected({ type: "video", src: "/videos/generator-1.mp4" })}
            className="overflow-hidden rounded-2xl shadow-md aspect-square border-4 border-brand-700 cursor-pointer hover:shadow-lg transition-shadow bg-black"
          >
            <video
              src="/videos/generator-1.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
            />
          </div>
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              onClick={() => setSelected({ type: "image", num })}
              className="overflow-hidden rounded-2xl shadow-md aspect-square border-4 border-brand-700 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <Image
                src={`/images/gen${num}.jpg`}
                alt={`Generator buyers in Hyderabad - ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={num === 1}
              />
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
                src={`/images/gen${selected.num}.jpg`}
                alt={`Generator buyers in Hyderabad - ${selected.num}`}
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
