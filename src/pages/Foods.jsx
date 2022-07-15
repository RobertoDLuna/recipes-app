import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

function Foods({ history }) {
  const { recipes } = useContext(DataContext);
  const recipe = Object.values(recipes);
  useEffect(() => {
    if (recipe[0] && recipe[0].length === 1) {
      history.push(`/foods/${recipe[0][0].idMeal}`);
    } else if (recipes.meals === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [recipes.length, history, recipes, recipe]);
  return (
    <div>
      <Header title="Foods" bool btnName="food" />
      {recipe[0]
        && recipe[0].filter((_, index) => index <= +'11').map((e, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              className="card-img"
              data-testid={ `${index}-card-img` }
              src={ e.strMealThumb }
              alt="img da receita"
            />
            <h3 data-testid={ `${index}-card-name` }>{e.strMeal}</h3>
          </div>
        ))}
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Foods;
