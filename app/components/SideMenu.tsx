'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (id: number) => {
    router.push(`/model/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-6 left-6 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
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
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-black/90 text-white transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '200px' }}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">题目列表</h2>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                className="w-full text-left px-4 py-2 rounded hover:bg-white/10 transition-colors"
              >
                题目{id}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 