import React from 'react';

function SearchBar() {
  return (
    <div>
      <input type="text" data-testid="search-input" placeholder="Buscar" />
      <label htmlFor="search">
        <input
          type="radio"
          name="search"
          id="search"
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="name"
          id="name"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="first">
        <input
          type="radio"
          name="first"
          id="first"
          data-testid="first-letter-search-radio"
        />
        Primeira Letra
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}

export default SearchBar;
