import get from "lodash/get";
import { createSelector } from "reselect";

export const getIsFetching = state => get(state, "dashboard.isFetching", false);

export const isFetchingSelector = createSelector(getIsFetching, isFetching => isFetching);
