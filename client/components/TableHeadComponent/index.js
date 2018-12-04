import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Tooltip,
  Typography,
} from '@material-ui/core';

import { ArrowDropDown, LensOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const columns = [
  {
    id: 'name',
    label: 'Nombre',
  },
  {
    id: 'lastname',
    label: 'Apellido',
  },
  { id: 'email', label: 'Email' },
  { id: 'birthdate', label: 'Fecha de Nacimiento' },
  { id: 'country', label: 'País' },
  { id: 'phone', label: 'Teléfono' },
  { id: 'actions', label: '' },
];

const styles = () => ({
  sticky: {
    backgroundColor: '#fff',
    position: 'sticky',
    textTransform: 'uppercase',
    top: 0,
    zIndex: 10,
  },
});

class TableHeadComponent extends Component {
  createHeadName = (column) => {
    if (column.id !== 'action') {
      return <Typography>{column.label}</Typography>;
    }
    return null;
  };

  render() {
    const { classes } = this.props;

    return (
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableCell
              key={column.id}
              numeric={column.numeric}
              className={classes.sticky}
            >
              {this.createHeadName(column)}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

TableHeadComponent.propTypes = {
  classes: PropTypes.shape({
    sticky: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(TableHeadComponent);
