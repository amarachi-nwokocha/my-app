'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Instagram,
  Twitter,
  Ghost, // Using Ghost for Snapchat (closest alternative in Lucide)
} from 'lucide-react';

const VisionarySection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] text-center mb-12">
        Meet the Face Behind the Vision
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          className="md:w-1/2 w-full h-[400px] relative overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/headShot.jpg"
            alt="Victor Ugochukwu - The Visionary"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>

        {/* Right: Bio and Socials */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-[#FFD700] mb-4">
            Victor "Pharoah" Ugochukwu 
          </h3>
          <p className="text-lg leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget neque a ipsum iaculis fermentum.
            Maecenas ut felis nec libero fermentum porttitor. Fusce vehicula tincidunt tortor, nec vulputate justo.
            Praesent vitae enim vitae augue tristique finibus. Integer sed eros non justo ullamcorper tempus.
          </p>
          <div className="flex items-center space-x-6 text-[#FFD700] text-2xl">
            <Link
              href="https://instagram.com/pharoahtattoos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Instagram size={28} />
            </Link>
            <Link
              href="https://twitter.com/pharoahtattoos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Twitter size={28} />
            </Link>
            <Link
              href="https://snapchat.com/add/pharoahtattoos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Ghost size={28} /> {/* Closest Lucide icon for Snapchat */}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionarySection;
