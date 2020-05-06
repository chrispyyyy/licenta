import { PROJECT_ACTIONS } from '../../constants/PROJECT_ACTIONS';
import {INITIAL_PROJECT_OVERVIEW_STATE} from "../../initialState/INITIAL_PROJECT_OVERVIEW_STATE";
import {setProjectOverviewReducer} from "./setProjectOverviewReducer";
import {SPRINT_ACTIONS} from "../../constants/SPRINT_ACTIONS";
import {updateSprintReducer} from "./updateSprintReducer";
import {USER_STORY_ACTIONS} from "../../constants/USER_STORY_ACTIONS";
import {updateUserStoryReducer} from "./updateUserStoryReducer";

const reducers = {
    [PROJECT_ACTIONS.GET_PROJECT_SUCCESSFUL]: setProjectOverviewReducer,
    [SPRINT_ACTIONS.START_SPRINT_SUCCESSFUL]: updateSprintReducer,
    [USER_STORY_ACTIONS.UPDATE_USER_STORY_SUCCESSFUL]: updateUserStoryReducer,
};


export const projectOverviewReducer = (
    state = INITIAL_PROJECT_OVERVIEW_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};