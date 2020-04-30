import {epicsSelector} from "../selectors/epicsSelector";
import {loggedUserSelector} from "../selectors/loggedUserSelector";


export const filterEpicsByCurrentUser = (state) => {
    const epics = epicsSelector(state);
    const loggedUser = loggedUserSelector(state);
    console.log(epics);
    return epics.filter((epic) => epic.assignee._id === loggedUser.id);
};