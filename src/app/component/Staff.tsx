'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const staffList = [
  {
    name: 'Jane Doe',
    position: 'Tattoo Artist',
    image: 'https://images.unsplash.com/photo-1590080876576-c2a122a2b1a4?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'John Smith',
    position: 'Studio Manager',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Aisha Bello',
    position: 'Piercing Specialist',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Victor U.',
    position: 'Lead Artist',
    image: 'https://images.unsplash.com/photo-1610076262634-e9a953de7f42?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Kemi Ade',
    position: 'Assistant Artist',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Uche Obi',
    position: 'Client Relations',
    image: 'https://images.unsplash.com/photo-1614282281511-3d9d86e9a998?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tola Ayo',
    position: 'Tattoo Intern',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chuks Leo',
    position: 'Ink Technician',
    image: 'https://images.unsplash.com/photo-1590080876644-df1251a450f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Zara Kai',
    position: 'Makeup Collaborator',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Emeka Jnr.',
    position: 'Logistics',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=600&q=80',
  },
];

const StaffSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // Slightly increased for better movement
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="staff" className="w-full bg-black text-white py-20 px-6 md:px-20 relative overflow-hidden">
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
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
          WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
        }}
      >
        {staffList.map((staff, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1c1c] rounded-lg shadow-lg p-4 w-[250px] flex-shrink-0 snap-start transition-transform hover:scale-105 duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-44 rounded overflow-hidden mb-4">
              <Image
                src={staff.image}
                alt={staff.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#FFD700]">{staff.name}</h3>
            <p className="text-sm text-gray-300">{staff.position}</p>
          </motion.div>
        ))}
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