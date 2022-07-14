import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './context/DataContext';
import Login from './pages/Login';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <Switch>
        <DataProvider>
          <Route exact path="/" component={ Login } />
        </DataProvider>
      </Switch>
    </div>
  );
}

export default App;
