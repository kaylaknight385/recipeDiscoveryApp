import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="recipe-detail-page">
      <h1>Recipe Details</h1>
      {/* recipe details will be displayed here */}
    </div>
  );
};

export default RecipeDetailPage;
