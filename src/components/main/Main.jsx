import React, { use } from 'react';

const Main = ({ modelPromise }) => {
 const mains = use (modelPromise )
 console.log(mains)
    return (
        <div className='py-20 max-w-7xl mx-auto'>

     <div className='text-center'>
       <h1 className='text-[#101727] text-[48px] font-extrabold '
        >Premium Digital Tools</h1>
        <p className='text-[16px] text-[#627382] font-regular '>
        Choose from our curated collection of premium digital products designed <br></br>
        to boost your productivity and creativity.</p>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
              {mains.map(main => (
       <div key={main.id} className='shadow-lg rounded-2xl border
      border-zinc-100 p-5 flex flex-col justify-between'>
      
   
      <div className='flex justify-between items-center mb-4'>
        <span className='text-4xl'>{main.icon}</span> {/* emoji */}
        <span className='bg-blue-100 text-blue-700 px-2 py-1 
        rounded-full text-sm'>{main.tagType}</span>
      </div>
      <div className='mb-4'>
        <h2 className='font-bold text-2xl'>{main.name}</h2>
        <p className='text-gray-600 mt-1'>{main.description}</p>
      </div>
      <div className='mt-auto'>
        <p className='text-3xl font-bold'>
          ${main.price} <span className='text-xl font-normal'
          >/{main.period}</span>
        </p>
     <ul className='mt-2 mb-4 text-gray-700'>
       {main.features.map((feature, index) => (
       <li key={index} className='flex items-center mb-1'>
      <span className='text-green-500 mr-2'>✓</span>
      <span>{feature}</span>
      </li>
       ))}
   </ul>
        <button className='bg-blue-600 text-white px-4 py-2 mt-4
        rounded-full w-full hover:bg-blue-700'>
          Buy Now
        </button>
      </div>

    </div>
  ))}
</div>

        </div>
    );
};

export default Main; 