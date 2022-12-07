import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Box } from '@mui/material';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';

function RegistrationSucceeded() {
  return (
    <>
      <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
      <Box sx={{ margin: '10% auto', width: '60%' }}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Hi, You have successfully submitted your registration details!
        </Alert>
      </Box>
    </>
  );
}

export default RegistrationSucceeded;
