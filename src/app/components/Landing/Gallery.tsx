'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
     '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/gallery10.png', 
    '/gallery11.png', 
    '/gallery12.png',
];

const GallerySection = () => {
    return (
        <section id="gallery" className="w-full bg-black text-white py-20 px-6 md:px-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] text-center mb-10">
                Our Art Speaks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((src, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
