import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { IoStar } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import apicall from '../untils/apicall';

const product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {

    fetch(`${apicall}/products/`+id)
      .then(res => res.json())
      .then(res => setProduct([res.product]))
      .catch(error => console.error('Error fetching products:', error));
  }, [])

  return (<>
    <Header />
    {
      product.map((item) => (
        <div className='productDetails h-[550px] flex justify-center gap-20 items-center'>
          <div className='h-[450px] object-cover'>
            <img src={item.img} alt="" width={500} className='h-full' />
          </div>
          <div className='h-[500px] w-[40%]'>
            <div className='w-full'>
              <h1 className='py-5 text-4xl font-normal'>{item.title}</h1>
            </div>
            <hr />
            <div className='flex items-center gap-2'>
              <IoStar />
              <h2 className='text-2xl py-3'>{item.review}/5</h2>
            </div>
            <hr />
            <h1 className='text-3xl font-semibold'>$ {item.price}</h1>
            <div className='flex gap-2 my-3'>
              <button className='text-white bg-slate-900 size-8 rounded'>+</button>
              <input type="number" defaultValue={1} className='w-10 text-right border border-gray-300' />
              <button className='text-white bg-slate-900 size-8 rounded'>-</button>
              <button className='text-white bg-slate-900 size-8 rounded w-28 ml-9'>Add Cart</button>
            </div>
            <div className='mt-7'>
              <h1 className='text-2xl'>Description :</h1>
              <br />
              <p>{item.description}</p>
            </div>
          </div>

        </div>
      ))
    }
    
  </>
  )
}

export default product