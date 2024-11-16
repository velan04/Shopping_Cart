import { Routes, Route } from 'react-router-dom';
import App from './App';
import Products from './pages/products';
import Product from './pages/[id]';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    );
}

export default MainRoutes;
