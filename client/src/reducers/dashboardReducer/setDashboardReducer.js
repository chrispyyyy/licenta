export const setDashboardReducer = (state, payload) => {
    return {...state, isFetching: false, ...payload };
};