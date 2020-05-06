import { connect } from "react-redux";
import { ProjectOverviewPage } from "../../pages/ProjectOverviewPage";
import { projectOverviewSelector } from "../../selectors/projectOverviewSelector";
import { updateSprintAsync } from "../../actions/sprintActions";
import {updateUserStoryAsync} from "../../actions/userStoryActions";
import {usersSelector} from "../../selectors/usersSelector";
import {loggedUserSelector} from "../../selectors/loggedUserSelector";

const mapStateToProps = state => ({
  project: projectOverviewSelector(state),
  users: usersSelector(state),
  loggedUser: loggedUserSelector(state)
});

const mapDispatchToProps = dispatch => ({
  updateSprint: sprint => dispatch(updateSprintAsync(sprint)),
  updateUserStory: userStory => dispatch(updateUserStoryAsync(userStory))
});

export const ProjectOverviewPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectOverviewPage);
