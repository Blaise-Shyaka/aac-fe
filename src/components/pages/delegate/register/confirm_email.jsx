import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';

function ConfirmEmail() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const API_URL_FOR_UPDATING_REGISTRATIONS = `https://aac-test-api.herokuapp.com/delegate/registrations/${id}`;
      setIsLoading(true);
      try {
        const { data } = await axios.put(API_URL_FOR_UPDATING_REGISTRATIONS, {});
        setData(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return (
      <>
        <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
        <Box sx={{ margin: '10% auto', width: '60%' }}>
          <Box display="flex" justifyContent="center"><CircularProgress color="success" /></Box>
        </Box>
      </>
    );
  }

  if (errorMessage) {
    return (
      <>
        <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
        <Box sx={{ margin: '10% auto', width: '60%' }}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        </Box>
      </>
    );
  }

  return (
    <>
      <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
      <Box sx={{ margin: '10% auto', width: '60%' }}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Hi
          {' '}
          {data && data.data.first_name}
          ,
          Your email has been confirmed!
          We will be communicating details about the next steps via this email.
        </Alert>
      </Box>
    </>
  );
}

export default ConfirmEmail;
