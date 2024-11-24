import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apicall from '../untils/apicall';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';

const product = ({cartItems, setCartItems}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  
  useEffect(() => {

    fetch(`${apicall}/products/`+id)
      .then(res => res.json())
      .then(res => setProduct(res.product))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleIncrement = () => {
    if(count >= product.stock){
      return;
    }
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

  const addToCart = () => {
    const itemExist = cartItems.find((item) => item.product._id === product._id)
    if (!itemExist) {
      const newItems = { product, count }
      setCartItems([...cartItems, newItems])
      toast.success("Cart Item Added successfully")
    }
  }



  return (<>
    { product &&  (
        <div key={product._id || 'unique-key'}
          className='productDetails h-[550px] flex justify-center gap-20 items-center'>
          <div className='h-[450px] object-cover'>
          <img src={product.img} alt="" width={500} className='h-full' />
          </div>
          <div className='h-[500px] w-[40%]'>
            <div className='w-full'>
            <h1 className='mb-5 text-4xl font-normal capitalize'>{product.title}</h1>
            </div>
            <hr />
            <div className='flex items-center gap-2 my-5 '>
              <h2 className='text-2xl '>
                <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={product.review} precision={0.5} readOnly />
                </Stack>
              </h2>
            </div>
            <hr />
          <h3 className='text-xl font-semibold'>No of Stock: {product.stock}</h3>
          <h1 className='text-3xl font-semibold my-5'>$ {product.price}</h1>
            <div className='flex gap-2 my-3'>
              <button className='text-white bg-blue-700 size-8 rounded'
                onClick={handleDecrement}>
                -
              </button>
              <input type="number" value={count} onChange={handleChange} readOnly
                className='w-10 text-right border border-gray-300' />
              <button className='text-white bg-blue-700 size-8 rounded'
                onClick={handleIncrement}>
                +
              </button>
              <button className='text-white bg-blue-700 size-8 rounded w-28 ml-9'
                onClick={addToCart}>Add Cart
              </button>
            </div>
            <div className='mt-7'>
              <h1 className='text-2xl'>Description :</h1>
              <br />
            <p className='capitalize'>{product.description}</p>
            </div>
          </div>

        </div>
      )
    
    }
    
  </>
  )
}

export default product