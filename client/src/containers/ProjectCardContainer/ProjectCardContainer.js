import { connect } from 'react-redux';
import { getProjectAsync } from '../../actions/projectActions';
import { ProjectCard } from '../../components/ProjectCard';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
    showProjectDetails: dispatch(getProjectAsync),
});

export const ProjectCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectCard);