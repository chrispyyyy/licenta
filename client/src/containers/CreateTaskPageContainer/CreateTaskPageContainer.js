import { connect } from 'react-redux';
import {usersSelector} from "../../selectors/usersSelector";
import {loggedUserSelector} from "../../selectors/loggedUserSelector";
import {projectsSelector} from "../../selectors/projectsSelector";
import {CreateTaskPage} from "../../pages/CreateTaskPage";
import {postTaskAsync} from "../../actions/taskActions";

const mapStateToProps = state => ({
    users: usersSelector(state),
    loggedUser: loggedUserSelector(state),
    projects: projectsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    createTask: dispatch(postTaskAsync),
});

export const CreateTaskPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);