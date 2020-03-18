import axiosInstance from "../helpers/axiosInstance";

const fetchProjects = () => {
    return {
        type: 'FETCH_PROJECTS'
    }
};
const fetchProjectsError = (error) => {
    return {
        type: 'FETCH_PROJECTS_FAILED',
        payload: error,
    }
};
const fetchProjectsSuccess = (projects) => {
    return {
        type: 'FETCH_PROJECTS_SUCCESS',
        payload: projects,
    }
};

export const getProjectsAsync = () => {
    return function(dispatch) {
        dispatch(fetchProjects());
        axiosInstance
            .get('/dashboard')
            .then(response => {
                //response.data is your project data
                console.log('Received projects: ', response.data.data);
                dispatch(fetchProjectsSuccess(response.data.data));
            })
            .catch(error => {
                console.error('Error while getting projects: ', error);
                dispatch(fetchProjectsError(error));
            })
    }
};