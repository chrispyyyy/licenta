
const INITIAL_STATE = {
    tasks: [],
};

export const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TASKS': {
            return state.tasks = action.payload;
        }
        default: return state;
    }
};