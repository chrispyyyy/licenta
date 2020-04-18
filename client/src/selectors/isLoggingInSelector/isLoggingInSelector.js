import get from "lodash/get";
import { createSelector } from "reselect";

export const getIsLoggingIn = state => get(state, "users.isLoggingIn", false);

export const isLoggingInSelector = createSelector(getIsLoggingIn, isLoggingIn => isLoggingIn);
