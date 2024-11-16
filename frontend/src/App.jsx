import { useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/products'); // Redirect to products
    }, 2500);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [navigate]);

  return (
    <>
      <div className='flex justify-center items-center h-[600px]'>
        <video autoPlay loop muted className='h-96 w-96'>
          <source src="/cart.mp4" type="video/mp4" />
        </video>
      </div>

    </>
  )
}

export default App
