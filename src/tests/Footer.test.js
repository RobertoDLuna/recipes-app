import React from 'react';
import {screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

describe('test the Footer Component', () => {
    test('test the click of drinkBtn', async () => {
        renderWithRouter(<App />)
        const emailInput = screen.getByTestId("email-input");
        const passwordInput = screen.getByTestId("password-input");
        const formBtn = screen.getByTestId("login-submit-btn");
  
  
        userEvent.type(emailInput, 'lucas@lucas.com');
        userEvent.type(passwordInput, '12345678');
        userEvent.click(formBtn);
        
        const drinkButton = await screen.findByTestId("drinks-bottom-btn");
        const foodButton = screen.getByTestId("food-bottom-btn");  

        expect(drinkButton).toBeInTheDocument();
      });
     
})