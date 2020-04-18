import { registerUserReducer } from './registerUserReducer';
import { userErrorReducer } from './userErrorReducer';
import { loginUserReducer } from './loginUserReducer';
import { resetUserErrorReducer } from './resetUserErrorReducer';
import { logOutUserReducer } from './logOutUserReducer';
import { isLoggingInReducer } from './isLoggingInReducer';
import { setUsersReducer } from './setUsersReducer';
import { INITIAL_USERS_STATE } from '../../initialState/INITIAL_USERS_STATE';
import { USER_ACTIONS } from '../../constants/USER_ACTIONS';

const reducers = {
    [USER_ACTIONS.REGISTER_USER]: registerUserReducer,
    [USER_ACTIONS.REGISTER_USER]: resetUserErrorReducer,
    [USER_ACTIONS.REGISTER_USER_FAILED]: userErrorReducer,
    [USER_ACTIONS.LOG_IN_SUCCESSFUL]: loginUserReducer,
    [USER_ACTIONS.LOG_IN_FAILED]: userErrorReducer,
    [USER_ACTIONS.LOG_OUT]: logOutUserReducer,
    [USER_ACTIONS.FETCH_USERS_SUCCESS]: setUsersReducer,
};

export const usersReducer = (
    state = INITIAL_USERS_STATE,
    action
) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return (reducer) ? reducer(state, payload) : state;
};
