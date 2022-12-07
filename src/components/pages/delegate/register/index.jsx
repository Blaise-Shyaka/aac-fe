import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { useState } from 'react';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';
import MultiStepForm from '../../../organisms/multi_step_form';
import { registrationContainer } from './styles';
import ConventionRegistration from '../../../molecules/convention_registration';
import YouthFootballCampRegistration from '../../../molecules/youth_footbal_camps_registration';
import EventsOfInterest from '../../../molecules/events_of_interest';

function Register() {
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
  const [completedSteps, setCompletedSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCompletedSteps([...completedSteps, currentStep]);
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps.pop();
    setCurrentStep(currentStep - 1);
    setCompletedSteps(newCompletedSteps);
  };

  const steps = [
    {
      name: 'Delegate Registration',
      component: <ConventionRegistration
        registrationDetails={registrationDetails}
        setRegistrationDetails={setRegistrationDetails}
        nextStep={nextStep}
      />,
    },
    {
      name: 'Youth Football Camps Registration',
      component: <YouthFootballCampRegistration
        registrationDetails={registrationDetails}
        setRegistrationDetails={setRegistrationDetails}
        nextStep={nextStep}
        previousStep={previousStep}
      />,
    },
    {
      name: 'Events of Interest',
      component: <EventsOfInterest
        previousStep={previousStep}
        registrationDetails={registrationDetails}
      />,
    },
  ];

  return (
    <>
      <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
      <Box sx={registrationContainer}>
        <Paper elevation={5} sx={{ paddingBottom: '1rem' }}>
          <MultiStepForm
            steps={steps}
            completedSteps={completedSteps}
            currentStep={currentStep}
          />
        </Paper>
      </Box>
    </>
  );
}

export default Register;
