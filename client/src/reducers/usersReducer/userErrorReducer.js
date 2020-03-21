export const userErrorReducer = (state, payload) => {
  return { ...state, error: payload };
};
