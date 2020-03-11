

export const registerUserReducer = (state, payload) => {
    return {...state, users: [ ...state.users, payload ]};
};