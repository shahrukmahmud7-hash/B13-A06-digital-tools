import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { toast } from 'react-toastify';

const Cart = ({ carts , setCarts }) => {
  
    const totalPrice = carts.reduce((sum, cart)=> 
    sum + cart.price, 0);
  
    const handleProceedCheckout = () => {
        setCarts([])
          toast.success("Proceed Checkout successful")
    }

    const handleDelete = (cart) => {
       const filteredCartsArray = carts.filter(b =>
        b.id !== cart.id)
        setCarts(filteredCartsArray)
          toast.success("Item deleted")
    }

    return (
        <div className='bg-gradient-to-r from-slate-100 to-slate-100 py-20 rounded-2xl max-w-7xl mx-auto  mb-12
        '>
       
        <h1 className='text-2xl font-bold px-6 mt-6'>
        Your Cart
       </h1>
          
          {
            carts.length === 0 ? <div className='text-center text-2xl font-semibold'> 
              <p className='flex justify-center py-4'>  
                <LuShoppingCart />
              </p>
              <p>Your cart is empty</p>
              </div> : 
            <> 
              <div className='space-y-5 mt-5'>

        {
          carts.map(cart => (
            <div 
              className='flex items-center justify-between border rounded-lg p-4 m-6' 
              key={cart.id}
            >
              <div className='flex gap-4'>
                <span className='p-4 bg-gradient-to-r
                 from-white to-slate-200 rounded-full'>
                  {cart.icon}
                </span> 
                <div>
                  <h2 className='font-semibold text-2xl'
                  >{cart.name}</h2>
                  <p>${cart.price}</p>
                </div>
                
              </div>
              <div className='flex justify-end'>
                  <button onClick={()=>handleDelete(cart)} className='
                  text-[#FF3980] text-2xl'>Remove</button>
                </div>
            </div>
          ))
        }
      </div>
      <div className='space-y-5 mt-5 px-6'>

        <div className='flex justify-between
         text-[##627382] text-3xl p-5'>
          <div>Total:</div>
          <div className='text-[#101727] font-bold '>${totalPrice}</div>
        </div>

        <button onClick={ handleProceedCheckout} className='w-full py-4 bg-[#4F39F6]
         text-white text-2xl rounded-full'>
          Proceed to Checkout
        </button>

      </div>
            </>
          } 

    </div>
  );
};

export default Cart; 