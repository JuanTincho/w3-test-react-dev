import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import TableHeadComponent from '../TableHeadComponent';
import TableBodyComponent from '../TableBodyComponent';
import ToolbarComponent from '../ToolbarComponent';
import UserModal from '../UserModal';

import { fetchCountries, fetchUsers } from './actions';
import { selectUsers, selectIsUsersLoading, selectCountries } from './selectors';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
    dispatch(fetchCountries());
  }

  handleDelete = (id) => {
    console.log(`Delete${id}`);
  };

  handleEdit = (id) => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleSearchChange = (event) => {
    this.setState({ query: event.target.value });
  };

  searchQuery = (data, query) => data;

  cancelAndCloseModal = (event) => {
    if (event.which === 27) {
      return;
    }
    this.setState({ isModalOpen: false });
  };

  render() {
    const { classes, users: data, countries } = this.props;
    const { isModalOpen } = this.state;

    const updatedData = data;

    return (
      <>
        <ToolbarComponent handleSearchChange={this.handleSearchChange} />
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
            onCancelAndCloseModal={this.cancelAndCloseModal}
            onClick={this.onSave}
            countries={countries}
          />
        )}
        {/* <Notifier /> */}
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.shape(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isUsersLoading: PropTypes.bool.isRequired,
  countries: PropTypes.array,
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
