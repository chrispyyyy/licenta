import axiosInstance from "../helpers/axiosInstance";
import {TASK_ACTIONS} from "../constants/TASK_ACTIONS";
import { push } from 'connected-react-router';

const createTaskAction = () => {
    return {
        type: TASK_ACTIONS.CREATE_TASK
    }
};
const createTaskErrorAction = (error) => {
    return {
        type: TASK_ACTIONS.CREATE_TASK_FAILED,
        payload: error,
    }
};
const createTaskSuccessAction = (task) => {
    return {
        type: TASK_ACTIONS.CREATE_TASK_SUCCESSFUL,
        payload: task,
    }
};

export const postTaskAsync = (dispatch) => async (payload) =>{
    dispatch(createTaskAction());
    axiosInstance.post('/dashboard/create-task',  {
        name: payload.name,
        description: payload.description,
        assignee: payload.assignee._id,
        creator: payload.loggedUserId,
        project: payload.project,
        priority: payload.priority,
        epic: payload.epic,
        userStory: payload.userStory
    }, { withCredentials: true }).then(response => {
        dispatch(createTaskSuccessAction(response.data.data));
        // dispatch(push('/dashboard'))
    }).catch(error => {
        dispatch(createTaskErrorAction(error));
    })
};
