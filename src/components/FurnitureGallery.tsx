"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageItem {
  num: number;
  file: string;
}

type Selection = { type: "video"; src: string } | { type: "image"; item: ImageItem };

const IMAGES: ImageItem[] = [
  { num: 1, file: "f" },
  { num: 2, file: "f" },
  { num: 3, file: "f" },
  { num: 4, file: "f" },
  { num: 5, file: "f" },
  { num: 6, file: "f" },
  { num: 7, file: "f" },
  { num: 8, file: "f" },
  { num: 9, file: "f" },
  { num: 10, file: "f" },
  { num: 11, file: "f" },
  { num: 12, file: "f" },
  { num: 13, file: "f" },
  { num: 14, file: "f" },
  { num: 15, file: "f" },
  { num: 16, file: "f" },
  { num: 17, file: "f" },
  { num: 18, file: "f" },
  { num: 19, file: "f" },
  { num: 1, file: "fun" },
  { num: 2, file: "fun" },
  { num: 3, file: "fun" },
  { num: 4, file: "fun" },
  { num: 5, file: "fun" },
  { num: 6, file: "fun" },
  { num: 7, file: "fun" },
  { num: 8, file: "fun" },
  { num: 9, file: "fun" },
  { num: 10, file: "fun" },
  { num: 11, file: "fun" },
  { num: 12, file: "fun" },
  { num: 15, file: "fun" },
  { num: 15, file: "of" }
];

export default function FurnitureGallery() {
  const [selected, setSelected] = useState<Selection | null>(null);

  return (
    <>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
          {["/videos/furniture-1.mp4", "/videos/furniture-2.mp4"].map((src) => (
            <div
              key={src}
              onClick={() => setSelected({ type: "video", src })}
              className="overflow-hidden rounded-2xl shadow-md aspect-square border-4 border-brand-700 cursor-pointer hover:shadow-lg transition-shadow bg-black"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>
          ))}
          {IMAGES.map((item) => (
            <div
              key={`${item.file}${item.num}`}
              onClick={() => setSelected({ type: "image", item })}
              className="overflow-hidden rounded-2xl shadow-md aspect-square border-4 border-brand-700 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <Image
                src={`/images/${item.file}${item.num}.jpg`}
                alt={`Furniture buyers in Hyderabad - ${item.file}${item.num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={item.file === "f" && item.num === 1}
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
                src={`/images/${selected.item.file}${selected.item.num}.jpg`}
                alt={`Furniture buyers in Hyderabad - ${selected.item.file}${selected.item.num}`}
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
