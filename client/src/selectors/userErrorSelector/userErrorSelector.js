import get from 'lodash/get';
import { createSelector } from 'reselect';

export const getUserError = state => get(state, 'users.error', '');

export const userErrorSelector = createSelector(
    getUserError,
    userError => userError
);