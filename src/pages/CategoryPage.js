import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="category-page">
      <h1>{category} Recipes</h1>
      {/* recipe list here */}
    </div>
  );
};

export default CategoryPage;
