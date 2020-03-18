export const registerUserErrorReducer = (state, payload) => {
  return { ...state, error: payload };
};
