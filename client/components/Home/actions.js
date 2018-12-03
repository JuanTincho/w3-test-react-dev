/*
 * Home actions
 */
import {
  FETCH_USERS,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
  USERS_LOADING,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCEEDED,
  FETCH_COUNTRIES_FAILED,
} from './constants';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
  };
}

export function fetchUsersSucceeded(data) {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: data,
  };
}

export function fetchUsersFailed(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
}

export function usersLoading(isLoading) {
  return {
    type: USERS_LOADING,
    payload: { isLoading },
  };
}

export function fetchCountries() {
  return {
    type: FETCH_COUNTRIES,
  };
}

export function fetchCountriesSucceeded(data) {
  return {
    type: FETCH_COUNTRIES_SUCCEEDED,
    payload: data,
  };
}

export function fetchCountriesFailed(error) {
  return {
    type: FETCH_COUNTRIES_FAILED,
    payload: error,
  };
}
