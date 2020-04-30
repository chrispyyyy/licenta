import { connect } from 'react-redux';
import {usersSelector} from "../../selectors/usersSelector";
import {loggedUserSelector} from "../../selectors/loggedUserSelector";
import {projectsSelector} from "../../selectors/projectsSelector";
import {CreateSprintPage} from "../../pages/CreateSprintPage";
import {postSprintAsync} from "../../actions/sprintActions";

const mapStateToProps = state => ({
    projects: projectsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    createSprint: dispatch(postSprintAsync),
});

export const CreatesSprintPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateSprintPage);