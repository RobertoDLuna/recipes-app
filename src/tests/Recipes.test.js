import React from 'react';
import {screen, waitFor} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderPath from './renderPath';

describe('test the foods page', () => {
    test('test if you find only one food recipe, you get redirected ', async () => {
        const {history} = renderPath("/foods")
        const searchBarBtn = screen.getByTestId('search-top-btn');
        userEvent.click(searchBarBtn);

        const searchBar= screen.getByTestId('search-input');
        const inputName = screen.getByTestId('name-search-radio');
        const btnSend = screen.getByTestId('exec-search-btn');

        userEvent.type(searchBar, 'Massaman')
        userEvent.click(inputName);
        userEvent.click(btnSend);
        await waitFor(() => expect(history.location.pathname).toBe('/foods/52827'));
    });

    test('test if you find only one drink recipe, you get redirected ', async () => {
        const {history} = renderPath("/drinks")
        const searchBarBtn = screen.getByTestId('search-top-btn');
        userEvent.click(searchBarBtn);

        const searchBar= screen.getByTestId('search-input');
        const inputName = screen.getByTestId('name-search-radio');
        const btnSend = screen.getByTestId('exec-search-btn');

        userEvent.type(searchBar, 'Mai Tai')
        userEvent.click(inputName);
        userEvent.click(btnSend);
        await waitFor(() => expect(history.location.pathname).toBe('/drinks/11690'));
    });

    test('test if you dont find one drink recipe, you get a alert ', async () => {
        const {history} = renderPath("/drinks")
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        const searchBarBtn = screen.getByTestId('search-top-btn');
        userEvent.click(searchBarBtn);

        const searchBar= screen.getByTestId('search-input');
        const inputName = screen.getByTestId('ingredient-search-radio');
        const btnSend = screen.getByTestId('exec-search-btn');

        userEvent.type(searchBar, 'a')
        userEvent.click(inputName);
        userEvent.click(btnSend);
        
        await waitFor(() =>  expect(window.alert).toBeCalledWith('Sorry, we haven\'t found any recipes for these filters.'));
    });
});