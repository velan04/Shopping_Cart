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
                <div className="flex justify-center items-center h-[500px]">
                    <h1 className="text-3xl">No Orders Found</h1>
                </div>
            ) : (
                orders.map((order) => (
                    <div
                        key={order._id}
                        className="orders flex flex-wrap justify-between items-start border p-4 px-6
                        rounded-md shadow-md mb-10"
                    >
                        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center mb-4">
                            {order.cartItems.map((cartItem) => (
                                <div key={cartItem.product._id} className="flex flex-col items-center">
                                    <img
                                        src={cartItem.product.img}
                                        alt={cartItem.product.title}
                                        className="w-32 h-24 object-cover rounded-md sm:w-48 sm:h-32"
                                    />
                                    <h3 className="text-lg font-semibold mt-2 text-center">{cartItem.product.title}</h3>
                                    <p className="text-gray-700 text-center">Amount: {order.amount}</p>
                                    <p className="text-gray-500 text-center">Quantity: {cartItem.count}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full md:w-auto text-center md:text-left mb-4">
                            <h2 className="text-xl font-bold mb-2">Order ID: {order._id}</h2>
                        </div>
                        <div className="w-full md:w-auto text-center">
                            <h1 className="text-2xl font-semibold">Status</h1>
                            <h1 className="text-red-500">{order.status}</h1>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Order;
