"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

const cache = new Map<string, Promise<unknown>>();

function load(src: string) {
  let p = cache.get(src);
  if (!p) {
    p = fetch(src).then((r) => r.json());
    cache.set(src, p);
  }
  return p;
}

export default function LocationLottie({
  src = "/lottie/location.json",
  className,
  hoverPlay = false,
  autoplay = true
}: {
  src?: string;
  className?: string;
  hoverPlay?: boolean;
  autoplay?: boolean;
}) {
  const [data, setData] = useState<unknown>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    let alive = true;
    load(src).then((d) => {
      if (alive) setData(d);
    });
    return () => {
      alive = false;
    };
  }, [src]);

  if (!data) return <div className={className} aria-hidden />;

  const handleEnter = hoverPlay
    ? () => lottieRef.current?.play()
    : undefined;
  const handleLeave = hoverPlay
    ? () => {
        lottieRef.current?.stop();
      }
    : undefined;

  return (
    <div
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop
        autoplay={hoverPlay ? false : autoplay}
        className="w-full h-full"
      />
    </div>
  );
}
