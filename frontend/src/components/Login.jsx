import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Fade } from '@mui/material';
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    py:6
};

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const errorMsg = {
        email: { required: false },
        password: {required: false},
        custom_error: null
    }
    const [errors, setErrors] = useState(errorMsg);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = errorMsg
        let hasError = false;
        if (inputs.email === ''){
            errors.email.required = true;
            hasError = true;
        }
        if (inputs.password === ''){
            errors.password.required = true;
            hasError = true;
        }
        if (!hasError){
            setLoading(true);
        }

        setErrors(errors);
    }

    const [inputs, setInputs] =useState({
        email: '',
        password: '',
    })

    const handleInput = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }


    return (
        <div>
            <li className='text-xl bg-blue-700 px-2 rounded-lg text-white hover:text-gray-200'
                onClick={handleOpen}>Login</li>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <h1 className='text-3xl text-center'>Log in</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="" className='text-xl '>Email</label>
                            <input type="email" onChange={handleInput} name='email'
                            className='border border-gray-500 w-full rounded mb-3 h-10 p-2' />
                            { errors.email.required && 
                                <p className='text-red-500 mb-4'>Email is required</p>
                            }
                        <label htmlFor="" className='text-xl '>Password</label>
                            <input type="password" minLength={6} onChange={handleInput} name='password'
                            className='border border-gray-500 w-full rounded mb-3 h-10 p-2' />
                            { errors.password.required &&
                                <p className='text-red-500 mb-4'>Password is required</p>
                            }
                            { errors.custom_error &&
                                <p className='text-red-500'>{errors.custom_error}</p>
                            }

                        <div className='flex justify-between w-full items-center mt-7'>
                                <p className='cursor-pointer underline'>Forgot password?</p>
                                {
                                    loading? 
                                    <div className="loader"></div>
                                    :
                                    <button className='text-xl bg-blue-700 p-2 rounded-lg
                                 text-white hover:text-gray-200'>Login</button>                                }
                        </div>
                    </form>
                </Box>
                </Fade>
            </Modal>
        </div>
    );
}
