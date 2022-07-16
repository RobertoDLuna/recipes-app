import React, { useEffect, useState } from 'react';

function DrinkFilteredRecipes() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryFetch = async () => {
      const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const json = await resp.json();
      setCategories(json.drinks.filter((_, i) => i <= +'4'));
    };
    categoryFetch();
  }, []);

  return (
    <div>
      {categories
      && categories.map((e, index) => (
        <div key={ index }>
          <button
            type="button"
            data-testid={ `${e.strCategory}-category-filter` }
          >
            {e.strCategory}
          </button>
        </div>
      ))}
    </div>
  );
}

export default DrinkFilteredRecipes;
