// context for managing favorites globally
const FavoritesContext = createContext();
const FavoritesProvider = ({ children }) => {
  // use local storage hook to persist favorites
  const [favorites, setFavorites] = useLocalStorage('recipeFavorites', []);
  // add recipe to favorites
  const addFavorite = (recipeId) => {
    setFavorites(prev => [...prev, recipeId]);
  };

  // remove recipe from favorites
  const removeFavorite = (recipeId) => {
    setFavorites(prev => prev.filter(id => id !== recipeId));
  };

  // check if recipe is in favorites
  const isFavorite = (recipeId) => {
    return favorites.includes(recipeId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// custom hook to use favorites context
const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};