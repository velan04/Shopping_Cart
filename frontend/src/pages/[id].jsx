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
    {product && (
      <div
        key={product._id || "unique-key"}
        className="productDetails flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center p-5"
      >
        {/* Product Image */}
        <div className="h-[300px] md:h-[450px] object-cover">
          <img
            src={product.img}
            alt=""
            className="h-full w-full max-w-[300px] md:max-w-[500px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-[60%]">
          <div className="w-full mb-5">
            <h1 className="text-2xl md:text-4xl font-normal capitalize">
              {product.title}
            </h1>
          </div>
          <hr />
          <div className="flex items-center gap-2 my-5">
            <h2 className="text-lg md:text-2xl">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={product.review}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </h2>
          </div>
          <hr />
          <h3 className="text-lg md:text-xl font-semibold">
            No of Stock: {product.stock}
          </h3>
          <h1 className="text-2xl md:text-3xl font-semibold my-5">
            $ {product.price}
          </h1>
          <div className="flex gap-2 my-3 items-center">
            <button
              className="text-white bg-blue-700 px-3 py-2 rounded"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="number"
              value={count}
              onChange={handleChange}
              readOnly
              className="w-12 text-center border border-gray-300"
            />
            <button
              className="text-white bg-blue-700 px-3 py-2 rounded"
              onClick={handleIncrement}
            >
              +
            </button>
            <button
              className="text-white bg-blue-700 px-5 py-2 rounded w-full md:w-28"
              onClick={addToCart}
            >
              Add Cart
            </button>
          </div>
          <div className="mt-7">
            <h1 className="text-xl md:text-2xl">Description:</h1>
            <br />
            <p className="capitalize text-sm md:text-base">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default product