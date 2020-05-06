import axiosInstance from "../helpers/axiosInstance";
import { PROJECT_ACTIONS } from "../constants/PROJECT_ACTIONS";
import { push } from "connected-react-router";

const createProjectAction = () => {
  return {
    type: PROJECT_ACTIONS.CREATE_PROJECT
  };
};
const createProjectErrorAction = error => {
  return {
    type: PROJECT_ACTIONS.CREATE_PROJECT_FAILED,
    payload: error
  };
};
const createProjectSuccessAction = project => {
  return {
    type: PROJECT_ACTIONS.CREATE_PROJECT_SUCCESSFUL,
    payload: project
  };
};

export const postProjectAsync = dispatch => async payload => {
  dispatch(createProjectAction());
  axiosInstance
    .post(
      "/dashboard/create-project",
      {
        name: payload.name,
        description: payload.description,
        members: payload.members
      },
      { withCredentials: true }
    )
    .then(response => {
      dispatch(createProjectSuccessAction(response.data.data));
      dispatch(push('/dashboard'))
    })
    .catch(error => {
      dispatch(createProjectErrorAction(error));
    });
};

const getProjectAction = projectName => {
  return {
    type: PROJECT_ACTIONS.GET_PROJECT,
    payload: projectName
  };
};
const getProjectErrorAction = error => {
  return {
    type: PROJECT_ACTIONS.GET_PROJECT_FAILED,
    payload: error
  };
};
const getProjectSuccessAction = project => {
  return {
    type: PROJECT_ACTIONS.GET_PROJECT_SUCCESSFUL,
    payload: project
  };
};

export const getProjectAsync = name => {
  const url = `/dashboard/project/${name}`;
  return function(dispatch) {
    dispatch(getProjectAction());
    axiosInstance
      .get(url, { withCredentials: true })
      .then(response => {
        dispatch(getProjectSuccessAction(response.data.data));
        dispatch(push(url));
      })
      .catch(error => {
        console.error("Error while getting data: ", error);
        dispatch(getProjectErrorAction(error));
      });
  };
};
