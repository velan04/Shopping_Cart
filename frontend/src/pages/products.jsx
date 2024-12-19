import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import apicall from '../untils/apicall';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoCloudUploadSharp } from "react-icons/io5";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        fetch(`${apicall}/products?${searchParams}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.products);
                setLoading(false); // Stop showing Skeletons after data loads
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, [searchParams]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const response = await fetch(`${apicall}/products`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                alert('Product created successfully!');
                setOpen(false); // Close the modal
                // Optionally, refresh the product list
            } else {
                alert(`Failed to create product: ${result.message}`);
            }
        } catch (error) {
            console.error('Error creating product:', error);
            alert('An error occurred while creating the product.');
        }
    };


    return (<>
        <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        justify-center w-full sm:w-[90%] lg:w-[1310px] mx-auto gap-4 sm:gap-5 my-5 px-2 mb-10">
            {loading
                ? Array.from(new Array(products.length || 6)).map((_, index) => (
                    <div className="mobile-card shadow-xl rounded-b-xl" key={index}>
                        <Box className="min-w-[200px] min-h-[200px] sm:min-w-[250px] sm:min-h-[250px]">
                            <Skeleton variant="rectangular" width="100%" height={200} />
                        </Box>
                        <Box className="mb-5 max-w-full p-2">
                            <Skeleton width="60%" height={20} />
                            <Skeleton width="80%" />
                            <Box className="flex justify-between items-center mt-3">
                                <Skeleton width="30%" height={20} />
                                <Skeleton width={80} height={30} />
                            </Box>
                        </Box>
                    </div>
                ))
                : products.map((product) =>
                    product.stock > 0 && (
                        <div className="mobile-card shadow-xl rounded-b-xl" key={product.id}>
                            <div className="w-full h-[200px] sm:h-[250px]">
                                <img
                                    src={product.img}
                                    alt="products"
                                    className="rounded-t-xl object-cover h-full w-full"
                                />
                            </div>
                            <div className="mb-5 max-w-full p-2">
                                <h1 className="text-lg sm:text-xl font-semibold capitalize">
                                    {product.title}
                                </h1>
                                <p className="text-sm sm:text-base font-normal line-clamp-2 capitalize">
                                    {product.description}
                                </p>
                                <div className="flex justify-between items-center font-extrabold mt-1">
                                    <h3 className="text-base sm:text-xl">₹ {product.price}</h3>
                                    <div className="flex items-center gap-1 sm:gap-2">
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
                                        <button className="bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md font-normal">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                )}
        </div>
        <div>
            {/* <button onClick={handleOpen} className='bg-blue-900 px-5 py-3 rounded-xl
            text-white fixed bottom-0 right-0 flex items-center gap-2'>
                <IoCloudUploadSharp />
                Upload.
            </button> */}
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className='text-center font-semibold text-2xl'>Products Details</h1>
                    <form
                        onSubmit={(e) => handleFormSubmit(e)}
                        encType="multipart/form-data"
                        className="grid grid-cols-1 gap-1"
                    >
                        <label htmlFor="">Title:</label>
                        <input type="text" className="border-2" name="title" required />
                        <label htmlFor="">Description:</label>
                        <input type="text" className="border-2" name="description" required />
                        <label htmlFor="">Price:</label>
                        <input type="number" className="border-2" name="price" required />
                        <label htmlFor="">Stock:</label>
                        <input type="number" className="border-2" name="stock" required />
                        <label htmlFor="">Review:</label>
                        <input type="number" className="border-2" name="review" step="0.1" required />
                        <label htmlFor="">Image:</label>
                        <input type="file" name="image" accept="image/*" required />
                        <div className="flex justify-between mt-2">
                            <button type="reset" className="bg-blue-600 p-1 rounded-xl text-white px-4">
                                Reset
                            </button>
                            <button type="submit" className="bg-blue-600 p-1 rounded-xl text-white px-4">
                                Submit
                            </button>
                        </div>
                    </form>

                </Box>
            </Modal> */}
        </div>
    </>);
};

export default Products;
