import React from 'react';
import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const IconButtonComponent = ({ icon: Icon, handleClick, ...rest }) => (
  <IconButton onClick={handleClick} {...rest}>
    <Icon />
  </IconButton>
);

IconButtonComponent.propTypes = {
  // eslint-disable-next-line react/require-default-props
  handleClick: PropTypes.func,
  icon: PropTypes.func.isRequired,
};

export default IconButtonComponent;
