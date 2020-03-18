import { combineReducers } from 'redux';
import { tasksReducer } from '../reducers/tasksReducer';
import {usersReducer} from "./usersReducer/usersReducer";
import {dashboardReducer} from "./dashboardReducer/dashboardReducer";

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    users: usersReducer,
    projects: dashboardReducer
});

