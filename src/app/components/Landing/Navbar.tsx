'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Staff', href: '#staff' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
   { label: '7for7', href: '/7for7' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
console.log(scrolled);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-6 py-4 transition-all duration-300 
           bg-black/30 backdrop-blur-md shadow-md text-[#FFD700]`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Tattoo Shop Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-xl font-semibold transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span className="relative group">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-[#FFD700] focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-black/80 backdrop-blur-md text-[#FFD700] py-4 rounded shadow-lg transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:scale-105 transition-transform relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
