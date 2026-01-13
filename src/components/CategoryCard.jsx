import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`} className="category-card">
      <div className="category-card-image">
        <img src={category.image} alt={category.name} />
        <div className="category-card-overlay">
          <h3>{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
