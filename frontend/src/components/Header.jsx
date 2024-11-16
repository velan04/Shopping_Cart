import React from 'react'
import { FaOpencart } from "react-icons/fa6";
import Search from './search';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isProductPage = location.pathname.startsWith('/product/');

  return (
    <div className='w-full bg-white h-20 font-serif sticky top-0 flex justify-between items-center px-5 shadow-md'>
          
      <Link to={"/"}>
          <div className='flex logo '>
            <h1 className='text-3xl'>Shopping Cart</h1>
            <div className='text-3xl'><FaOpencart /></div>
          </div>
      </Link>
      {!isProductPage && <Search />}
        <ul className='flex gap-5 text-xl '>
          <Link to={"/products"}><li>Products</li></Link>
            <li>Orders</li>
            <li>Cart</li>
        <li className='bg-slate-900 text-white px-2 rounded-md hoverli'>Login</li>
        </ul>
        
    </div>
  )
}

export default Header