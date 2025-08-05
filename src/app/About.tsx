'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
    '/slide4.png',
     '/slide5.JPG',
    '/slide6.JPG',
    '/slide8.jpg',
    '/slide9.jpg',
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="about"
            className="w-full bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12"
        >
            {/* Left Content */}
            <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="font-sirnic text-3xl md:text-5xl font-bold text-[#FFD700] mb-6">
                    Pharoah&apos;s Hound Tattoos – Beyond ink
                </h2>
                <p className="text-lg leading-7">
                    At Pharoah&apos;s Hound, we believe your skin is the perfect canvas for bold, unforgettable art.
                    We believe in great connections, bonds and friendships as clients become family.
                    Located in the heart of Abuja and Lagos, our private studios offer a calm, creative space
                    where your ideas are transformed into custom tattoos that speak volumes.
                    <br /><br />
                    Led by award-winning tattoo artist Pharoah (Victor Ugochukwu), we specialize in every tattoo style
                    including black and grey realism, portrait work, and custom concept designs.
                    Every piece is thoughtfully crafted, with attention to detail, technique, and your personal story.
                    We&apos;re all about clean lines, good vibes, and flawless execution.
                </p>
            </motion.div>

            {/* Right Slideshow */}
            <motion.div
                className="md:w-1/2 relative aspect-video w-full overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        animate={{ opacity: currentIndex === idx ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={img}
                            alt={`Tattoo work ${idx + 1}`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default About;
