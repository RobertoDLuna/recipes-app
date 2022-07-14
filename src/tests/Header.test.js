import React from 'react';
import {screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

describe('test the Header Component', () => {
    test('test the click of iconBtn', () => {
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

      test('test the click of iconBtn', () => {
        const { history } = renderWithRouter(<App />)
        const emailInput = screen.getByTestId("email-input");
        const passwordInput = screen.getByTestId("password-input");
        const formBtn = screen.getByTestId("login-submit-btn");
  
  
        userEvent.type(emailInput, 'lucas@lucas.com');
        userEvent.type(passwordInput, '12345678');
        userEvent.click(formBtn);

        const searchBtn = screen.getByTestId("search-top-btn");

        userEvent.click(searchBtn);

        const searchBar = screen.getByTestId("search-input");
         expect(searchBar).toBeInTheDocument();
         userEvent.click(searchBtn);
         expect(searchBar).not.toBeInTheDocument();

      });

})