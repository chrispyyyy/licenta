import get from "lodash/get";
import { createSelector } from "reselect";

export const getSprints = state => get(state, "dashboard.sprints", []);

export const sprintsSelector = createSelector(getSprints, sprints => sprints);
