import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

function Drinks({ history }) {
  const { recipes } = useContext(DataContext);
  useEffect(() => {
    const recipe = Object.values(recipes);
    if (recipe && recipe.length === 1) {
      history.push(`/drinks/${recipe[0][0].idDrink}`);
    }
  }, [recipes.length, history, recipes]);

  return (
    <div>
      <Header title="Drinks" bool btnName="drink" />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Drinks;
