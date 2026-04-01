import React from 'react';
import User from '../../assets/products/user.png'
import Package from '../../assets/products/package.png'
import Rocket from '../../assets/products/rocket.png'

const Body = () => {
    return (
        <div>
              <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

          {/* Card 1 */}
          <div className="bg-white shadow-xl border border-slate-100 
          relative pt-15 pb-15 px-8 rounded-2xl space-y-5">
            <div className="absolute top-5 right-5 bg-indigo-600 text-white
             w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
              01
            </div>
       
               <div  className='flex justify-center items-center '>
                <img src={User} alt="User" className='w-15 h-15 rounded-full p-2 bg-[#4f39f63b]' />
               </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Create Account</h3>
              <p className="text-slate-500 text-sm">
                Sign up for free in seconds. No credit card required to get started.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl border border-slate-100 
            relative pt-15 pb-15 px-8 rounded-2xl space-y-5">
            <div className="absolute top-5 right-5 bg-indigo-600 text-white
             w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
              02
            </div>

             <div className='flex justify-center items-center'>
                <img src={Package} alt="Package" className='w-15 h-15 rounded-full p-2 bg-[#4f39f63b]' />
               </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Choose Products</h3>
              <p className="text-slate-500 text-sm">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center
           relative pt-15 pb-15 px-8 rounded-2xl space-y-5">
            <div className="absolute top-5 right-5 bg-indigo-600 text-white 
            w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
              03
            </div>
            <div className='flex justify-center items-center bg-[#4f39f63b] w-15 h-15 rounded-full '>
                <img src={Rocket} alt="Rocket" className='w-15 h-15  p-3' />
             </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Start Creating</h3>
              <p className="text-slate-500 text-sm">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Body; 