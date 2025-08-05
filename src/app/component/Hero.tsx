'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    //   const videoOptions = {
    //     playerVars: {
    //       autoplay: 1,
    //       controls: 0,
    //       modestbranding: 1,
    //       loop: 1,
    //       mute: 1,
    //       playlist: 'dQw4w9WgXcQ', // Repeat must set playlist
    //       showinfo: 0,
    //       rel: 0,
    //     },
    //   };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* YouTube Background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        src="/banvid.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />

                </div>
                {/* Optional dark overlay */}
                <div className="absolute inset-0 bg-black opacity-60" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
                <motion.h1
                    className=" font-sirnic text-5xl md:text-7xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
               Pharoah&apos;s Hound Tattoo Studio
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg md:text-2xl max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                       Ink That Tells Your Story  Custom tattoos crafted with precision and passion — Book your session today with our award-winning artists.
                </motion.p>
            </div>
        </div>
    );
};

export default Hero;
