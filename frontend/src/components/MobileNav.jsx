import React from 'react';
import { AiFillProduct } from "react-icons/ai";
import { MdBorderColor } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';



const MobileNav = () => {
  return (
    <div className="mobile-nav fixed bottom-0 w-auto sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] 
    h-14 bg-white flex items-center justify-between px-5 text-2xl sm:text-lg lg:text-xl 
    sm:px-8 md:px-10 lg:px-12 border-t md:hidden">
      <Link to={"/products"}>
        <span><AiFillProduct /></span>
      </Link>
      <Link to={"/orders"}>
        <span><MdBorderColor /></span>
      </Link>
      <Link to={"/cart"}>
        <span><IoIosCart /></span>
      </Link>
    </div>
  )
}

export default MobileNav