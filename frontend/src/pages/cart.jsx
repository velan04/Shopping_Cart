import React, { useState } from 'react';
import { Fragment } from 'react';
import apicall from '../untils/apicall';
import {toast} from 'react-toastify';

const Cart = ({cartItems, setCartItems}) => {
    const [complete, setComplete] = useState(false)

    function increaseQty (item) {
        if(item.product.stock == item.count){
            return;
        }
        const updatedItems = cartItems.map((i) => {
            if(i.product._id == item.product._id){
                i.count++
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
                i.count--
            }
            return i;

        })
        setCartItems(updatedItems);
    }
    
   function removeItem(item) {
       const updatedItems = cartItems.filter((i) => {
           if (i.product._id !== item.product._id) {
               return true
           }
       })
       setCartItems(updatedItems);
   }

   const placeOrder = () => {
    fetch(`${apicall}/orders`,{
         method: 'POST',
         headers: {'content-Type': 'application/json'},
         body: JSON.stringify(cartItems)
    })
   .then(() => {
        setCartItems([]);
        setComplete(true);
        toast.success('Order Placed Successfully!');
   })
   }

    
  return (<>
      <div className="mb-24" key={cartItems.product}>
          <div className="flex flex-col gap-6" key={cartItems.product}>
              {cartItems.length > 0 && (
                  <h1 className="text-2xl md:text-3xl border-b-2 m-6 pb-4 border-gray-300">
                      Your Cart - {cartItems.length} items
                  </h1>
              )}
              {cartItems.map((item) => (
                  <div
                      className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 items-center"
                      key={item.product.id}
                  >
                      <Fragment>
                          <img
                              src={item.product.img}
                              alt="products"
                              className="rounded-md w-full md:w-72 h-auto"
                          />
                          <div className="mb-5 p-2">
                              <h3 className="text-lg md:text-2xl">{item.product.title}</h3>
                              <div>
                                  <div className="flex gap-2 my-3">
                                      <button
                                          className="text-white bg-blue-700 px-3 py-1 rounded"
                                          onClick={() => decreaseQty(item)}
                                      >
                                          -
                                      </button>
                                      <input
                                          type="number"
                                          value={item.count}
                                          readOnly
                                          className="w-12 text-center border border-gray-300"
                                      />
                                      <button
                                          className="text-white bg-blue-700 px-3 py-1 rounded"
                                          onClick={() => increaseQty(item)}
                                      >
                                          +
                                      </button>
                                      <button
                                          className="text-white bg-blue-700 px-3 py-1 rounded ml-3"
                                          onClick={() => removeItem(item)}
                                      >
                                          Remove
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div className="font-extrabold mt-1 text-center md:col-start-3">
                              <h3>Price</h3>
                              <h3 className="text-lg md:text-xl">{item.product.price}</h3>
                          </div>
                      </Fragment>
                  </div>
              ))}
              {cartItems.length == 0 && !complete && (
                  <div className="container flex justify-center items-center h-[500px]">
                      <h1 className="text-2xl md:text-3xl">Oops, Your Cart is empty!</h1>
                  </div>
              )}
              {complete && (
                  <div className="flex justify-center items-center h-[500px]">
                      <h1 className="text-2xl md:text-3xl">Order Placed Successfully!</h1>
                  </div>
              )}
          </div>
          {cartItems.length > 0 && (
              <div
                  className="flex flex-col justify-center gap-6 px-4 w-full md:w-72 h-full
      fixed bottom-0 md:top-0 right-0 bg-white border-t-2 md:border-l-2"
              >
                  <h1 className="text-xl md:text-2xl text-center font-semibold">
                      Order Summary
                  </h1>
                  <div className="flex justify-between text-lg md:text-xl">
                      <h3>Subtotal:</h3>
                      <h3>{cartItems.reduce((acc, item) => acc + item.count, 0)} (Units)</h3>
                  </div>
                  <div className="flex justify-between text-lg md:text-xl">
                      <h3>Est. Total:</h3>
                      <h3>
                          ₹{" "}
                          {cartItems.reduce(
                              (acc, item) => acc + item.product.price * item.count,
                              0
                          )}
                      </h3>
                  </div>
                  <button
                      className="mt-3 text-white bg-blue-700 text-center p-2 rounded"
                      onClick={placeOrder}
                  >
                      Proceed to Checkout
                  </button>
              </div>
          )}
      </div>
    </>
  )
}

export default Cart