import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { IoStar } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import apicall from '../untils/apicall';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  
  useEffect(() => {

    fetch(`${apicall}/products/`+id)
      .then(res => res.json())
      .then(res => setProduct([res.product]))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };



  return (<>
    <Header />
    {
      product.map((item) => (
        <div key={item.id || 'unique-key'}
        className='productDetails h-[550px] flex justify-center gap-20 items-center'>
          <div className='h-[450px] object-cover'>
            <img src={item.img} alt="" width={500} className='h-full' />
          </div>
          <div className='h-[500px] w-[40%]'>
            <div className='w-full'>
              <h1 className='mb-5 text-4xl font-normal capitalize'>{item.title}</h1>
            </div>
            <hr />
            <div className='flex items-center gap-2 my-5 '>
              <h2 className='text-2xl '>
                <Stack spacing={1}>
                  <Rating name="half-rating-read" defaultValue={item.review} precision={0.5} readOnly />
                </Stack>
              </h2>
            </div>
            <hr />
            <h1 className='text-3xl font-semibold my-5'>$ {item.price}</h1>
            <div className='flex gap-2 my-3'>
              <button className='text-white bg-slate-900 size-8 rounded'
                onClick={handleDecrement}>
                -
              </button>
              <input type="number" value={count} onChange={handleChange} readOnly
                className='w-10 text-right border border-gray-300' />
              <button className='text-white bg-slate-900 size-8 rounded'
                onClick={handleIncrement}>
                +
              </button>
              <button className='text-white bg-slate-900 size-8 rounded w-28 ml-9'>Add Cart</button>
            </div>
            <div className='mt-7'>
              <h1 className='text-2xl'>Description :</h1>
              <br />
              <p className='capitalize'>{item.description}</p>
            </div>
          </div>

        </div>
      ))
    }
    
  </>
  )
}

export default product