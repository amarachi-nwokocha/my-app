'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const staffList = [
  {
    name: 'Ugochukwu Victor',
    position: 'Creative Director',
    image: '/Pharoah.jpg',
  },
  {
    name: 'Dr. Andrew',
    position: 'General Manager',
    image: '/RobertAndrew.jpg',
  },
  {
    name: 'Ali Younes',
    position: 'Head Artist (Abuja)',
    image: '/AliYones.jpg',
  },
  {
    name: 'Ab Atallah',
    position: 'Tattoo Artist (Lagos)',
    image: '/YabAttalah.jpg',
  },
  {
    name: 'Agbakuru Lucky ',
    position: 'Studio Manager (Abuja)',
    image: '/StudioManagerLucky.jpg',
  },
  {
    name: 'Nnnawuihe John',
    position: 'Studio Manager (Lagos)',
    image: '/John.jpg',
  },
  {
    name: 'Eziefule Onyinye',
    position: 'HR',
    image: '/Onyinye.jpg',
  },
  {
    name: 'Martha Odoh',
    position: 'Piercer',
    image: '/MarthaOdoh.jpg',
  },
];

const StaffSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(staffList.length).fill(false)
  );

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="staff"
      className="w-full bg-black text-white py-20 px-6 md:px-20 relative overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] text-center mb-10">
        Meet The Team
      </h2>

      {/* Chevron Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full hover:bg-[#FFD700]/20 text-[#FFD700] hidden md:block transition-all duration-300"
        aria-label="Scroll Left"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full hover:bg-[#FFD700]/20 text-[#FFD700] hidden md:block transition-all duration-300"
        aria-label="Scroll Right"
      >
        <ChevronRight size={28} />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory space-x-6 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {staffList.map((staff, index) => {
          const isLoaded = loadedImages[index];

          const handleImageLoad = () => {
            setLoadedImages((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          };

          return (
            <motion.div
              key={index}
              className="bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden w-[250px] flex-shrink-0 snap-start transition-transform hover:scale-105 duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-44">
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse" />
                )}
                <Image
                  src={staff.image}
                  alt={staff.name}
                  fill
                  className={`object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ objectPosition: 'center 20%' }}
                  onLoad={handleImageLoad}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#FFD700]">{staff.name}</h3>
                <p className="text-sm text-gray-300">{staff.position}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default StaffSection;
