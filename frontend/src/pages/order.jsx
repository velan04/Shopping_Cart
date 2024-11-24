import { useState, useEffect } from 'react';
import apicall from '../untils/apicall';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${apicall}/orders/`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setOrders(data.orders);
                    console.log(data.orders);
                }
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    return (
        <div className="p-4">
            {orders.length === 0 ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <h1 className='text-3xl'>No Orders Found</h1>
                </div>
            ) : (
                orders.map((order) => (
                    <div className='flex justify-between w-full items-center  border p-4 px-6 mb-4 rounded-md shadow-md'> 
                        <div key={order._id} className="">
                            <div className="">
                                {order.cartItems.map((cartItem) => (
                                    <div key={cartItem.product._id} className="flex flex-col items-center">
                                        <img
                                            src={cartItem.product.img}
                                            alt={cartItem.product.title}
                                            className="w-48 h-32 object-cover rounded-md"
                                        />
                                        <h3 className="text-lg font-semibold mt-2">{cartItem.product.title}</h3>
                                        <p className="text-gray-700 ">Amount: {order.amount}</p>
                                        <p className="text-gray-500">Quantity: {cartItem.count}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">Order ID: {order._id}</h2>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Status</h1>
                            <h1 className='text-red-500'>{order.status}</h1>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Order;
