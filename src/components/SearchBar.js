import React, { useState } from 'react'

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    }
  return (
    <form onSubmit={handleSearch} className='flex items-center w-full max-w-md mx-auto'>
        <input 
            type='text'
            className='w-full px-4 py-2 border text-black border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500' 
        >
            Search
        </button>
    </form>
  )
}

export default SearchBar