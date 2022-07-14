import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

function DataProvider({ children }) {
  const USER = {
    email: '',
    password: '',
    disabled: true,
  };

  const [userData, setUserData] = useState(USER);

  const contextValue = {
    userData,
    setUserData,
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
