import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

function SearchBar({ btnName }) {
  const { setFoodFilter, changeSearch, setActualPage } = useContext(DataContext);
  const [type, setType] = useState('');
  const [filter, setFilter] = useState('');

  const handleClick = (btn) => {
    changeSearch(type);
    setFoodFilter(filter);
    setActualPage(btn);
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
      <button
        type="button"
        data-testid="exec-search-btn"
        name={ btnName }
        onClick={ ({ target: { name } }) => handleClick(name) }
      >
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default SearchBar;
