import get from "lodash/get";
import { createSelector } from "reselect";

export const getLoggedUser = state => get(state, "users.loggedUser", {});

export const loggedUserSelector = createSelector(getLoggedUser, loggedUser => {
    return loggedUser;
});
