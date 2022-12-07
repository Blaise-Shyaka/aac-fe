import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box, MenuItem, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { countries } from 'country-data-list';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import textFieldContainers from './styles';
import { GENDERS } from '../../../constants';
import MultiStepFormControl from '../../organisms/multi_step_form/multi_step_form_control';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your First name')
    .min(3, 'First name is too short')
    .required('First name is required'),
  lastName: yup
    .string('Enter your Last name')
    .min(3, 'Last name is too short')
    .required('Last name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  country: yup
    .string('Select your country')
    .required('Country is required'),
  phoneNumber: yup
    .string('Enter your phone number')
    .min(10, 'Phone number is too short')
    .required('Phone number is required'),
  birthDate: yup
    .date('Select date of birth')
    .required('Date of Birth is required'),
  sex: yup
    .string('Select your gender')
    .required('Gender is required'),
  passport: yup
    .string('Enter your passport number')
    .min(3, 'Passport number is too short')
    .required('Passport number is required'),
});

function ConventionRegistration({
  registrationDetails,
  setRegistrationDetails,
  nextStep,
}) {
  const listOfCountries = countries.all;
  const DEFAULT_CALLING_CODE = '+1'; // This is the default calling code when no country of origin is selected

  const formik = useFormik({
    initialValues: {
      firstName: registrationDetails.delegate.firstName || '',
      lastName: registrationDetails.delegate.lastName || '',
      email: registrationDetails.delegate.email || '',
      country: registrationDetails.delegate.country || '',
      phoneNumber: registrationDetails.delegate.phoneNumber || DEFAULT_CALLING_CODE,
      birthDate: registrationDetails.delegate.birthDate || '',
      sex: registrationDetails.delegate.sex || '',
      passport: registrationDetails.delegate.passport || '',
    },
    validationSchema,
    onSubmit: (values) => {
      setRegistrationDetails({ ...registrationDetails, delegate: values });
      nextStep();
    },
  });

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
            <Formik>
              <>
                <>
                  <Box sx={textFieldContainers}>
                    <TextField
                      required
                      id="firstName"
                      label="First Name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                      required
                      id="lastName"
                      label="Last Name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                  </Box>
                  <Box sx={textFieldContainers}>
                    <TextField
                      required
                      id="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      required
                      select
                      id="country"
                      name="country"
                      label="Country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      error={formik.touched.country && Boolean(formik.errors.country)}
                      helperText={formik.touched.country && formik.errors.country}
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
                      id="phoneNumber"
                      label="Phone Number"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                      helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    />
                    <DesktopDatePicker
                      id="birthDate"
                      name="birthDate"
                      label="Date of Birth"
                      inputFormat="DD/MM/YYYY"
                      value={formik.values.birthDate}
                      onChange={(value) => formik.setFieldValue('birthDate', value, true)}
                      maxDate={new Date()}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      renderInput={(params) => (
                        <TextField
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...params}
                          error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                          helperText={formik.touched.birthDate && formik.errors.birthDate}
                          required
                        />
                      )}
                    />
                  </Box>
                  <Box sx={textFieldContainers}>
                    <TextField
                      required
                      select
                      id="sex"
                      name="sex"
                      label="Sex"
                      value={formik.values.sex}
                      onChange={formik.handleChange}
                      error={formik.touched.sex && Boolean(formik.errors.sex)}
                      helperText={formik.touched.sex && formik.errors.sex}
                    >
                      {GENDERS.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      required
                      id="passport"
                      name="passport"
                      label="Passport Number"
                      value={formik.values.passport}
                      onChange={formik.handleChange}
                      error={formik.touched.passport && Boolean(formik.errors.passport)}
                      helperText={formik.touched.passport && formik.errors.passport}
                    />
                  </Box>
                </>
                <MultiStepFormControl hidePrevious nextBtnHandler={() => formik.submitForm()} />
              </>
            </Formik>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default ConventionRegistration;

ConventionRegistration.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  registrationDetails: PropTypes.object.isRequired,
  setRegistrationDetails: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
