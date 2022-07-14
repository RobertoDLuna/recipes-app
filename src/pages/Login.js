import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Login({ history }) {
  const { userData, setUserData, mealsToken, cocktailsToken } = useContext(DataContext);

  const handleChange = (value, name) => {
    const regexValidation = /\S+@\w+\.\w+/;
    const finalValidation = regexValidation.test(userData.email);
    const minLength = 6;
    if (finalValidation && userData.password.length >= minLength) {
      setUserData({
        ...userData,
        [name]: value,
        disabled: false,
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
        disabled: true,
      });
    }
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email: userData.email }));
    localStorage.setItem('mealsToken', mealsToken);
    localStorage.setItem('cocktailsToken', cocktailsToken);
    history.push('/foods');
  };

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ ({ target }) => handleChange(target.value, target.name) }
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ ({ target }) => handleChange(target.value, target.name) }
        />
        <button
          className="button-form"
          type="button"
          data-testid="login-submit-btn"
          disabled={ userData.disabled }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
