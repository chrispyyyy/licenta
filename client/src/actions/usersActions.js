import axiosInstance from "../helpers/axiosInstance";

const fetchUsers = () => {
    return {
        type: 'FETCH_USERS'
    }
};
const fetchUsersError = (error) => {
    return {
        type: 'FETCH_USERS_FAILED',
        payload: error,
    }
};
const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users,
    }
};

export const getUsersAsync = () => {
    return function(dispatch) {
        dispatch(fetchUsers());
        axiosInstance
            .get('/dashboard/create-project')
            .then(response => {
                    dispatch(fetchUsersSuccess(response.data.data));
            })
            .catch(error => {
                console.error('Error while getting data: ', error);
                dispatch(fetchUsersError(error));
            })
    }
};