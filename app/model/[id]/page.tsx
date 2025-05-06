'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';
import { useState } from 'react';
import SplineScene from '../../components/SplineScene';
import BackArrow from '../../components/BackArrow';
import SideMenu from '../../components/SideMenu';

export default function ModelPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const currentId = parseInt(resolvedParams.id);
  const totalModels = 9;
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (currentId < totalModels && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push(`/model/${currentId + 1}`);
      }, 2000);
    }
  };

  return (
    <div className="w-screen h-screen bg-black relative">
      <SideMenu />
      <BackArrow />
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handleNext}
      >
        <SplineScene 
          sceneUrl={`/models/${resolvedParams.id}.spline`} 
          className="w-full h-full"
        />
      </div>
      {currentId < totalModels && (
        <button
          onClick={handleNext}
          className="absolute right-6 bottom-6 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
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
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      )}
    </div>
  );
} 