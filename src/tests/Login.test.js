import React from 'react';
import { cleanup, render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderPath from './renderPath';

describe('test the login page', () => {
    beforeEach(async () => {
        await act(async () =>{
          renderPath("/")
        } )
    });

    test('test if form button is able when text inputs are filled correctly', () => {
      const emailInput = screen.getByTestId("email-input");
      const passwordInput = screen.getByTestId("password-input");
      const formBtn = screen.getByTestId("login-submit-btn");


      userEvent.type(emailInput, 'lucas@lucas.com');
      userEvent.type(passwordInput, '12345678');
      expect(formBtn).not.toBeDisabled();
    });

    test('test if form button is disabled when text inputs are filled incorrectly', () => {
      const emailInput = screen.getByTestId("email-input");
      const passwordInput = screen.getByTestId("password-input");
      const formBtn = screen.getByTestId("login-submit-btn");


      userEvent.type(emailInput, 'lucaslucas.com');
      userEvent.type(passwordInput, '12345');
      expect(formBtn).toBeDisabled();
    });
    
})