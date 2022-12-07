import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import HomePage from './components/pages/delegate';
import Events from './components/pages/delegate/events';
import Register from './components/pages/delegate/register';
import RegistrationSucceeded from './components/pages/delegate/registration_success';
import ConfirmEmail from './components/pages/delegate/register/confirm_email';
import './App.css';

function App() {
  return (
    <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/registrations/:id/confirm" component={ConfirmEmail} />
        <Route exact path="/registration/success" component={RegistrationSucceeded} />
      </Switch>
    </Box>
  );
}

export default App;
