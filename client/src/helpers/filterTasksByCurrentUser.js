import {tasksSelector} from "../selectors/tasksSelector";
import {loggedUserSelector} from "../selectors/loggedUserSelector";


export const filterTasksByCurrentUser = (state) => {
    const tasks = tasksSelector(state);
    const loggedUser = loggedUserSelector(state);
    return tasks.filter((task) => task.assignee === loggedUser.email);
};