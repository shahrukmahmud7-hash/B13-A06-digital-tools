import React from 'react';

const Pricing = () => {
    return (
       <div>
          {/* main Section */}
          <div className='bg-gradient-to-r from-white to-slate-100 py-20 px-6'>
   <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
           Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
         
           {/* Cards Container */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-14  justify-items-center'>
        
        
          {/* Card 1 */}
           <div className="card w-96 py-10 bg-base-100 shadow-sm rounded-2xl h-[420px]">
  <div className="card-body  flex flex-col ">
    <span className="text-2xl font-bold ">Starter</span>
    <div className="">
      <h2 className="text-[#627382]">Perfect for getting started</h2>

      <div className='flex'>
        <h2 className="text-2xl font-bold">$0</h2>
       <span className="py-2 text-[#627382]">/month</span>
       </div>
    </div> 
    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
         viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
         strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      
    </ul>
    <div className=''>
      <div className="mt-14">
      <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
    </div>
    </div>
  </div>
</div>
            
          {/* Card 2 */}
   <div className="card relative w-96 bg-[#4F39F6] shadow-sm rounded-2xl h-[420px]">
  <div className="card-body flex flex-col">
    <p className='absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] 
    text-xs px-4 py-2 rounded-full font-semibold shadow'>Most Popular</p>
    <span className="text-3xl font-bold text-white ">Pro</span>
    <div className="">
      <h2 className="text-[#ffffff93]">Best for professionals</h2>

      <div className='flex'>
        <h2 className="text-2xl font-bold text-white">$29</h2>
       <span className="py-2 text-white">/month</span>
       </div>
    </div> 
    <ul className="mt-6 flex flex-col gap-2 text-xs text-white">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
         viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
         strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
      
    </ul>
    <div className="mt-10">
      <button className="btn w-full rounded-full">Start Pro Trial</button>
    </div>
  </div>
</div>
            
          {/* Card 3 */}
   <div className="card w-96 bg-base-100 shadow-sm rounded-2xl h-[420px]">
  <div className="card-body flex flex-col">
    <span className="text-2xl font-bold ">Enterprise</span>
    <div className="">
      <h2 className="text-[#627382]">For teams and businesses</h2>

      <div className='flex'>
        <h2 className="text-2xl font-bold">$99</h2>
       <span className="py-2 text-[#627382]">/month</span>
       </div>
    </div> 
    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
         viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
         strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
      
    </ul>
    <div className="mt-10">
      <button className="btn btn-primary btn-block rounded-full">Contact Sales</button>
    </div>
  </div>
</div>


      </div>
 </div>
 </div>
</div>
    );
};

export default Pricing; 