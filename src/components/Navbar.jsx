import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-warm-brown-800 text-warm-brown-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link to="/" className="text-2xl font-bold hover:text-warm-brown-200 transition">
            🍳 Recipe Haven
          </Link>
          
          <form onSubmit={handleSearch} className="flex gap-2 flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-warm-brown-700 text-warm-brown-50 placeholder-warm-brown-300 focus:outline-none focus:ring-2 focus:ring-warm-brown-500"
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-warm-brown-600 hover:bg-warm-brown-500 rounded-lg font-semibold transition"
            >
              Search
            </button>
          </form>
          
          <div className="flex gap-4">
            <Link to="/" className="px-4 py-2 hover:bg-warm-brown-700 rounded-lg transition">
              Home
            </Link>
            <Link to="/favorites" className="px-4 py-2 hover:bg-warm-brown-700 rounded-lg transition">
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
