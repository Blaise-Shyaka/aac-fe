import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';

function RegistrationSucceeded() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);

    return () => { clearTimeout(timer); };
  }, []);

  return (
    <>
      <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
      <Box sx={{ margin: '10% auto', width: '60%' }}>
        {
          loading
            ? (<Box display="flex" justifyContent="center"><CircularProgress color="success" /></Box>)
            : (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                You have successfully submitted your registration details —
                {' '}
                <strong>We sent you a confirmation email!</strong>
              </Alert>
            )
        }
      </Box>
    </>
  );
}

export default RegistrationSucceeded;
