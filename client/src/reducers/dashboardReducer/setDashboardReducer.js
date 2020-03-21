export const setDashboardReducer = (state, payload) => {
    console.log('xxx', payload);
    return {...state, ...payload };
};