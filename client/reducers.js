/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

import homeReducer from './components/Home/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
const reducers = combineReducers({ home: homeReducer });

export default reducers;
