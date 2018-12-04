import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputAdornment, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Search } from '@material-ui/icons';

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
});

const SearchComponent = ({ classes, handleSearchChange }) => (
  <FormControl>
    <Input
      id="input-with-icon-adornment"
      type="search"
      className={classes.input}
      placeholder="Buscar usuario"
      onChange={event => handleSearchChange(event)}
      startAdornment={(
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      )}
    />
  </FormControl>
);

SearchComponent.propTypes = {
  classes: PropTypes.shape({
    input: PropTypes.string.isRequired,
  }).isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchComponent);
