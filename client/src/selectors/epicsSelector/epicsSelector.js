import get from "lodash/get";
import { createSelector } from "reselect";

export const getEpics = state => get(state, "dashboard.epics", []);

export const epicsSelector = createSelector(getEpics, epics => epics);
