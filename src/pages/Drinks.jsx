import React from 'react';
import DrinkFilteredRecipes from '../components/DrinkFilteredRecipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
// import { DataContext } from '../context/DataContext';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" bool btnName="drink" />
      <DrinkFilteredRecipes />
      <Recipes />
      <Footer />
    </div>
  );
}

// Drinks.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }).isRequired,
// };

export default Drinks;
