import React from 'react'
import { FaOpencart } from "react-icons/fa6";
import Search from './search';
import { Link, useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Login from './Login';

const Header = ({cartItems}) => {
  const location = useLocation();

  const isHomeWithAnimatedLogo = location.pathname === '/';
  const isProductPage = location.pathname.startsWith('/products');

  return (
    <>
      {!isHomeWithAnimatedLogo && (
        <div
          className="mobile-size w-full bg-white h-20 font-serif sticky top-0 flex justify-between items-center px-5 shadow-md z-50"
        >
          <Link to={"/"}>
            <div className="logo flex items-center">
              <h1 className="text-lg md:text-3xl">Shopping Cart</h1>
              <div className="text-lg md:text-3xl ml-2">
                <FaOpencart />
              </div>
            </div>
          </Link>

          {/* Search bar shown only on product page */}
          {isProductPage && <Search />}

          {/* Menu items: Hidden on mobile, visible on larger screens */}
          <ul className="menu-btn hidden md:flex gap-5 text-lg md:text-xl">
            <Link to={"/products"}>
              <li>Products</li>
            </Link>
            <Link to={"/orders"}>
              <li>Orders</li>
            </Link>
            <Badge badgeContent={cartItems.length} color="primary">
              <Link to={"/cart"}>
                <li>Cart</li>
              </Link>
            </Badge>
          </ul>
        </div>
      )}
    </>

  )
}


export default Header