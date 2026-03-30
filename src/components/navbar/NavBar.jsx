import React from 'react';
import ShoopingCart from '../../assets/products/shopping-cart.png'

const NavBar = () => {
    return (
      <div className='shadow-sm'>
   <div className=' w-9/12 mx-auto mb-20'>
       <div className="navbar bg-base-100 ">
  <div className="navbar-start">

    <a className="text-[#4F39F6] text-3xl font-bold ">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-[16px] text-semibold text-[#101727]'
      ><a>Products</a></li>
      <li className='text-[16px] text-semibold text-[#101727]'
      ><a>Features</a></li>
      <li className='text-[16px] text-semibold text-[#101727]'
      ><a>Pricing</a></li>
      <li className='text-[16px] text-semibold text-[#101727]'
      ><a>Testimonials</a></li>
      <li className='text-[16px] text-semibold text-[#101727]'
      ><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2 ">
    <img src={ShoopingCart} alt="" />
    <p className='text-[16px] text-semibold text-[#101727]'
    >Login</p>
    <button className="btn  text-white bg-gradient-to-r 
    from-[#4F39F6] to-[#7A6CFF] border-none rounded-full">
      Get Started
    </button>
  </div>
</div>
</div>
      </div>
    );
};

export default NavBar; 