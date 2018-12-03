import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Grid, Typography, withStyles,
} from '@material-ui/core';

import Home from '../../components/Home';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    textTransform: 'initial',
  },
});

const Layout = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <div className={classes.tabs}>
          <AppBar position="static" style={{ marginBottom: '2rem' }}>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              W3 - React Test
            </Typography>
          </AppBar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Home />
          </Grid>
        </div>
      </Grid>
    </Grid>
  </div>
);

Layout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
