import { registerUserReducer } from './registerUserReducer';
import { registerUserErrorReducer } from './registerUserErrorReducer';
import { loginUserReducer } from './loginUserReducer';
import { INITIAL_USERS_STATE } from '../../initialState/INITIAL_USERS_STATE';
import { USER_ACTIONS } from '../../constants/USER_ACTIONS';

const reducers = {
    [USER_ACTIONS.REGISTER_USER]: registerUserReducer,
    [USER_ACTIONS.REGISTER_USER_FAILED]: registerUserErrorReducer,
    [USER_ACTIONS.LOG_IN_USER]: loginUserReducer,
    [USER_ACTIONS.LOG_IN_FAILED]: registerUserErrorReducer,
};

export const usersReducer = (
    state = INITIAL_USERS_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};
