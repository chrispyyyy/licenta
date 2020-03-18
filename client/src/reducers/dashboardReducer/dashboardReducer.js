import { INITIAL_PROJECTS_STATE } from '../../initialState/INITIAL_PROJECTS_STATE';
import { setProjectsReducer } from './setProjectsReducer';
import { setProjectsErrorReducer } from './setProjectsErrorReducer';
import { DASHBOARD_ACTIONS } from '../../constants/DASHBOARD_ACTIONS';

const reducers = {
    [DASHBOARD_ACTIONS.FETCH_PROJECTS_SUCCESS]: setProjectsReducer,
    [DASHBOARD_ACTIONS.FETCH_PROJECTS_ERROR]: setProjectsErrorReducer,
};


export const dashboardReducer = (
    state = INITIAL_PROJECTS_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};