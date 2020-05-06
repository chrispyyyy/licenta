export const updateUserStoryReducer = (state, payload) => {
  return {
    ...state,
    sprints: state.sprints.map(sprint =>
      sprint._id === payload.sprint
        ? {
            ...sprint,
            userStories: sprint.userStories.map(userStory =>
              userStory._id === payload._id ? payload : userStory
            )
          }
        : sprint
    )
  };
};
