import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import { DataContext } from '../context/DataContext';
import icon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, bool }) {
  return (
    <header>
      <Link to="/profile">
        <button type="button">
          <img
            src={ icon }
            data-testid="profile-top-btn"
            alt="imagem de perfil"
          />
        </button>
      </Link>
      {bool && (
        <button type="button">
          <img
            src={ searchIcon }
            data-testid="search-top-btn"
            alt="imagem de perfil"
          />
        </button>)}
      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  bool: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
