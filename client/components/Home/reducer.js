import { fromJS } from 'immutable';
import {
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
  USERS_LOADING,
  FETCH_COUNTRIES_SUCCEEDED,
  FETCH_COUNTRIES_FAILED,
} from './constants';

const homeInitialState = fromJS({
  users: [],
  isUsersLoading: false,
  countries: [],
});

const homeReducer = (state = homeInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCEEDED:
      return state.merge({ users: action.payload });
    case FETCH_USERS_FAILED:
      return state;
    case USERS_LOADING:
      return state.merge({ isUsersLoading: action.payload.isLoading });
    case FETCH_COUNTRIES_SUCCEEDED:
      return state.merge({ countries: action.payload });
    case FETCH_COUNTRIES_FAILED:
      return state;
    default:
      return state;
  }
};

export default homeReducer;
