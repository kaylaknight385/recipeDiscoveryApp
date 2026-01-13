import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch, currentPage, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { favorites } = useFavorites();

  // handle search submission
  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  // handle enter key press in search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <ChefHat size={32} />
            <h1 className="text-2xl font-bold">Recipe Discovery</h1>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search recipes..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button 
                onClick={handleSearchClick}
                className="absolute right-2 top-2 text-gray-600 hover:text-gray-900"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                currentPage === 'home' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentPage('favorites')}
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                currentPage === 'favorites' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              <Heart size={20} />
              <span>Favorites ({favorites.length})</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
