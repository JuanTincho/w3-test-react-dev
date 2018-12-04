import React from 'react';
import PropTypes from 'prop-types';
import { Button, Toolbar, Typography } from '@material-ui/core';

import SearchComponent from '../SearchComponent';

const ToolbarComponent = (props) => {
  const { handleCreateUser, handleSearchChange } = props;

  return (
    <Toolbar>
      <Typography variant="h4" id="tableTitle">
        Usuarios
      </Typography>
      <SearchComponent handleSearchChange={handleSearchChange} />
      <Button variant="contained" color="primary" onClick={handleCreateUser}>
        Añadir nuevo usuario
      </Button>
    </Toolbar>
  );
};

ToolbarComponent.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
};

export default ToolbarComponent;
