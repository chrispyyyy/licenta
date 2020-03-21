import get from "lodash/get";
import { createSelector } from "reselect";

export const getProjects = state => get(state, "dashboard.projects", []);

export const projectsSelector = createSelector(getProjects, projects => {
  return projects;
});
