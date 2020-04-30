import {loggedUserSelector} from "../selectors/loggedUserSelector";
import {userStoriesSelector} from "../selectors/userStoriesSelector";


export const filterUserStoriesByCurrentUser = (state) => {
    const userStories = userStoriesSelector(state);
    const loggedUser = loggedUserSelector(state);
    return userStories.filter((userStory) => userStory.assignee._id === loggedUser.id);
};