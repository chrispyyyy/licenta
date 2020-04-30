import { connect } from 'react-redux';
import {CreateUserStoryPage} from "../../pages/CreateUserStoryPage";
import {usersSelector} from "../../selectors/usersSelector";
import {loggedUserSelector} from "../../selectors/loggedUserSelector";
import {projectsSelector} from "../../selectors/projectsSelector";
import {postUserStoryAsync} from "../../actions/userStoryActions";

const mapStateToProps = state => ({
    users: usersSelector(state),
    loggedUser: loggedUserSelector(state),
    projects: projectsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    createUserStory: dispatch(postUserStoryAsync),
});

export const CreateUserStoryPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateUserStoryPage);