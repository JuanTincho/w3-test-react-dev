import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import TableHeadComponent from '../TableHeadComponent';
import TableBodyComponent from '../TableBodyComponent';
import ToolbarComponent from '../ToolbarComponent';
import UserModal from '../UserModal';

import { addUser, editUser, deleteUser } from '../../services/api';

import { fetchCountries, fetchUsers } from './actions';
import { selectUsers, selectIsUsersLoading, selectCountries } from './selectors';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      query: '',
      initialValues: {},
      title: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
    dispatch(fetchCountries());
  }

  handleDelete = (id) => {
    const { dispatch } = this.props;

    deleteUser(id)
      .then(() => {
        dispatch(fetchUsers());
      })
      .catch((error) => {
        alert(error);
      });
  };

  handleEdit = (user) => {
    this.setState({
      isModalOpen: true,
      initialValues: user,
      title: 'Editar',
    });
  };

  handleCreateUser = () => {
    this.setState({
      isModalOpen: true,
      initialValues: {},
      title: 'Añadir',
    });
  };

  handleSearchChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    const user = {};
    values.forEach((v, k) => {
      user[k] = v;
    });

    if (user.id) {
      editUser(user)
        .then(() => {
          dispatch(fetchUsers());
          this.cancelAndCloseModal();
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      addUser(user)
        .then(() => {
          dispatch(fetchUsers());
          this.cancelAndCloseModal();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  searchQuery = (data, query) => {
    if (query.trim() !== '') {
      return data.filter(user => user.firstname
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase()));
    }
    return data;
  };

  cancelAndCloseModal = (event) => {
    if (event && event.which === 27) {
      return;
    }
    this.setState({ isModalOpen: false });
  };

  render() {
    const { users: data, countries } = this.props;
    const {
      isModalOpen, query, initialValues, title,
    } = this.state;
    const updatedData = this.searchQuery(data, query);

    return (
      <>
        <ToolbarComponent
          handleSearchChange={this.handleSearchChange}
          handleCreateUser={this.handleCreateUser}
        />
        <Table>
          <TableHeadComponent />
          <TableBodyComponent
            data={updatedData}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        </Table>
        {isModalOpen && (
          <UserModal
            isModalOpen={isModalOpen}
            title={title}
            onCancelAndCloseModal={this.cancelAndCloseModal}
            onClick={this.onSave}
            countries={countries}
            initialValues={initialValues}
            enableReinitialize
            onSubmit={this.handleSubmit}
          />
        )}
        {/* <Notifier /> */}
      </>
    );
  }
}

Home.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isUsersLoading: PropTypes.bool.isRequired,
  countries: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
  isUsersLoading: selectIsUsersLoading(),
  countries: selectCountries(),
});

const mapDispatchToProps = dispatch => ({ dispatch });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
