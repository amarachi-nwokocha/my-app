'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Ghost } from 'lucide-react';

const images = [
  // { src: '/headShot.jpg', alt: 'Victor Ugochukwu - The Visionary' },
   { src: '/Pharoah.jpg', alt: 'Victor at Event' },
  // { src: '/PH2.JPEG', alt: 'Victor Portrait' },
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
            <p>Victor Emenike Ugochukwu, widely known as Pharaoh, is a Nigerian entrepreneur, tattoo artist, actor, philanthropist, and investor whose work continues to redefine the creative landscape in Africa. Born in Kano, Nigeria, to parents of Anambra and Edo heritage, Pharaoh grew up surrounded by cultural diversity that would later influence his art and identity.</p>

<p>His love for art began in childhood, expressed through drawing and painting.</p>

<p>Since 2018, Pharaoh has carved out a space for himself as one of Nigeria&rsquo;s most respected tattoo artists. As Founder and CEO of Pharaoh&rsquo;s Hound, he set out to close the gap in an industry once stigmatized and undervalued, introducing professionalism, artistry, and premium client experiences. Beyond tattoos, he is also a businessman with ventures in real estate, film acting, and smart investments.</p>

<p>Pharaoh&rsquo;s influence extends beyond business. He has trained over 50 young tattoo artists, empowering a new generation of creatives, while also giving back through philanthropy, by feeding the streets, supporting struggling businesses, and donating to charities and foundations.</p>

<p>When he is not working, Pharaoh enjoys biking, painting, drawing, film acting, and creating. His vision is simple yet profound: to elevate African tattoo artistry to global recognition while proving that tattoos are not just ink, they are living art, memory, and identity.</p>


            </p>
          <div className="flex items-center space-x-6 text-[#FFD700] text-2xl">
            <Link href="https://www.instagram.com/pharoahshoundtattoostudios/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <Instagram size={28} />
            </Link>
            <Link href="https://x.com/pharoahs_hound?s=21" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <Twitter size={28} />
            </Link>
            <Link href="https://t.snapchat.com/7rs4UPxe" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <Ghost size={28} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionarySection;
