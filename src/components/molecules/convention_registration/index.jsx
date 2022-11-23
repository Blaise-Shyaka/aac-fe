import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box, MenuItem, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { countries } from 'country-data-list';
import textFieldContainers from './styles';
import { GENDERS } from '../../../constants';

function ConventionRegistration({
  delegateValidationResult,
  setDelegateValidationResult,
  registrationDetails,
  setRegistrationDetails,
}) {
  const listOfCountries = countries.all;
  const DEFAULT_CALLING_CODE = '+1'; // This is the default calling code when no country of origin is selected

  const handleFirstNameChange = (e) => {
    const { value } = e.target;

    if (!value.length) {
      setDelegateValidationResult({ ...delegateValidationResult, firstName: { error: true, helperText: 'The First Name is required' } });
      setRegistrationDetails({
        ...registrationDetails,
        delegate: { ...registrationDetails.delegate, firstName: value },
      });
      // disable next button
      return;
    }

    if (value.length > 60) {
      setDelegateValidationResult({ ...delegateValidationResult, firstName: { error: true, helperText: 'The First Name is too long' } });
      // disable next button
      return;
    }

    setRegistrationDetails({
      ...registrationDetails,
      delegate: { ...registrationDetails.delegate, firstName: value },
    });
    setDelegateValidationResult({ ...delegateValidationResult, firstName: { error: false, helperText: '' } });
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;

    if (!value.length) {
      setDelegateValidationResult({ ...delegateValidationResult, lastName: { error: true, helperText: 'The Last Name is required' } });
      setRegistrationDetails({
        ...registrationDetails,
        delegate: { ...registrationDetails.delegate, lastName: value },
      });
      // disable next button
      return;
    }

    if (value.length > 60) {
      setDelegateValidationResult({ ...delegateValidationResult, lastName: { error: true, helperText: 'The Last Name is too long' } });
      // disable next button
      return;
    }

    setRegistrationDetails({
      ...registrationDetails,
      delegate: { ...registrationDetails.delegate, lastName: value },
    });
    setDelegateValidationResult({ ...delegateValidationResult, lastName: { error: false, helperText: '' } });
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;

    if (!value.length) {
      setDelegateValidationResult({ ...delegateValidationResult, email: { error: true, helperText: 'The Email is required' } });
      setRegistrationDetails({
        ...registrationDetails,
        delegate: { ...registrationDetails.delegate, email: value },
      });
      // disable next button
      return;
    }

    if (value.length > 100) {
      setDelegateValidationResult({ ...delegateValidationResult, email: { error: true, helperText: 'The Email is too long' } });
      // disable next button
      return;
    }

    setRegistrationDetails({
      ...registrationDetails,
      delegate: { ...registrationDetails.delegate, email: value },
    });
    setDelegateValidationResult({ ...delegateValidationResult, email: { error: false, helperText: '' } });
  };

  const handlePassportChange = (e) => {
    const { value } = e.target;

    if (!value.length) {
      setDelegateValidationResult({ ...delegateValidationResult, passport: { error: true, helperText: 'The Passport number is required' } });
      setRegistrationDetails({
        ...registrationDetails,
        delegate: { ...registrationDetails.delegate, passport: value },
      });
      // disable next button
      return;
    }

    if (value.length > 15) {
      setDelegateValidationResult({ ...delegateValidationResult, passport: { error: true, helperText: 'The Passport number is too long' } });
      // disable next button
      return;
    }

    setRegistrationDetails({
      ...registrationDetails,
      delegate: { ...registrationDetails.delegate, passport: value },
    });
    setDelegateValidationResult({ ...delegateValidationResult, passport: { error: false, helperText: '' } });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
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
            <>
              <Box sx={textFieldContainers}>
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  value={registrationDetails.delegate.firstName}
                  onChange={(event) => handleFirstNameChange(event)}
                  error={delegateValidationResult.firstName.error}
                  helperText={delegateValidationResult.firstName.helperText}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  value={registrationDetails.delegate.lastName}
                  onChange={(event) => handleLastNameChange(event)}
                  error={delegateValidationResult.lastName.error}
                  helperText={delegateValidationResult.lastName.helperText}
                />
              </Box>
              <Box sx={textFieldContainers}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  value={registrationDetails.delegate.email}
                  onChange={(event) => handleEmailChange(event)}
                  error={delegateValidationResult.email.error}
                  helperText={delegateValidationResult.email.helperText}
                />
                <TextField
                  required
                  select
                  id="outlined-required"
                  label="Country"
                  value={registrationDetails.delegate.country}
                  onChange={(event) => setRegistrationDetails({
                    ...registrationDetails,
                    delegate: { ...registrationDetails.delegate, country: event.target.value },
                  })}
                >
                  {listOfCountries.map((option) => (
                    <MenuItem key={option.name} value={option.alpha3}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={textFieldContainers}>
                <TextField
                  required
                  id="outlined-required"
                  label="Phone Number"
                  value={registrationDetails.delegate.phoneNumber}
                  onFocus={() => {
                    setRegistrationDetails({
                      ...registrationDetails,
                      delegate: {
                        ...registrationDetails.delegate,
                        phoneNumber:
                        (registrationDetails.delegate.country
                          ? countries[registrationDetails.delegate.country].countryCallingCodes[0]
                          : DEFAULT_CALLING_CODE
                        ),
                      },
                    });
                  }}
                  onChange={(event) => setRegistrationDetails({
                    ...registrationDetails,
                    delegate: { ...registrationDetails.delegate, phoneNumber: event.target.value },
                  })}
                />
                <DesktopDatePicker
                  label="Date of Birth"
                  inputFormat="DD/MM/YYYY"
                  value={registrationDetails.delegate.birthDate}
                  onChange={(val) => setRegistrationDetails({
                    ...registrationDetails,
                    delegate: { ...registrationDetails.delegate, birthDate: val },
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
                  id="outlined-required"
                  label="Sex"
                  value={registrationDetails.delegate.sex}
                  onChange={(event) => setRegistrationDetails({
                    ...registrationDetails,
                    delegate: { ...registrationDetails.delegate, sex: event.target.value },
                  })}
                >
                  {GENDERS.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  id="outlined-required"
                  label="Passport Number"
                  value={registrationDetails.delegate.passport}
                  onChange={(event) => handlePassportChange(event)}
                  error={delegateValidationResult.passport.error}
                  helperText={delegateValidationResult.passport.helperText}
                />
              </Box>
            </>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default ConventionRegistration;

ConventionRegistration.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  delegateValidationResult: PropTypes.object.isRequired,
  setDelegateValidationResult: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  registrationDetails: PropTypes.object.isRequired,
  setRegistrationDetails: PropTypes.func.isRequired,
};
