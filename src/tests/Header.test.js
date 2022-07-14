import React from 'react';
import {screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

describe('test the Header Component', () => {
    test('test if form button is able when text inputs are filled correctly', () => {
        const { history } = renderWithRouter(<App />)
        const emailInput = screen.getByTestId("email-input");
        const passwordInput = screen.getByTestId("password-input");
        const formBtn = screen.getByTestId("login-submit-btn");
  
  
        userEvent.type(emailInput, 'lucas@lucas.com');
        userEvent.type(passwordInput, '12345678');
        userEvent.click(formBtn);

        const iconBtn = screen.getByTestId("profile-top-btn");

        userEvent.click(iconBtn);
        expect(history.location.pathname).toBe('/profile');
      });

})