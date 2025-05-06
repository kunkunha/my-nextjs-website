'use client';

import { useRouter } from 'next/navigation';

export default function BackArrow() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute bottom-6 left-6 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>
  );
} 