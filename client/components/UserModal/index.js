import React from 'react';
import PropTypes from 'prop-types';
import { Modal, TextField, withStyles } from '@material-ui/core';

import SelectCountry from '../SelectCountry';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: 50,
    left: 50,
  },
});

class UserModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isModalOpen, onCancelAndCloseModal, classes } = this.props;

    return (
      <Modal open={isModalOpen} className="blocks-modal" onClose={onCancelAndCloseModal}>
        <div className={classes.paper}>
          <div>
            <TextField onChange={this.onChangeTextField} />
          </div>
          <div>
            <TextField onChange={this.onChangeTextField} />
          </div>
          <div>
            <TextField onChange={this.onChangeTextField} />
          </div>
          <SelectCountry />
        </div>
      </Modal>
    );
  }
}

UserModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onCancelAndCloseModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserModal);
