import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-brown-900/70 to-transparent flex items-end">
            <h3 className="text-xl font-bold text-white p-4 w-full">
              {category.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
