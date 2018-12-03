import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  Icon, TableBody, TableCell, TableRow, TableHead, Typography,
} from '@material-ui/core';

import { Edit, Delete } from '@material-ui/icons';

import IconButtonComponent from '../IconButtonComponent';

// import { openSnackBar } from '../../Utils/Notifier';

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  newCell: {
    color: '#66BB6A',
    fontWeight: 600,
  },
  densityLow: {
    height: '98px',
    transition: 'height 0.25s ease-out',
  },
  densityMedium: {
    height: '73px',
    transition: 'height 0.25s ease-out',
  },
  densityHigh: {
    height: '48px',
    transition: 'height 0.25s ease-out',
  },
  sticky: {
    backgroundColor: '#fff',
    position: 'sticky',
    top: 50,
    zIndex: 10,
  },
  hideRows: {
    transitionProperty: 'margin-bottom, opacity, visibility',
    transitionDuration: '0s, 0.5s, 0.25s',
    visibility: 'collapse',
    opacity: 0,
    marginBottom: '-1em',
    transitionDelay: '0.005s, 0.005s, 0.005s',
  },
  showRows: {
    transitionProperty: 'margin-bottom, opacity, visibility',
    transitionDuration: '0.5s, 0.5s, 0s',
    transitionTimingFunction: 'ease-in-out, ease-in-out, linear',
    marginBottom: 0,
    opacity: 1,
  },
});

class TableBodyComponent extends Component {
  handleClick = (e, message) => {
    e.stopPropagation();
  };

  render() {
    const {
      data, classes, handleDelete, handleEdit,
    } = this.props;

    return (
      <TableBody>
        {data.map(user => (
          <TableRow
            key={user.id}
            hover
            tabIndex={-1}
            className={classes.row}
            onClick={e => this.handleClick(e, 'row clicked')}
          >
            <TableCell>{user.firstname}</TableCell>
            <TableCell>{user.lastname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.birthdate}</TableCell>
            <TableCell>{user.country}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <IconButtonComponent icon={Edit} onClick={() => handleEdit(user.id)} />
              <IconButtonComponent icon={Delete} onClick={() => handleDelete(user.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

TableBodyComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
    row: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(TableBodyComponent);
