import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';

function Register() {
  return (
    <Box>
      <NavigationBar defaultBackgroundColor="#000" />
      <Box
        component="div"
        sx={{
          marginTop: '4rem',
          position: 'absolute',
          top: '10%',
          left: '35%',
        }}
      >
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '45ch' },
            border: '1px solid #666',
            borderRadius: '5px',
            padding: '5px',
          }}
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <>
            <TextField
              required
              id="outlined-required"
              label="First Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
            />
            <TextField
              required
              select
              id="outlined-required"
              label="Country"
            />
            <TextField
              required
              id="outlined-required"
              label="Phone Number"
            />
            <TextField
              required
              id="outlined-required"
              label="Date of Birth"
            />
            <TextField
              required
              select
              id="outlined-required"
              label="Sex"
            />
            <TextField
              required
              id="outlined-required"
              label="Passport Number"
            />
          </>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
