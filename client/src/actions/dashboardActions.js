import axiosInstance from "../helpers/axiosInstance";

const fetchDashboard = () => {
    return {
        type: 'FETCH_DASHBOARD'
    }
};
const fetchDashboardError = (error) => {
    return {
        type: 'FETCH_DASHBOARD_FAILED',
        payload: error,
    }
};
const fetchDashboardSuccess = (dashboard) => {
    return {
        type: 'FETCH_DASHBOARD_SUCCESS',
        payload: dashboard,
    }
};

export const getDashboardAsync = () => {
    return function(dispatch) {
        dispatch(fetchDashboard());
        axiosInstance
            .get('/dashboard')
            .then(response => {
                //response.data is your project data
                dispatch(fetchDashboardSuccess(response.data.data));
            })
            .catch(error => {
                console.error('Error while getting data: ', error);
                dispatch(fetchDashboardError(error));
            })
    }
};