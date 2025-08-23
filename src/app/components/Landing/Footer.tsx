'use client';

import Link from 'next/link';
import { Instagram, Twitter, Ghost, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFD700] text-black py-10 px-6 md:px-20 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Tagline */}
       

        {/* Contact & Socials */}
        <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="flex items-center gap-2 text-base">
            <Mail size={20} /> contact@pharaohshound.com
          </p>
          <p className="flex items-center gap-2 text-base">
            <MapPin size={20} /> Abuja & Lagos, Nigeria
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="https://www.instagram.com/pharoahshoundtattoostudios/" target="_blank" className="hover:scale-110 transition-transform">
              <Instagram size={24} />
            </Link>
            <Link href="https://x.com/pharoahs_hound?s=21" target="_blank" className="hover:scale-110 transition-transform">
              <Twitter size={24} />
            </Link>
            <Link href="https://www.snapchat.com/add/pharoah0009" target="_blank" className="hover:scale-110 transition-transform">
              <Ghost size={24} />
            </Link>
          </div>
        </div>
         <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-2">Pharaoh&apos;s Hound</h2>
          <p className="text-lg leading-snug">
            Beyond Ink. Where stories live on skin. Tattoos that speak louder than words.
          </p>
        </div>
      </div>

      {/* Divider and Bottom Row */}
      <div className="w-full border-t border-black/30 mt-8 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base text-black/60 px-2">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Pharaoh’s Hound Tattoos. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
