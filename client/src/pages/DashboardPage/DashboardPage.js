import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getDashboardAsync } from "../../actions/dashboardActions";
import { useEffect } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { TaskExpansionPanel } from "../../components/TaskExpansionPanel";

const useStyles = makeStyles(theme => ({
  container: {
    width: 1200
  },
  tasksPaper: {
    // padding: theme.spacing(20),
    color: theme.palette.text.secondary,
    display: 'block',
  },
  projectsPaper: {
    // padding: theme.spacing(20),
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  grid: {

  }
}));

export const DashboardPage = ({ projects, tasks, isFetching, epics, userStories }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardAsync());
  }, []);

  const classes = useStyles();
  return (

      <Container className={classes.container}>
      { isFetching ? <CircularProgress color="secondary" /> :
       <Grid container spacing={3}>
              <Grid item xs={6} className={classes.grid} >
              <Paper className={classes.projectsPaper}>
            { projects.map(project => {
              return (
              <ProjectCard
              projectName={project.name}
              />
              );
            })}
              </Paper>
              </Grid>
              <Grid item xs={6}>
              <Paper className={classes.tasksPaper}>
                Assigned to me
                <h2>Epics</h2>
                {
                  epics.map(epic => {
                    return(<TaskExpansionPanel epic={epic} />)
                  })
                }
              <h2>User stories</h2>
                {
                  userStories.map(userStory => {
                    return(<TaskExpansionPanel userStory={userStory} />)
                  })
                }
              <h2>Tasks</h2>
                {
                  tasks.map(task => {
                    return(<TaskExpansionPanel task={task} />)
                  })
                }
              </Paper>
              </Grid>

              </Grid>

      }


      </Container>


  );
};
