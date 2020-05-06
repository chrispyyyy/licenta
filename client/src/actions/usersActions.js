import axiosInstance from "../helpers/axiosInstance";

const fetchUser = () => {
    return {
        type: 'FETCH_USER'
    }
};
const fetchUserError = (error) => {
    return {
        type: 'FETCH_USER_FAILED',
        payload: error,
    }
};
const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: user,
    }
};

export const getUserAsync = () => {
    return function(dispatch) {
        dispatch(fetchUser());
        axiosInstance
            .get('/user')
            .then(response => {
                    dispatch(fetchUserSuccess(response.data.data));
            })
            .catch(error => {
                dispatch(fetchUserError(error));
            })
    }
};