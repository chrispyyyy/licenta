import { connect } from 'react-redux';
import { userErrorSelector } from '../../selectors/userErrorSelector';
import { ProjectCard } from '../../components/ProjectCard';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
    showMore: dispatch(registerUserAction),
});

export const TaskCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectCard);