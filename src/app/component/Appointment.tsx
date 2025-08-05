'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AppointmentSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            Whether it’s your first tattoo or your fiftieth, we’re here to bring your vision to life.
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-black text-amber-300 p-6 rounded-md w-full max-w-xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-[#FFD700] text-4xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Book a Consultation</h2>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdzVqNv50M8aTX-y9Jve-e8abzYvQHM6uLjYVvwzZoEO3owSQ/formResponse"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="entry.297239666"
                placeholder="Name"
                required
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                name="entry.99809765"
                placeholder="Email"
                required
                className="w-full border p-2 rounded"
              />
              <select
                name="entry.854492443"
                required
                className="w-full border border-[#FFD700] bg-black/95 text-[#FFD700] p-2 rounded-md"
              >
                <option value="">Select Tattoo Size</option>
                <option value="Large">Large</option>
                <option value="Medium size">Medium</option>
                <option value="Small">Small</option>
              </select>

              <select
                name="entry.location"
                required
                className="w-full border border-[#FFD700] bg-black/95 text-[#FFD700] p-2 rounded-md"
              >
                <option value="">Select Location</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
              </select>

              <input
                type="text"
                name="entry.1228550198"
                placeholder="Tattoo Position"
                required
                className="w-full border p-2 rounded"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="entry.125273652"
                  value="Yes"
                />
                Cover Up
              </label>
              <button
                type="submit"
                className="bg-black text-[#FFD700] border border-rounded border-[#FFD700] px-6 py-2 rounded hover:bg-[#FFD700] hover:text-black font-bold "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentSection;
