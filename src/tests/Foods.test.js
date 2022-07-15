import React from 'react';
import {screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import renderPath from './renderPath';

describe('test the foods page', () => {
    test('test the radio ingredient input ', () => {
        const {history} = renderPath("/foods")
        const searchBarBtn = screen.getByTestId('search-top-btn');
        userEvent.click(searchBarBtn);

        const searchBar= screen.getByTestId('search-input');
        const inputIngredient = screen.getByTestId('ingredient-search-radio');
        const btnSend = screen.getByTestId('exec-search-btn');

        userEvent.type(searchBar, 'a')
        userEvent.click(inputIngredient);
        userEvent.click(btnSend);
    });

    test('test the radio ingredient input ', () => {
      const {history} = renderPath("/foods")
      const searchBarBtn = screen.getByTestId('search-top-btn');
      userEvent.click(searchBarBtn);

      const searchBar= screen.getByTestId('search-input');
      const inputName = screen.getByTestId('name-search-radio');
      const btnSend = screen.getByTestId('exec-search-btn');

      userEvent.type(searchBar, 'a')
      userEvent.click(inputName);
      userEvent.click(btnSend);
  });

  test('test the radio ingredient input ', () => {
    const {history} = renderPath("/foods")
    const searchBarBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBarBtn);

    const searchBar= screen.getByTestId('search-input');
    const inputLetter = screen.getByTestId('first-letter-search-radio');
    const btnSend = screen.getByTestId('exec-search-btn');

    userEvent.type(searchBar, 'a')
    userEvent.click(inputLetter);
    userEvent.click(btnSend);
});
})