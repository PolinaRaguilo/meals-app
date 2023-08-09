import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

const FavoritesContextProvider = ({children}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = id => {
    setFavoriteMealIds(prev => [...prev, id]);
  };

  const removeFavorite = id => {
    setFavoriteMealIds(prev => prev.filter(item => item !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
