export const registerUserReducer = (state, payload) => {
  return {
    ...state,
    users: [
      ...state.users,
      {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        role: payload.role
      }
    ]
  };
};
