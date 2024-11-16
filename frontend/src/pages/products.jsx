import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (<>
        <div className=' card grid grid-cols-3 justify-center w-[1310px] 
                      mx-4 gap-5 my-5'>
                <div className='mobile-card'>
                    <div className=' min-w-[250px] min-h-[250px] '>
                        <img src='/vite.svg' alt='products'
                            className='rounded-md object-cover h-[300px] w-[420px]' />
                    </div>
                    <div className='mb-5 max-w-full p-2'>
                        <h1 className='text-xl font-semibold'>Title</h1>
                        <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit,
                            Temporibus quo culpa iste necessitatibus quia, voluptatem velit deleniti debitis tempora cum voluptatibus, tenetur dolore inventore provident earum at atque pariatur excepturi.</p>
                        <div className='flex justify-between items-center font-extrabold mt-1'>
                            <h3 className='text-xl'>price: ₹4000</h3>
                            <div className='flex items-center gap-2'>4/5</div>
                            <Link href={'products/'}>
                                <button
                                    className='bg-black text-white p-2 rounded-md'>
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
           
    </>)
    }


export default Products;
