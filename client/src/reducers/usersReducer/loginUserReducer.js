export const loginUserReducer = (state, payload) => {
    return {...state, loggedUser: payload }
};