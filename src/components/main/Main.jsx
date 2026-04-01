
import { use, } from 'react';
import MainCards from './MainCards';

const Main = ({ modelPromise , carts , setCarts }) => {
 const mains = use (modelPromise )


    return (
        <div className='py-20 max-w-7xl mx-auto'>

   

    

         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
         {mains.map(main => (

        <MainCards key={main.id} main={main}
        carts={carts} setCarts={setCarts}
        ></MainCards>
       
    ))}
</div>

        </div>
    );
};

export default Main; 