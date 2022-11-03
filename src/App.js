import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import HomePage from './components/pages/delegate';
import './App.css';

function App() {
  return (
    <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Box>
  );
}

export default App;
