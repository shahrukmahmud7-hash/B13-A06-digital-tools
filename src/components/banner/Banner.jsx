import React from 'react';
import BannerImage from '../../assets/products/banner.png'
import BlueLogo from '../../assets/products/new.png'
import Play from '../../assets/products/Play.png'

const Banner = () => {
    return (
          <div className="relative min-h-162.5 flex items-center overflow-hidden mb-8">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2  border border-blue-500/30  bg-gradient-to-r from-[#F1EEFF] to-[#D6CEFF] text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
            <img src={BlueLogo} alt="" /> New: AI-Powered Tools Available
          </div>
          

          <h1 className="text-5xl font-extrabold text-[#101727] ">
            Supercharge Your 
            <br />
            <span className="text-5xl font-extrabold text-[#4F39F6]
            ">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
          Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className='btn btn-outline  text-white bg-gradient-to-r 
         from-[#4F39F6] to-[#7A6CFF] border-none rounded-full'
           >Explore Products</button>

            <button className="btn btn-outline text-[#4F39F6] border border-blue-500/30 rounded-4xl">
             <img src={Play} alt="" /> Watch Demo 
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain rounded-2xl"
              src={BannerImage}
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner; 