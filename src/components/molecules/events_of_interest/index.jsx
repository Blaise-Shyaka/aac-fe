import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router-dom';
import { listOfEvents } from '../../pages/delegate/events';
import MultiStepFormControl from '../../organisms/multi_step_form/multi_step_form_control';

function EventsOfInterest({ previousStep, registrationDetails }) {
  const [checked, setChecked] = useState([1]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSubmit = async (delegateDetails) => {
    const API_URL_FOR_REGISTRATIONS = 'https://aac-test-api.herokuapp.com/delegate/registrations';
    setIsLoading(true);
    try {
      await axios
        .post(API_URL_FOR_REGISTRATIONS, {
          registration: {
            first_name: delegateDetails.firstName,
            last_name: delegateDetails.lastName,
            country: delegateDetails.country,
            phone_number: delegateDetails.phoneNumber,
            passport_number: delegateDetails.passport,
            email: delegateDetails.email,
            sex: delegateDetails.sex,
            birth_date: delegateDetails.birthDate,
          },
        });
      history.push('/registration/success');
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Box display="flex" justifyContent="center"><CircularProgress color="success" /></Box>;
  }

  if (errorMessage) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {errorMessage}
      </Alert>
    );
  }

  return (
    <>
      <Box display="flex" justifyContent="center">
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {listOfEvents.map((event) => {
            const labelId = `checkbox-list-secondary-label-${listOfEvents.indexOf(event)}`;
            return (
              <ListItem
                key={event.title}
                secondaryAction={(
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(event)}
                    checked={checked.indexOf(event) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                )}
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={`${event.altText}`}
                      src={`${event.image}`}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`${event.title}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <MultiStepFormControl previousBtnHandler={previousStep} nextBtnHandler={() => handleSubmit(registrationDetails.delegate)} customNextBtnText="Submit" />
    </>
  );
}

export default EventsOfInterest;

EventsOfInterest.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  registrationDetails: PropTypes.object.isRequired,
  previousStep: PropTypes.func.isRequired,
};
