
import { use } from 'react';
import MainCards from './MainCards';

const Main = ({ modelPromise }) => {
 const mains = use (modelPromise )

    return (
        <div className='py-20 max-w-7xl mx-auto'>

     <div className='text-center mb-8'>
       <h1 className='text-[#101727] text-[48px] font-extrabold '
        >Premium Digital Tools</h1>
        <p className='text-[16px] text-[#627382] font-regular '>
        Choose from our curated collection of premium digital products designed <br></br>
        to boost your productivity and creativity.</p>
         </div> 

     <div className="tabs justify-center gap-4 bg-transparent">

      <input
       type="radio"
       name="my_tabs"
       className="tab rounded-full w-40 
      checked:bg-[#4F39F6] checked:text-white 
       bg-white text-black border transition"
      aria-label="Products"
     defaultChecked
    />

      <input
       type="radio"
       name="my_tabs"
       className="tab rounded-full w-40
      checked:bg-[#4F39F6] checked:text-white 
      bg-white text-black border transition"
        aria-label="Cart"
      />

    </div>

         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
         {mains.map(main => (

        <MainCards main={main}></MainCards>
       
    ))}
</div>

        </div>
    );
};

export default Main; 