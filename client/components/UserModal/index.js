import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Field, reduxForm } from 'redux-form/immutable';
import {
  Button, Modal, Typography, withStyles,
} from '@material-ui/core';
import renderTextField from '../../utils/fieldRenderers';

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

const validate = (values) => {
  const errors = {};
  const requiredFields = ['firstname', 'lastname', 'email', 'birthdate', 'country', 'phone'];
  requiredFields.forEach((field) => {
    if (!values.get(field)) {
      errors[field] = 'Requerido';
    }
  });
  if (
    values.get('email')
    && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Email inválido';
  }
  return errors;
};

class UserModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      isModalOpen,
      onCancelAndCloseModal,
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      title,
    } = this.props;

    return (
      <Modal open={isModalOpen} className="blocks-modal" onClose={onCancelAndCloseModal}>
        <form className={classes.paper} onSubmit={handleSubmit}>
          <Typography variant="h4">{`${title} persona`}</Typography>

          <div>
            <Field name="firstname" component={renderTextField} label="Nombre" />
          </div>
          <div>
            <Field name="lastname" component={renderTextField} label="Apellido" />
          </div>
          <div>
            <Field name="email" component={renderTextField} label="Email" />
          </div>
          <div>
            <Field
              name="birthdate"
              type="date"
              component={renderTextField}
              InputLabelProps={{
                shrink: true,
              }}
              label="Fecha de nacimiento"
            />
          </div>
          <div>
            <Field name="phone" component={renderTextField} label="Teléfono" type="number" />
          </div>
          <SelectCountry />
          <div>
            <Button type="submit" disabled={pristine || submitting} color="primary">
              {title}
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
              color="secondary"
            >
              Desestimar cambios
            </Button>
          </div>
        </form>
      </Modal>
    );
  }
}

UserModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onCancelAndCloseModal: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const createReduxForm = reduxForm({
  form: 'UserForm',
  validate,
});

const addStyles = withStyles(styles);

export default compose(
  createReduxForm,
  addStyles,
)(UserModal);
