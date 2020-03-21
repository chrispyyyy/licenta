import get from "lodash/get";
import { createSelector } from "reselect";

export const getTasks = state => get(state, "dashboard.tasks", []);

export const tasksSelector = createSelector(getTasks, tasks => tasks);
