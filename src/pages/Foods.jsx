import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

function Foods({ history }) {
  const { recipes } = useContext(DataContext);
  const recipe = Object.values(recipes);
  useEffect(() => {
    if (recipe.length === 1 && recipe[0].length === 1) {
      history.push(`/foods/${recipe[0][0].idMeal}`);
    }
  }, [recipes.length, history, recipes, recipe]);
  return (
    <div>
      <Header title="Foods" bool btnName="food" />
<<<<<<< HEAD
      <Footer />
=======
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
>>>>>>> ee84c8b4d7e049029f1c3f38371c094ecc67d242
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Foods;
