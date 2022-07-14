import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DataProvider from './context/DataContext';
import Login from './pages/Login';

function App() {
  return (
    <div className="meals">
      <DataProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </DataProvider>
    </div>
  );
}

export default App;
