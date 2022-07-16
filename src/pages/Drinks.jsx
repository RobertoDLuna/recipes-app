import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
// import { DataContext } from '../context/DataContext';

function Drinks() {
  // const { recipes } = useContext(DataContext);
  // const recipe = Object.values(recipes);
  // useEffect(() => {
  //   console.log(recipes);
  //   if (recipe[0] && recipe[0].length === 1) {
  //   } else if (recipes.drinks === null) {
  //     global.alert('Sorry, we haven\'t found any recipes for these filters.');
  //   }
  // }, [recipes.length, history, recipes, recipe]);

  return (
    <div>
      <Header title="Drinks" bool btnName="drink" />
      <Recipes />
      {/* {recipe[0]
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
        ))} */}
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
