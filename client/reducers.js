/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import homeReducer from './components/Home/reducer';

const reducers = combineReducers({ home: homeReducer, form: formReducer });

export default reducers;
