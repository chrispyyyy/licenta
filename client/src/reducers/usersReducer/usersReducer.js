import { registerUserReducer } from './registerUserReducer';
import { INITIAL_USERS_STATE } from './INITIAL_USERS_STATE';

const reducers = {
    'REGISTER_USER': registerUserReducer,
};

export const usersReducer = (
    state = INITIAL_USERS_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};
