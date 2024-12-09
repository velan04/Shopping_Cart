import { Routes, Route } from 'react-router-dom';
import App from './App';
import Products from './pages/products';
import Product from './pages/[id]';
import { useState } from 'react';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';
import Order from './pages/order';
import MobileNav from './components/MobileNav';

function MainRoutes() {
    const [cartItems, setCartItems] = useState([])
    return (
    <>
        <ToastContainer draggable theme='dark' autoClose={1000} position='top-right'/>
        <Header cartItems={cartItems} />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
        <MobileNav />
    </>
    );
}

export default MainRoutes;
