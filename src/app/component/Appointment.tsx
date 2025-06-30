'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const AppointmentSection = () => {
  return (
    <section id="contact" className="w-full bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left: Video */}
      <motion.div
        className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <video
          src="/slide3.mp4" // replace with your file
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-80 object-cover rounded-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 w-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-[#FFD700] mb-6">
          By Appointment Only
        </h3>
        <p className="text-lg leading-7 mb-4">
          To ensure each client receives full focus and an exceptional experience, we work strictly by appointment.
          This allows us to create in a relaxed, unhurried environment where the art and your comfort come first.
        </p>
        <p className="text-lg leading-7 mb-6">
          <strong>Ready to Get Inkspired?</strong><br />
          Whether it’s your first tattoo or your fiftieth, we’re here to bring your vision to life.
        </p>
        <Link
          href="#contact"
          className="inline-block px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#e6c200] transition duration-300"
        >
          Book a consultation →
        </Link>
      </motion.div>
    </section>
  );
};

export default AppointmentSection;
