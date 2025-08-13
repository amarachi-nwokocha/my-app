'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Ghost } from 'lucide-react';

const images = [
  { src: '/headShot.jpg', alt: 'Victor Ugochukwu - The Visionary' },
  { src: '/Pharoah.jpg', alt: 'Victor at Event' },
  { src: '/PH2.JPEG', alt: 'Victor Portrait' },
];

const VisionarySection = () => {
  const [current, setCurrent] = useState(0);

  // Optional autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] text-center mb-12">
        Meet the Face Behind the Vision
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Custom Image Slider */}
        <div className="md:w-1/2 w-full h-[600px] relative overflow-hidden rounded-lg shadow-lg ">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[current].src}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-center object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Bio and Socials */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-[#FFD700] mb-4">
            Victor &quot;Pharoah&quot; Ugochukwu
          </h3>
          <p className="text-lg leading-7 mb-6">
            Pharaoh of Pharaoh\u0027s Hound is more than a symbol of ancient nobility; he is a living legend whose influence transcends myth and time. As a descendant of the divine hunters of old, he embodies grace, speed, and wisdom. But beyond the sand-swept echoes of his royal lineage lies a heart devoted to service and upliftment.

            A known patron of the forgotten and protector of the voiceless, the Pharaoh has dedicated his reign to philanthropic work across lost kingdoms and nomadic clans.

            Under his rule, the Circle of the Golden Hound, a council founded to safeguard nature, history, and balance, has flourished. His initiatives in education, healing, and cultural preservation have turned forgotten oases into thriving centers of knowledge and art.

            Wise, relentless, and deeply compassionate, the Pharaoh of Pharaoh\u0027s Hound is not just a ruler by blood but a beacon of leadership by spirit, a guardian of legacy, and a champion for all who run beneath the desert stars.</p>
          <div className="flex items-center space-x-6 text-[#FFD700] text-2xl">
            <Link href="https://www.instagram.com/pharoahshoundtattoostudios/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <Instagram size={28} />
            </Link>
            <Link href="https://twitter.com/pharoahtattoos" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <Twitter size={28} />
            </Link>
            <Link href="https://snapchat.com/add/pharoahtattoos" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <Ghost size={28} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionarySection;
