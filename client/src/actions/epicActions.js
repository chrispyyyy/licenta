import axiosInstance from "../helpers/axiosInstance";
import {EPIC_ACTIONS} from "../constants/EPIC_ACTIONS";
import { push } from 'connected-react-router';

const createEpicAction = () => {
    return {
        type: EPIC_ACTIONS.CREATE_EPIC
    }
};
const createEpicErrorAction = (error) => {
    return {
        type: EPIC_ACTIONS.CREATE_EPIC_FAILED,
        payload: error,
    }
};
const createEpicSuccessAction = (epic) => {
    return {
        type: EPIC_ACTIONS.CREATE_EPIC_SUCCESSFUL,
        payload: epic,
    }
};

export const postEpicAsync = (dispatch) => async (payload) =>{
    dispatch(createEpicAction());
    axiosInstance.post('/dashboard/create-epic',  {
        name: payload.name,
        description: payload.description,
        assignee: payload.assignee._id,
        creator: payload.loggedUserId,
        project: payload.project,
        priority: payload.priority,
    }, { withCredentials: true }).then(response => {
        dispatch(createEpicSuccessAction(response.data.data));
        // dispatch(push('/dashboard'))
    }).catch(error => {
        dispatch(createEpicErrorAction(error));
    })

};
