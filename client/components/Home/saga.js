/*
 * Redux-Saga Home saga
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsers, getCountries } from '../../services/api';
import { FETCH_USERS, FETCH_COUNTRIES } from './constants';
import {
  fetchUsersSucceeded,
  fetchUsersFailed,
  usersLoading,
  fetchCountriesSucceeded,
  fetchCountriesFailed,
} from './actions';

export function* fetchUsersSaga() {
  try {
    yield put(usersLoading(true));
    const response = yield call(getUsers);
    yield put(fetchUsersSucceeded(response.data));
  } catch (error) {
    yield put(fetchUsersFailed(error));
  } finally {
    yield put(usersLoading(false));
  }
}

export function* fetchCountriesSaga() {
  try {
    const response = yield call(getCountries);
    yield put(fetchCountriesSucceeded(response.data));
  } catch (error) {
    yield put(fetchCountriesFailed(error));
  }
}

export default function* homeSaga() {
  yield [takeLatest(FETCH_USERS, fetchUsersSaga)];
  yield [takeLatest(FETCH_COUNTRIES, fetchCountriesSaga)];
}
