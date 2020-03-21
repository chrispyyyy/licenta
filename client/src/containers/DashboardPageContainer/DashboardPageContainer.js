import { connect } from 'react-redux';
import {DashboardPage} from "../../pages/DashboardPage";
import { projectsSelector } from '../../selectors/projectsSelector';
import { tasksSelector } from '../../selectors/tasksSelector';

const mapStateToProps = state => ({
    projects: projectsSelector(state),
    tasks: tasksSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export const DashboardPageContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);