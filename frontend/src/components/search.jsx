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
      <div><div className='search flex  justify-between hover:border-blue-500
        border border-gray-300 w-[400px] p-2 rounded-md'>
          <input type="text" placeholder='Search...'
              className='input w-80  focus:outline-none'
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={enterHandler}
          />
          <button onClick={searchHandler}>
            <FaSearch />
        </button>
      </div>
      </div>
  )
}

export default Search