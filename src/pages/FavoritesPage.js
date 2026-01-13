import React from 'react'

const FavoritesPage = ({ onRecipeClick }) => {
  const { favorites } = useFavorites();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch details for all favorite recipes
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const recipePromises = favorites.map(id =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => data.meals?.[0])
        );
        const fetchedRecipes = await Promise.all(recipePromises);
        setRecipes(fetchedRecipes.filter(Boolean));
      } catch (error) {
        console.error('error fetching favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    if (favorites.length > 0) {
      fetchFavorites();
    } else {
      setLoading(false);
    }
  }, [favorites]);

  if (loading) return <Spinner />;

  if (favorites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">My Favorites</h2>
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <Heart size={64} className="mx-auto mb-4 text-gray-400" />
          <p className="text-xl text-gray-600 mb-4">
            You haven't added any favorites yet
          </p>
          <p className="text-gray-500">
            Browse recipes and click the heart icon to save your favorites, MWAH!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Favorites ({favorites.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onClick={() => onRecipeClick(recipe.idMeal)}
          />
        ))}
      </div>
    </div>
  );
};


export default FavoritesPage;
