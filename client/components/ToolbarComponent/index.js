import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Typography } from '@material-ui/core';

import SearchComponent from '../SearchComponent';

const ToolbarComponent = (props) => {
  const { handleSearchChange } = props;

  return (
    <Toolbar>
      <Typography variant="h4" id="tableTitle">
        Users
      </Typography>
      <SearchComponent handleSearchChange={handleSearchChange} />
    </Toolbar>
  );
};

ToolbarComponent.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
};

export default ToolbarComponent;
