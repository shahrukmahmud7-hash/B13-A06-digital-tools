import React from 'react';

const StatsSection = () => {
    return (
      <div className=' bg-gradient-to-r 
    from-[#4F39F6] to-[#7A6CFF] p-20 mb-10'> 
     <div className='flex justify-evenly'>
        <div>
  
         <h1  className='text-[60px] font-extrabold text-[#FFFFFF] '>50K+</h1>
         <p className='text-[24px] font-medium text-[#ffffff80] '>Active Users</p>
        </div>
            <div class="h-[250px] min-h-[1em] w-px self-stretch bg-white/10"></div>
        <div>
         <h1 className='text-[60px] font-extrabold text-[#FFFFFF] '>200+</h1>
         <p className='text-[24px] font-medium text-[#ffffff80] '>Premium Tools</p>
        </div>
          <div class="h-[250px] min-h-[1em] w-px self-stretch bg-white/10"></div>
        <div>
         <h1 className='text-[60px] font-extrabold text-[#FFFFFF] '>4.9</h1>
         <p className='text-[24px] font-medium text-[#ffffff80] '>Rating</p>
        </div>   
     </div>
     
      </div>
      
    );
};

export default StatsSection;