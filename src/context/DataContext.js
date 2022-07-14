import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

function DataProvider({ children }) {
  const USER = {
    email: '',
    password: '',
  };

  const [userData, setUserData] = useState(USER);
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);

  const contextValue = {
    userData,
    setUserData,
    cocktailsToken,
    mealsToken,
    setCocktailsToken,
    setMealsToken,
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
