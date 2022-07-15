import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

function Drinks({ history }) {
  const { recipes } = useContext(DataContext);
  const recipe = Object.values(recipes);
  useEffect(() => {
    console.log(recipes);
    if (recipe[0] && recipe[0].length === 1) {
      history.push(`/drinks/${recipe[0][0].idDrink}`);
    } else if (recipes.drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [recipes.length, history, recipes, recipe]);

  return (
    <div>
      <Header title="Drinks" bool btnName="drink" />
      {recipe[0]
        && recipe[0].filter((_, index) => index <= +'11').map((e, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              className="card-img"
              data-testid={ `${index}-card-img` }
              src={ e.strDrinkThumb }
              alt="img da receita"
            />
            <h3 data-testid={ `${index}-card-name` }>{e.strDrink}</h3>
          </div>
        ))}
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Drinks;
