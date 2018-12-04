/* eslint-disable react/prop-types */
import React from 'react';

import { TextField } from '@material-ui/core';

const renderTextField = ({
  input, label, meta: { touched, error }, ...custom
}) => (
  <TextField
    label={error && touched ? error : label}
    error={touched && (error && error.length > 0)}
    {...input}
    {...custom}
  />
);

export default renderTextField;
