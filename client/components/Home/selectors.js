import { createSelector } from 'reselect';

const selectHomeDomain = state => state.get('home');

const selectUsers = () => createSelector(
  selectHomeDomain,
  substate => (substate.get('users') ? substate.get('users') : []),
);

const selectIsUsersLoading = () => createSelector(
  selectHomeDomain,
  substate => substate.get('isUsersLoading'),
);

const selectCountries = () => createSelector(
  selectHomeDomain,
  substate => (substate.get('countries') ? substate.get('countries') : []),
);

export {
  selectHomeDomain, selectUsers, selectIsUsersLoading, selectCountries,
};
