import React from 'react'
import { FaOpencart } from "react-icons/fa6";
import Search from './search';
import { Link, useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Login from './Login';

const Header = ({cartItems}) => {
  const location = useLocation();

  const isHomeWithAnimatedLogo = location.pathname === '/';
  const isProductPage = location.pathname.startsWith('/product/');

  return (
    <>
      {!isHomeWithAnimatedLogo && ( 
    <div className='w-full bg-white h-20 font-serif sticky top-0
    flex justify-between items-center px-5 shadow-md z-50'>
          
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
          <Badge badgeContent={cartItems.length} color="primary">
              <Link to={"/cart"}><li>Cart</li></Link>
          </Badge>
        <Login />
        </ul> 
    </div>
    )}
    </>
  )
}


export default Header