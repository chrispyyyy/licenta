import { INITIAL_TASKS_STATE } from '../../initialState/INITIAL_TASKS_STATE';
import { setTasksReducer } from "./setTasksReducer";

const reducers = {
    'SET_TASKS': setTasksReducer,
};

export const tasksReducer = (
    state = INITIAL_TASKS_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};