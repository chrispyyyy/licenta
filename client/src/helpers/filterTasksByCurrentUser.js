import {loggedUserSelector} from "../selectors/loggedUserSelector";
import {tasksSelector} from "../selectors/tasksSelector";


export const filterTasksByCurrentUser = (state) => {
    const tasks = tasksSelector(state);
    const loggedUser = loggedUserSelector(state);
    return tasks.filter((task) => task.assignee._id === loggedUser.id);
};