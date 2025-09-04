'use client';

import React, { useState } from 'react';
import Toc from './components/Toc';
import Privacy from './components/Privacy';
import Navbar from '../components/Landing/Navbar';

const Page = () => {
  const [view, setView] = useState<'privacy' | 'toc'>('privacy');

  return (
    <>
      {/* <Nav2 /> */}
<Navbar/>
      <div className="flex justify-center mt-32 gap-10 my-10">
        <button
          className={`text-white px-4 py-2 rounded ${view === 'privacy' ? 'bg-[#FFD700] text-black' : 'bg-gray-700'}`}
          onClick={() => setView('privacy')}
        >
          Privacy Policy
        </button>
        <button
          className={`text-white px-4 py-2 rounded ${view === 'toc' ? 'bg-[#FFD700]' : 'bg-gray-700'}`}
          onClick={() => setView('toc')}
        >
          Terms of Service
        </button>
      </div>

      <div>
        {view === 'privacy' ? <Privacy /> : <Toc />}
      </div>
    </>
  );
};

export default Page;
