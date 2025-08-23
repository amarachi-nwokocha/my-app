'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FormEvent } from 'react';


const AppointmentSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    if (isSubmitted) {
      setIsLoading(false);
      alert('Your consultation request has been submitted!');
      setIsSubmitted(false);
      setIsModalOpen(false);
    }
  };

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);
  setIsSubmitted(true);
  (e.target as HTMLFormElement).submit(); // cast to HTMLFormElement
};


  return (
    <>
      <section id="contact" className="w-full bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <motion.div
          className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/slide7.png"
            alt="Tattoo work"
            width={500}
            height={300}
            className="object-cover rounded-lg"
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
            Whether it&apos;s your first tattoo or your fiftieth, we&apos;re here to bring your vision to life.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#e6c200] transition duration-300"
          >
            Book a consultation →
          </button>
        </motion.div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 overflow-y-auto">
          <div className='min-h-screen flex justify-center items-center p-4'>
          <div className=" text-amber-300 p-6 rounded-md w-full max-w-xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-[#FFD700] text-4xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Book a Consultation</h2>
            <form
              action="https://script.google.com/macros/s/AKfycbzRqSuTD1VlPIB_JWqv5jZVg-15mwKpQh4xoNOPr2Mp7Y3Qg7h0ryTWugsym2_baXMlJw/exec"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="entry.2005620554"
                placeholder="Name"
                required
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                name="entry.1421932342"
                placeholder="Email"
                required
                className="w-full border p-2 rounded"
              />

              <input
                type="tel"
                name="entry.639789003"
                placeholder="Phone Number"
                required
                className="w-full border p-2 rounded"
              />

              <select
                name="entry.1313946817"
                required
                className="w-full border border-[#FFD700] bg-black/95 text-[#FFD700] p-2 rounded-md"
              >
                <option value="">Select Tattoo Size</option>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
              </select>

              <input
                type="text"
                name="entry.1977567922"
                placeholder="Tattoo Position (e.g. Arm, Chest)"
                required
                className="w-full border p-2 rounded"
              />

              <textarea
                name="entry.1089208838"
                placeholder="Additional Info (Optional)"
                className="w-full border p-2 rounded"
              ></textarea>

              <select
                name="entry.1787960992"
                required
                className="w-full border border-[#FFD700] bg-black/95 text-[#FFD700] p-2 rounded-md"
              >
                <option value="">Select Location</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Home Service">Home Service</option>
              </select>

              <div className="flex flex-row gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.1056672704"
                    value="Cover Up"
                    required
                  />
                  Cover Up
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.1056672704"
                    value="Fresh Tattoo"
                  />
                  Fresh Tattoo
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`bg-black text-[#FFD700] border border-[#FFD700] px-6 py-2 rounded font-bold transition ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FFD700] hover:text-black'
                }`}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            <iframe
              name="hidden_iframe"
              ref={iframeRef}
              onLoad={handleIframeLoad}
              style={{ display: 'none' }}
            ></iframe>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentSection;
