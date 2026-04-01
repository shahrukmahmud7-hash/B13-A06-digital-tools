import { useState } from "react";
import { toast } from "react-toastify";


const MainCards = ({ main , carts , setCarts }) => {

    const [addToCart , setAddToCart] = useState(false)

    const handleAddToCart = () => {
        setAddToCart(true);
         
          const isFound = carts.find(cart => cart.id === main.id);

          if(isFound) {
           toast.error("Item already in cart")
           return 
          }

        setCarts([...carts , main])
        toast.success("Item added to cart")
    }

    return (
       <div key={main.id} className='shadow-lg rounded-2xl border
      border-zinc-100 p-5 flex flex-col justify-between'>
      
   
      <div className='flex justify-between items-center mb-4'>
        <span className='text-4xl p-2 bg-gradient-to-r from-white to-slate-200 rounded-full'>{main.icon}</span> {/* emoji */}
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
        <button onClick={handleAddToCart} className='bg-blue-600 text-white px-4 py-2 mt-4
        rounded-full w-full  active:bg-red-700 focus:bg-red-700'>
       {addToCart ? "Add To Cart" : "Buy Now"}
        </button>
      </div>

    </div>
    );
};

export default MainCards; 