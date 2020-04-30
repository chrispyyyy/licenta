import axiosInstance from "../helpers/axiosInstance";
import {SPRINT_ACTIONS} from "../constants/SPRINT_ACTIONS";
import { push } from 'connected-react-router';

const createSprintAction = () => {
    return {
        type: SPRINT_ACTIONS.CREATE_SPRINT
    }
};
const createSprintErrorAction = (error) => {
    return {
        type: SPRINT_ACTIONS.CREATE_SPRINT_FAILED,
        payload: error,
    }
};
const createSprintSuccessAction = (project) => {
    return {
        type: SPRINT_ACTIONS.CREATE_SPRINT_SUCCESSFUL,
        payload: project,
    }
};

export const postSprintAsync = (dispatch) => async (payload) =>{
    dispatch(createSprintAction());
    axiosInstance.post('/dashboard/create-sprint',  {
        name: payload.name,
        description: payload.description,
        project: payload.project,
        goal: payload.goal,
        userStories: payload.userStories,
        startDate: payload.startDate,
        endDate: payload.endDate
    }, { withCredentials: true }).then(response => {
        dispatch(createSprintSuccessAction(response.data.data));
        // dispatch(push('/dashboard'))
    }).catch(error => {
        dispatch(createSprintErrorAction(error));
    })

};
