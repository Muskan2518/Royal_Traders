"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = ["fun10", "fun9", "fun12"];

export default function RestaurantGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
          {IMAGES.map((name) => (
            <div
              key={name}
              onClick={() => setSelected(name)}
              className="overflow-hidden rounded-2xl shadow-md aspect-square border-4 border-brand-700 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <Image
                src={`/images/${name}.jpg`}
                alt={`Restaurant furniture buyers in Hyderabad - ${name}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={name === "fun10"}
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
            <Image
              src={`/images/${selected}.jpg`}
              alt={`Restaurant furniture buyers in Hyderabad - ${selected}`}
              width={1000}
              height={700}
              className="w-auto h-auto max-w-4xl max-h-[80vh]"
              priority
            />
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
