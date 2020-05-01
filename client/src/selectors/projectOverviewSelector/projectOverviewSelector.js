import get from "lodash/get";
import { createSelector } from "reselect";

export const getProjectOverview = state => get(state, "projectOverview", {});

export const projectOverviewSelector = createSelector(
  getProjectOverview,
  project => project
);
