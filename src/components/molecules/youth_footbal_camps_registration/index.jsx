import React, { useState } from 'react';
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import textFieldContainers from '../convention_registration/styles';
import { containedBtnStyles } from '../../organisms/multi_step_form/multi_step_form_control/styles';

function YouthFootballCampRegistration({ registrationDetails, setRegistrationDetails }) {
  const [campRegistration, setCampRegistration] = useState({ fullName: '', birthDate: null });

  const handleAddingChild = () => {
    setRegistrationDetails({
      ...registrationDetails,
      footballCamps: [...registrationDetails.footballCamps, campRegistration],
    });
    setCampRegistration({ fullName: '', birthDate: null });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="div">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '35ch' },
            padding: '5px',
          }}
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={textFieldContainers}>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              value={campRegistration.fullName}
              onChange={(event) => setCampRegistration(
                {
                  ...campRegistration,
                  fullName: event.target.value,
                },
              )}
              error={false}
              helperText=""
            />
            <DesktopDatePicker
              label="Date of Birth"
              inputFormat="DD/MM/YYYY"
              value={campRegistration.birthDate}
              onChange={(val) => setCampRegistration({
                ...campRegistration,
                birthDate: val,
              })}
              maxDate={new Date()}
                  // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} required />}
            />
            <Button variant="contained" size="large" sx={containedBtnStyles} onClick={handleAddingChild}>ADD</Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ width: '60%', margin: '1rem auto' }}>
          {
            !registrationDetails.footballCamps.length
              ? (
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  You have not yet registered any child for the Youth Football Camps
                </Alert>
              )
              : (
                <List>
                  {
                registrationDetails.footballCamps.map((registration) => (
                  <ListItem
                    key={registration.fullName}
                    secondaryAction={(
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                  )}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <AccountCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={registration.fullName}
                      // secondary={`${registration.birthDate}`}
                    />
                  </ListItem>
                ))
              }
                </List>
              )
          }
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default YouthFootballCampRegistration;

YouthFootballCampRegistration.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  registrationDetails: PropTypes.object.isRequired,
  setRegistrationDetails: PropTypes.func.isRequired,
};
