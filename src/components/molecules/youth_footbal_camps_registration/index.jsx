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
  MenuItem,
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
import MultiStepFormControl from '../../organisms/multi_step_form/multi_step_form_control';
import { GENDERS } from '../../../constants';

function YouthFootballCampRegistration(
  {
    registrationDetails,
    setRegistrationDetails,
    previousStep,
    nextStep,
  },
) {
  const [campRegistration, setCampRegistration] = useState({ full_name: '', birth_date: null, sex: null });

  const handleAddingChild = () => {
    setRegistrationDetails({
      ...registrationDetails,
      footballCamps: [...registrationDetails.footballCamps, campRegistration],
    });
    setCampRegistration({ full_name: '', birth_date: null, sex: null });
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
              value={campRegistration.full_name}
              onChange={(event) => setCampRegistration(
                {
                  ...campRegistration,
                  full_name: event.target.value,
                },
              )}
              error={false}
              helperText=""
            />
            <DesktopDatePicker
              label="Date of Birth"
              inputFormat="DD/MM/YYYY"
              value={campRegistration.birth_date}
              onChange={(val) => setCampRegistration({
                ...campRegistration,
                birth_date: val,
              })}
              maxDate={new Date()}
                  // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} required />}
            />
          </Box>
          <Box sx={textFieldContainers}>
            <TextField
              required
              select
              id="sex"
              name="sex"
              label="Sex"
              value={campRegistration.sex}
              onChange={(event) => setCampRegistration({
                ...campRegistration,
                sex: event.target.value,
              })}
            >
              {GENDERS.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" size="large" sx={containedBtnStyles} onClick={handleAddingChild}>ADD</Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ width: '60%', margin: '1rem auto' }}>
          {
            !registrationDetails.footballCamps.length
              ? (
                <Alert severity="warning">
                  <AlertTitle>Caution</AlertTitle>
                  You have not yet registered any child for the Youth Football Camps
                </Alert>
              )
              : (
                <List>
                  {
                registrationDetails.footballCamps.map((registration) => (
                  <ListItem
                    key={registration.full_name}
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
                      primary={registration.full_name}
                      // secondary={`${registration.birthDate}`}
                    />
                  </ListItem>
                ))
              }
                </List>
              )
          }
        </Box>
        <MultiStepFormControl
          skippable
          handleSkip={nextStep}
          previousBtnHandler={previousStep}
          nextBtnHandler={nextStep}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default YouthFootballCampRegistration;

YouthFootballCampRegistration.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  registrationDetails: PropTypes.object.isRequired,
  setRegistrationDetails: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
