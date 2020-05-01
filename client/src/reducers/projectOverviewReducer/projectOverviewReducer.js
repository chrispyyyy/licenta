import { PROJECT_ACTIONS } from '../../constants/PROJECT_ACTIONS';
import {INITIAL_PROJECT_OVERVIEW_STATE} from "../../initialState/INITIAL_PROJECT_OVERVIEW_STATE";
import {setProjectOverviewReducer} from "./setProjectOverviewReducer";

const reducers = {
    [PROJECT_ACTIONS.GET_PROJECT_SUCCESSFUL]: setProjectOverviewReducer,
};


export const projectOverviewReducer = (
    state = INITIAL_PROJECT_OVERVIEW_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};