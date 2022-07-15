import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

function DataProvider({ children }) {
  const USER = {
    email: '',
    password: '',
  };

  const [userData, setUserData] = useState(USER);
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);

  const [searched, setSearched] = useState('');
  const changeSearch = (param) => {
    setSearched(param);
  };
  const [foodFilter, setFoodFilter] = useState('');
  const [recipes, setRecipes] = useState([]);
  const changeRecipes = (param) => {
    setRecipes(param);
  };

  useEffect(() => {
    const doFetch = async () => {
      if (foodFilter === 'ingredient') {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searched}`);
        const json = await resp.json();
        changeRecipes(json);
      } else if (foodFilter === 'name') {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`);
        const json = await resp.json();
        changeRecipes(json);
      } else if (foodFilter === 'firstLetter' && searched.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else if (foodFilter === 'firstLetter') {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searched}`);
        const json = await resp.json();
        changeRecipes(json);
      }
    };
    doFetch();
  }, [searched, foodFilter]);

  const contextValue = {
    userData,
    setUserData,
    cocktailsToken,
    mealsToken,
    setCocktailsToken,
    setMealsToken,
    searched,
    changeSearch,
    setFoodFilter,
    foodFilter,
    recipes,
  };

  return (
    <DataContext.Provider value={ contextValue }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
