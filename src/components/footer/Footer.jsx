import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
      <footer className="bg-zinc-950 border-t
       border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-left ">

          {/* Logo */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-4">
              DigiTools
            </h2>

            <p className="text-[#ffffffa2] text-[16px]">
              Premium digital tools for creators,<br />
              professionals, and businesses. Work smarter<br />
              with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Social Links</h3>
            <ul >
              <div className="flex gap-4">
                <div className='rounded-full w-10 h-10 bg-white  flex items-center justify-center'>
                 <RiInstagramFill className='h-10 w-10 p-2 ' />
               </div>

               <div className='rounded-full w-10 h-10   bg-white flex items-center justify-center'>
                <FaFacebookSquare className='h-10 w-10 p-2 ' />
               </div>

                <div className='rounded-full w-10 h-10   bg-white flex items-center justify-center'>
                <FaSquareXTwitter className='h-10 w-10 p-2 ' />
               </div>
                
              
                {/* <img src="" alt="" />
                <img src="" alt="" /> */}
              </div>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
          <div>© 2026 Digitools. All rights reserved.</div>

          <div className=' flex gap-5'>
            <a href="#" className="hover:text-red-400">
             Privacy Policy                    
            </a>
            <a href="#" className="hover:text-red-400">
             Terms of Service
            </a>
            <a href="#" className="hover:text-red-400">
             Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer; 