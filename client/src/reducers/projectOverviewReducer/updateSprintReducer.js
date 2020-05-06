export const updateSprintReducer = (state, payload) => {
    return {
        ...state,
        sprints: state.sprints.map(sprint => sprint._id === payload._id ? payload : sprint)
    };
};
