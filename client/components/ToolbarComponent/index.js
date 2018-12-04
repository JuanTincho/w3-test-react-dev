import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Toolbar, Typography, withStyles,
} from '@material-ui/core';

import SearchComponent from '../SearchComponent';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
};

const ToolbarComponent = ({ classes, handleCreateUser, handleSearchChange }) => (
  <Toolbar className={classes.root}>
    <Typography variant="h4">Usuarios</Typography>
    <SearchComponent handleSearchChange={handleSearchChange} />
    <Button variant="contained" color="primary" onClick={handleCreateUser}>
      Añadir nuevo usuario
    </Button>
  </Toolbar>
);

ToolbarComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
};

export default withStyles(styles)(ToolbarComponent);
