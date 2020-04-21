import axiosInstance from "../helpers/axiosInstance";
import { USER_ACTIONS } from "../constants/USER_ACTIONS";
import { push } from "connected-react-router";

const loginUserAction = () => {
  return {
    type: USER_ACTIONS.LOG_IN
  };
};
const loginUserErrorAction = error => {
  return {
    type: USER_ACTIONS.LOG_IN_FAILED,
    payload: error
  };
};
const loginUserSuccessAction = user => {
  return {
    type: USER_ACTIONS.LOG_IN_SUCCESSFUL,
    payload: user
  };
};

export const postLoginAsync = dispatch => async payload => {
  dispatch(loginUserAction());
  axiosInstance
    .post("/login", {
      email: payload.email,
      password: payload.password
    })
    .then(response => {
      setTimeout(() => {
        dispatch(loginUserSuccessAction(response.data.data.user));
      }, 1000);
      dispatch(push("/dashboard"));
    })
    .catch(error => {
      console.log("ee", error);
      dispatch(loginUserErrorAction(error));
    });
};

export const logOutUser = () => ({
    type: USER_ACTIONS.LOG_OUT
});

export const logOutUserAction = () => {
        return function(dispatch) {
            axiosInstance
                .post("/logout", {withCredentials: true})
                .then(() => {
                    dispatch(logOutUser());
                })
                .catch(error => {
                    console.error(
                        "Error while getting data: ",
                        error
                    );
                });
        }
};
