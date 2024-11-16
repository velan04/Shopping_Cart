import { Routes, Route } from 'react-router-dom';
import App from './App';
import Products from './pages/products';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
}

export default MainRoutes;
