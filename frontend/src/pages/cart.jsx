import React from 'react';
import { Fragment } from 'react';

const Cart = ({cartItems, setCartItems}) => {
    function increaseQty (item) {
        if(item.product.stock == item.count){
            return;
        }
        const updatedItems = cartItems.map((i) => {
            if(i.product._id == item.product._id){
                i.count + 1
            }
            return i;

        })
        setCartItems(updatedItems);
    }

    function decreaseQty (item) {
        if(item.count == 1){
            return;
        }
        const updatedItems = cartItems.map((i) => {
            if(i.product._id == item.product._id){
                i.count - 1
            }
            return i;

        })
        setCartItems(updatedItems);
    }
    
   function removeItem(item) {
    const updatedCartItems = cartItems.filter((i) => {
        if(i.product._id !== item.product._id){

        };
   })
   setCartItems(updatedCartItems);
}

    

    console.log(cartItems);
  return (<>
      <div className='mb-24' key={cartItems.product}>
          <div className='flex flex-col gap-6'>
              <h1 className='text-3xl border-b-2 m-9 pb-4 border-gray-300'>Your Cart - {cartItems.length} items </h1>
              {cartItems.map((item) => (
              <div className='grid grid-cols-4 mx-3 items-center'>
                    <Fragment>
                        <img src={item.product.img} alt='products'
                            width={300} height={200} className='rounded-md' />
                        <div className='mb-5 max-w-64 p-2 '>
                            <h3 className='text-2xl'>{item.product.title}</h3>
                            <div>
                                <div className='flex gap-2 my-3'>
                                    <button className='text-white bg-slate-900 size-8 rounded'
                                          onClick={() => decreaseQty(item)}>
                                        -
                                    </button>
                                    <input type="number" value={item.count} readOnly
                                        className='w-10 text-right border border-gray-300' />
                                    <button className='text-white bg-slate-900 size-8 rounded'
                                          onClick={() => increaseQty(item)}>
                                        +
                                    </button>
                                    <button className='text-white bg-slate-900 size-8 rounded w-28 ml-9'
                                          onClick={() => removeItem(item)}>Remove
                                    </button>
                                </div>                           
                                 </div>
                        </div>
                        <div className='font-extrabold mt-1 text-center col-start-3'>
                            <h3>Price</h3>
                            <h3 className='text-xl'>{item.product.price}</h3>
                        </div>
                    </Fragment>
                </div>
              ))}
          </div>
          {
            cartItems.map((item) => (
          <div className='flex flex-col justify-center gap-6 px-4 w-72 h-full
            fixed right-2 top-0 bg-white border-l-2'>
              <h1 className='text-2xl text-center font-semibold'>Order Summary</h1>
              <div className='flex justify-between'>
                  <h3>Subtotal</h3>
                  <h3>{item.product.count * item.product.price}</h3>
              </div>
              <div className='flex justify-between'>
                  <h3>Shipping</h3>
                  <h3>Rs. 100</h3>
              </div>
              <div className='flex justify-between font-medium text-xl'>
                  <h3 className=''>Total</h3>
                  <h3>Rs. 1100</h3>
              </div>
              <button>
                  <h3 className='mt-3 text-white bg-slate-900 text-center p-2 rounded'>Proceed to Checkout</h3>
              </button>
          </div>
          ))}
      </div></>
  )
}

export default Cart