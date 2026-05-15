"use client";

import { useEffect, useState } from "react";

export default function RotatingWords({
  words,
  interval = 2200,
  className = "",
  wordClassName = ""
}: {
  words: string[];
  interval?: number;
  className?: string;
  wordClassName?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span
      className={`relative inline-grid align-baseline ${className}`}
      style={{ perspective: "600px" }}
    >
      <span aria-hidden className={`invisible col-start-1 row-start-1 whitespace-nowrap ${wordClassName}`}>
        {longest}
      </span>
      <span
        key={index}
        className={`col-start-1 row-start-1 inline-block whitespace-nowrap ${wordClassName}`}
        style={{
          animation: "word-rotate-in 2.2s cubic-bezier(0.22, 1, 0.36, 1) both",
          transformOrigin: "50% 50%"
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}
