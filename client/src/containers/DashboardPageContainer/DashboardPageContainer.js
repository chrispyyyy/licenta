import { connect } from 'react-redux';
import {DashboardPage} from "../../pages/DashboardPage";
import { projectsSelector } from '../../selectors/projectsSelector';
import { isFetchingSelector } from '../../selectors/isFetchingSelector';
import { filterEpicsByCurrentUser } from '../../helpers/filterEpicsByCurrentUser';
import {filterUserStoriesByCurrentUser} from "../../helpers/filterUserStoriesByCurrentUser";
import {filterTasksByCurrentUser} from "../../helpers/filterTasksByCurrentUser";
import {sprintsSelector} from "../../selectors/sprintsSelector";

const mapStateToProps = state => ({
    projects: projectsSelector(state),
    epics: filterEpicsByCurrentUser(state),
    userStories: filterUserStoriesByCurrentUser(state),
    tasks: filterTasksByCurrentUser(state),
    isFetching: isFetchingSelector(state),
    sprints: sprintsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export const DashboardPageContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);