import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Login() {
  const { userData, setUserData } = useContext(DataContext);

  const handleChange = (value, name) => {
    setUserData({
      ...userData,
      [name]: value,
    });
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
        // onClick={ this.handleClick }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
