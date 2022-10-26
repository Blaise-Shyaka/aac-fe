import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/delegate';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
