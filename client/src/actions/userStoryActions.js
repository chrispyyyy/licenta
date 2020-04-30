import axiosInstance from "../helpers/axiosInstance";
import {USER_STORY_ACTIONS} from "../constants/USER_STORY_ACTIONS";
import { push } from 'connected-react-router';

const createUserStoryAction = () => {
    return {
        type: USER_STORY_ACTIONS.CREATE_USER_STORY
    }
};
const createUserStoryErrorAction = (error) => {
    return {
        type: USER_STORY_ACTIONS.CREATE_USER_STORY_FAILED,
        payload: error,
    }
};
const createUserStorySuccessAction = (userStory) => {
    return {
        type: USER_STORY_ACTIONS.CREATE_USER_STORY_SUCCESSFUL,
        payload: userStory,
    }
};

export const postUserStoryAsync = (dispatch) => async (payload) =>{
    dispatch(createUserStoryAction());
    axiosInstance.post('/dashboard/create-user-story',  {
        name: payload.name,
        description: payload.description,
        assignee: payload.assignee._id,
        creator: payload.loggedUserId,
        project: payload.project,
        priority: payload.priority,
        epic: payload.epic
    }, { withCredentials: true }).then(response => {
        dispatch(createUserStorySuccessAction(response.data.data));
        // dispatch(push('/dashboard'))
    }).catch(error => {
        dispatch(createUserStoryErrorAction(error));
    })

};
