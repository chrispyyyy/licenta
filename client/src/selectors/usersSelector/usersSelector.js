import get from "lodash/get";
import { createSelector } from "reselect";

export const getUsers = state => get(state, "dashboard.users", []);

export const usersSelector = createSelector(getUsers, users => users);
