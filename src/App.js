import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './context/DataContext';
import Login from './pages/Login';
import Foods from './pages/Foods';

function App() {
  return (
    <div className="meals">
      <Switch>
        <DataProvider>
          <Route exact path="/" component={ Login } />
          <Route path="/foods" component={ Foods } />
        </DataProvider>
      </Switch>
    </div>
  );
}

export default App;
