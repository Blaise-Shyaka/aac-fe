import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';
import MultiStepForm from '../../../organisms/multi_step_form';
import { registrationContainer } from './styles';
import ConventionRegistration from '../../../molecules/convention_registration';
import YouthFootballCampRegistration from '../../../molecules/youth_footbal_camps_registration';
import EventsOfInterest from '../../../molecules/events_of_interest';

function Register() {
  const history = useHistory();

  const [registrationDetails, setRegistrationDetails] = useState({
    delegate: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: null,
      passport: '',
      birthDate: null,
      country: null,
      sex: null,
    },
    footballCamps: [],
    eventsOfInterest: [],
  });

  const [delegateValidationResult, setDelegateValidationResult] = useState({
    firstName: {
      error: false,
      helperText: '',
    },
    lastName: {
      error: false,
      helperText: '',
    },
    email: {
      error: false,
      helperText: '',
    },
    passport: {
      error: false,
      helperText: '',
    },
  });

  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const validateDelegateRegistrationDetails = () => {
    let invalidDetails = 0;
    const { delegate } = registrationDetails;

    // validate first name
    if (!delegate.firstName) {
      setDelegateValidationResult({ ...delegateValidationResult, firstName: { error: true, helperText: 'The First Name is required' } });
      invalidDetails += 1;
    }

    if (delegate.firstName.length > 60) {
      setDelegateValidationResult({ ...delegateValidationResult, firstName: { error: true, helperText: 'The First Name is too long' } });
      invalidDetails += 1;
    }

    // Validate last name
    if (!delegate.lastName) {
      setDelegateValidationResult({ ...delegateValidationResult, lastName: { error: true, helperText: 'The Last Name is required' } });
      invalidDetails += 1;
    }

    if (delegate.lastName.length > 60) {
      setDelegateValidationResult({ ...delegateValidationResult, lastName: { error: true, helperText: 'The Last Name is too long' } });
      invalidDetails += 1;
    }

    // Validate email
    if (!delegate.email) {
      setDelegateValidationResult({ ...delegateValidationResult, email: { error: true, helperText: 'The Email is required' } });
      invalidDetails += 1;
    }

    if (delegate.email.length > 100) {
      setDelegateValidationResult({ ...delegateValidationResult, email: { error: true, helperText: 'The Email is too long' } });
      invalidDetails += 1;
    }

    // Validate passport
    if (!delegate.passport) {
      setDelegateValidationResult({ ...delegateValidationResult, passport: { error: true, helperText: 'The Passport number is required' } });
      invalidDetails += 1;
    }

    if (delegate.passport.length > 15) {
      setDelegateValidationResult({ ...delegateValidationResult, passport: { error: true, helperText: 'The Passport number is too long' } });
      invalidDetails += 1;
    }

    if (delegate.passport.length < 4) {
      setDelegateValidationResult({ ...delegateValidationResult, passport: { error: true, helperText: 'The Passport number is too short' } });
      invalidDetails += 1;
    }

    setNextBtnDisabled(!!invalidDetails);
  };

  const delegatePageNextBtnHandler = () => {
    validateDelegateRegistrationDetails();
  };
  // const [youthCampsRegistrationValidationResult]
  // const [registrationDetails]
  // const [nextBtnDisabled]
  // const handleSubmitDelegateRegistrationDetails
  // const handleSubmitYouthCampsRegistrationDetails
  const steps = [
    {
      name: 'Delegate Registration',
      component: <ConventionRegistration
        delegateValidationResult={delegateValidationResult}
        setDelegateValidationResult={setDelegateValidationResult}
        registrationDetails={registrationDetails}
        setRegistrationDetails={setRegistrationDetails}
      />,
      // nextBtnHandler: delegatePageNextBtnHandler,
    },
    {
      name: 'Youth Football Camps Registration',
      component: <YouthFootballCampRegistration
        registrationDetails={registrationDetails}
        setRegistrationDetails={setRegistrationDetails}
      />,
      skippable: true,
    },
    {
      name: 'Events of Interest',
      component: <EventsOfInterest />,
      handleSubmit: () => { history.push('/registration/success'); },
    },
  ];

  return (
    <>
      <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
      <Box sx={registrationContainer}>
        <Paper elevation={5} sx={{ paddingBottom: '1rem' }}>
          <MultiStepForm
            steps={steps}
            nextBtnDisabled={nextBtnDisabled}
          />
        </Paper>
      </Box>
    </>
  );
}

export default Register;
