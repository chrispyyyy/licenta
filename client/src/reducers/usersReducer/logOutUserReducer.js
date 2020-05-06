export const logOutUserReducer = state => {
    return {...state, loggedUser: '', error: 'You have successfully logged out.' }
};