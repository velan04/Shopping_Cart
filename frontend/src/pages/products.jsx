import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import apicall from '../untils/apicall';
import { IoIosStar } from "react-icons/io";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${apicall}/products`)
            .then(res => res.json())
            .then(res => setProducts(res.products))
            .catch(error => console.error('Error fetching products:', error));
    }, [])

    return (<>
        <Header />
        <div className=' card grid grid-cols-3 justify-center w-[1310px] 
                      mx-4 gap-5 my-5'>
            {
                products.map((product) => (           
                    <div className='mobile-card shadow-xl' key={product.id}>
                    <div className=' min-w-[250px] min-h-[250px] '>
                        <img src={product.img} alt='products'
                            className='rounded-md object-cover h-[300px] w-[420px]' />
                    </div>
                    <div className='mb-5 max-w-full p-2'>
                        <h1 className='text-xl font-semibold'>{product.title}</h1>
                        <p className='font-normal'>{product.description}</p>
                        <div className='flex justify-between items-center font-extrabold mt-1'>
                            <h3 className='text-xl'>price: {product.price}</h3>
                                <div className='flex items-center gap-2'><IoIosStar />{product.review}/5</div>
                            <Link to={"/product/"+product._id}>
                                <button
                                    className='bg-slate-900 text-white p-2 rounded-md'>
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
           
    </>)
    }


export default Products;
