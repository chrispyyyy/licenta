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
                                  .get("/dashboard", { withCredentials: true })
                                  .then(response => {
                                    setTimeout(() => {
                                      dispatch(
                                        fetchDashboardSuccess(
                                          response.data.data
                                        )
                                      );
                                    }, 1000);
                                  })
                                  .catch(error => {
                                    console.error(
                                      "Error while getting data: ",
                                      error
                                    );
                                    dispatch(fetchDashboardError(error));
                                  });
                              }
};