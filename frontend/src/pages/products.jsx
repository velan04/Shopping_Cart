import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import apicall from '../untils/apicall';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch(`${apicall}/products?${searchParams}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.products);
                setLoading(false); // Stop showing Skeletons after data loads
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false); // Stop showing Skeletons even on error
            });
    }, [searchParams]);

    return (
        <div className="products-container grid grid-cols-3 justify-center w-[1310px] mx-4 gap-5 my-5">
            {loading
                ? Array.from(new Array(6)).map((_, index) => (
                    <div className="mobile-card shadow-xl rounded-b-xl" key={index}>
                        <Box className="min-w-[250px] min-h-[250px]">
                            <Skeleton variant="rectangular" width={430} height={300} />
                        </Box>
                        <Box className="mb-5 max-w-full p-2">
                            <Skeleton width="60%" height={30} />
                            <Skeleton width="80%" />
                            <Box className="flex justify-between items-center mt-3">
                                <Skeleton width="30%" height={25} />
                                <Skeleton width={100} height={40} />
                            </Box>
                        </Box>
                    </div>
                ))
                : products.map((product) => (
                    <div className="mobile-card shadow-xl rounded-b-xl" key={product.id}>
                        <div className="min-w-[250px] min-h-[250px]">
                            <img
                                src={product.img}
                                alt="products"
                                className="rounded-t-xl object-cover h-[300px] w-[430px]"
                            />
                        </div>
                        <div className="mb-5 max-w-full p-2">
                            <h1 className="text-xl font-semibold capitalize">{product.title}</h1>
                            <p className="font-normal line-clamp-2 capitalize">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center font-extrabold mt-1">
                                <h3 className="text-xl">price: {product.price}</h3>
                                <div className="flex items-center gap-2">
                                    <Stack spacing={1}>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={product.review}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </Stack>
                                </div>
                                <Link to={`/product/${product._id}`}>
                                    <button className="bg-slate-900 text-white p-2 rounded-md">
                                        View More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Products;
