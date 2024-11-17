import React from 'react';
import { Fragment } from 'react';

const Cart = (cartItems, setCartItems) => {
    const [count, setCount] = React.useState(1);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleChange = (event) => {
        setCount(parseInt(event.target.value));
    };
    
    const handleRemove = () => {
        setCartItems(cartItems.filter((item) => item.product.id !== cartItems.product.id));
    };

    

    console.log(cartItems);
  return (<>
      <div className='mb-24' key={cartItems.cartItems.product}>
          <h1 className='text-4xl border-b-2 m-9 pb-4 border-gray-300'>Shopping Cart</h1>

          <div className='flex flex-col gap-6'>
            
              <div className='grid grid-cols-4 mx-3 items-center'>
                {cartItems.cartItems.map((item) => (
                    <Fragment>
                        <img src={item.product.img} alt='products'
                            width={300} height={200} className='rounded-md' />
                        <div className='mb-5 max-w-64 p-2 '>
                            <h3 className='text-2xl'>{item.product.title}</h3>
                            <div>
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
                                    <button className='text-white bg-slate-900 size-8 rounded w-28 ml-9'
                                        onClick={handleRemove}>Remove
                                    </button>
                                </div>                           
                                 </div>
                        </div>
                        <div className='font-extrabold mt-1 col-start-4'>
                            <h3>Price</h3>
                            <h3 className='text-xl'>{item.product.price}</h3>
                        </div>
                    </Fragment>
                    ))}
                </div>
              <hr />
          </div>
      </div></>
  )
}

export default Cart