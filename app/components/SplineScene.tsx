'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-white text-3xl font-bold">
      加载中...
    </div>
  )
});

interface SplineSceneProps {
  sceneUrl: string;
  className?: string;
}

export default function SplineScene({ sceneUrl, className = '' }: SplineSceneProps) {
  return (
    <div className={`w-screen h-screen bg-black ${className}`}>
      <Suspense fallback={
        <div className="w-screen h-screen flex items-center justify-center bg-black text-white text-3xl font-bold">
          加载中...
        </div>
      }>
        <Spline scene={sceneUrl} />
      </Suspense>
    </div>
  );
} 