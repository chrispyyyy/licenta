import { combineReducers } from 'redux';
import { tasksReducer } from '../reducers/tasksReducer';
import {usersReducer} from "./usersReducer/usersReducer";

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    users: usersReducer,
});

