import { connect } from 'react-redux';
import {ProjectOverviewPage} from "../../pages/ProjectOverviewPage";
import {projectOverviewSelector} from "../../selectors/projectOverviewSelector";

const mapStateToProps = state => ({
project: projectOverviewSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export const ProjectOverviewPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectOverviewPage);