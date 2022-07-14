import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Login() {
  const { userData, setUserData } = useContext(DataContext);

  const handleChange = (value, name) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
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
        // disabled={ lockButton }
        // onClick={ this.handleClick }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
