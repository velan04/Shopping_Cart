import React from 'react';
import { AiFillProduct } from "react-icons/ai";
import { MdBorderColor } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';



const MobileNav = () => {
  return (
    <div className='mobile-nav fixed bottom-0 w-[420px] h-14 bg-white items-center
    justify-between px-5 text-4xl hidden'>
          <Link to={"/products"}><span><AiFillProduct /></span></Link>
          <Link to={"/orders"}><span><MdBorderColor /></span></Link>
          <Link to={"/cart"}><span><IoIosCart /></span></Link>
    </div>
  )
}

export default MobileNav