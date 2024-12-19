import React from 'react';
import { AiFillProduct } from "react-icons/ai";
import { MdBorderColor } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';



const MobileNav = () => {
  return (
    <div className="mobile-nav fixed bottom-0 w-full h-14 bg-white flex items-center justify-between px-5 text-4xl sm:w-[420px]">
      <Link to="/products" className="flex-1 text-center">
        <AiFillProduct />
      </Link>
      <Link to="/orders" className="flex-1 text-center">
        <MdBorderColor />
      </Link>
      <Link to="/cart" className="flex-1 text-center">
        <IoIosCart />
      </Link>
    </div>
  )
}

export default MobileNav