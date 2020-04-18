import { INITIAL_DASHBOARD_STATE } from '../../initialState/INITIAL_DASHBOARD_STATE';
import { setDashboardReducer } from './setDashboardReducer';
import { setDashboardErrorReducer } from './setDashboardErrorReducer';
import { isFetchingReducer } from './isFetchingReducer';
import { DASHBOARD_ACTIONS } from '../../constants/DASHBOARD_ACTIONS';

const reducers = {
    [DASHBOARD_ACTIONS.FETCH_DASHBOARD_SUCCESS]: setDashboardReducer,
    [DASHBOARD_ACTIONS.FETCH_DASHBOARD_ERROR]: setDashboardErrorReducer,
    [DASHBOARD_ACTIONS.FETCH_DASHBOARD]: isFetchingReducer,
};


export const dashboardReducer = (
    state = INITIAL_DASHBOARD_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};