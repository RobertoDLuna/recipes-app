// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

function Foods({ history }) {
  const { recipes } = useContext(DataContext);
  useEffect(() => {
    const recipe = Object.values(recipes);
    if (recipe && recipe.length === 1) {
      history.push(`/foods/${recipe[0][0].idMeal}`);
    }
  }, [recipes.length, history, recipes]);
  return (
    <div>
      <Header title="Foods" bool btnName="food" />
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
