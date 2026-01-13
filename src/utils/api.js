const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const api = {
  // Search meals by name
  searchMeals: (query) => `${API_BASE_URL}/search.php?s=${query}`,
  
  // Get meal by ID
  getMealById: (id) => `${API_BASE_URL}/lookup.php?i=${id}`,
  
  // List all categories
  getCategories: () => `${API_BASE_URL}/categories.php`,
  
  // Filter by category
  filterByCategory: (category) => `${API_BASE_URL}/filter.php?c=${category}`,
  
  // Get random meal
  getRandomMeal: () => `${API_BASE_URL}/random.php`,
};

export default api;
