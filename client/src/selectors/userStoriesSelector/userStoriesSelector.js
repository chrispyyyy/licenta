import get from "lodash/get";
import { createSelector } from "reselect";

export const getUserStories = state => get(state, "dashboard.userStories", []);

export const userStoriesSelector = createSelector(getUserStories, userStories => userStories);
