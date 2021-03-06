import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { TableBody, TableCell, TableRow } from '@material-ui/core';

import { Edit, Delete } from '@material-ui/icons';

import IconButtonComponent from '../IconButtonComponent';

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  sticky: {
    backgroundColor: '#fff',
    position: 'sticky',
    top: 50,
    zIndex: 10,
  },
});

const TableBodyComponent = ({
  data, classes, handleDelete, handleEdit,
}) => (
  <TableBody>
    {data.map(user => (
      <TableRow key={user.id} hover tabIndex={-1} className={classes.row}>
        <TableCell>{user.firstname}</TableCell>
        <TableCell>{user.lastname}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{new Date(user.birthdate).toLocaleDateString()}</TableCell>
        <TableCell>{user.country}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell>
          <IconButtonComponent icon={Edit} onClick={() => handleEdit(user)} />
          <IconButtonComponent icon={Delete} onClick={() => handleDelete(user.id)} />
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
);

TableBodyComponent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  classes: PropTypes.shape({
    row: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default withStyles(styles)(TableBodyComponent);
