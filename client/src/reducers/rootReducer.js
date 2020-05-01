import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import {usersReducer} from "./usersReducer/usersReducer";
import {dashboardReducer} from "./dashboardReducer/dashboardReducer";
import {projectOverviewReducer} from "./projectOverviewReducer/projectOverviewReducer";

export const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    dashboard: dashboardReducer,
    projectOverview: projectOverviewReducer
});

