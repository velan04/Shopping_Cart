import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


const Search = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const searchHandler = (e) => {
        navigate(`/products?keyword=${search}`);
    }
    const enterHandler = (e) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    };

  return (
    <div className="search flex items-center justify-between hover:border-blue-500 border
     border-gray-300 w-full max-w-[400px] p-2 rounded-md mx-auto sm:w-[400px] sm:text-sm">
      <input
        type="text"
        placeholder="Search..."
        className="input w-full sm:w-80 focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={enterHandler}
      />
      <button onClick={searchHandler} className="ml-2">
        <FaSearch />
      </button>
    </div>
  )
}

export default Search