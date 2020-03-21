import axiosInstance from "../helpers/axiosInstance";
import {USER_ACTIONS} from "../constants/USER_ACTIONS";
import { push } from 'connected-react-router';

const registerUserAction = () => {
    return {
        type: USER_ACTIONS.REGISTER_USER
    }
};
const registerUserErrorAction = (error) => {
    return {
        type: USER_ACTIONS.REGISTER_USER_FAILED,
        payload: error,
    }
};
const registerUserSuccessAction = (user) => {
    return {
        type: USER_ACTIONS.REGISTER_USER_SUCCESSFUL,
        payload: user,
    }
};

export const postRegisterAsync = (dispatch) => async (payload) =>{
    dispatch(registerUserAction());
    axiosInstance.post('/register', {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
        role: payload.role,
    }).then(response => {
        dispatch(registerUserSuccessAction(response.data.data.user));
        dispatch(push('/login'))
    }).catch(error => {
        dispatch(registerUserErrorAction(error));
    })

};
