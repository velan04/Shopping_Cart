import { Routes, Route } from 'react-router-dom';
import App from './App';
import Products from './pages/products';
import Product from './pages/[id]';
import { useState } from 'react';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainRoutes() {
    const [cartItems, setCartItems] = useState([])
    return (
    <>
            <ToastContainer draggable theme='dark' autoClose={3000} position='top-center'/>
        <Header cartItems={cartItems} />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
    </>
    );
}

export default MainRoutes;
