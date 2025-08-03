"use client";

import Image from "next/image";
import React, { useState } from "react";

interface INhVideo {
  videoId: string;
  title?: string;
  thumbnailQuality?: "maxresdefault" | "hqdefault" | "mqdefault";
}

const NhVideo: React.FC<INhVideo> = ({ videoId, title = "YouTube Video", thumbnailQuality = "maxresdefault" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-md"
      style={{ paddingBottom: "56.25%" }}
      aria-label={title}
    >
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
          aria-label={`Play ${title}`}
        >
          <Image src={thumbnailUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" fill priority />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default NhVideo;
