import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

function SearchBar() {
  const { setFoodFilter, changeSearch } = useContext(DataContext);
  const [type, setType] = useState('');
  const [filter, setFilter] = useState('');

  const handleClick = () => {
    changeSearch(type);
    setFoodFilter(filter);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar"
        onChange={ ({ target: { value } }) => setType(value) }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="filter"
          id="ingredient"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onClick={ ({ target: { value } }) => setFilter(value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="filter"
          value="name"
          id="name"
          data-testid="name-search-radio"
          onClick={ ({ target: { value } }) => setFilter(value) }
        />
        Nome
      </label>
      <label htmlFor="first">
        <input
          type="radio"
          name="filter"
          id="first"
          value="firstLetter"
          data-testid="first-letter-search-radio"
          onClick={ ({ target: { value } }) => setFilter(value) }
        />
        Primeira Letra
      </label>
      <button type="button" data-testid="exec-search-btn" onClick={ () => handleClick() }>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
