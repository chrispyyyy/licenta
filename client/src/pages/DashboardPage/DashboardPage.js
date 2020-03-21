import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Navigation } from "../../components/Navigation";
import Container from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getDashboardAsync } from "../../actions/dashboardActions";
import { useEffect } from "react";
import { ProjectCard } from "../../components/ProjectCard";

const useStyles = makeStyles(theme => ({
  container: {
    width: 1200
  },
  paper: {
    // padding: theme.spacing(20),
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  grid: {

  }
}));

export const DashboardPage = ({ projects, tasks }) => {
  const dispatch = useDispatch();
  console.log('pr', projects);
  useEffect(() => {
    dispatch(getDashboardAsync());
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.grid} >
          <Paper className={classes.paper}>
            { projects.map(project => {
              return (
                <ProjectCard
                  projectName={project.name}
                  projectDescription={project.type}
                />
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            { tasks.map(project => {
              return (
                  <ProjectCard
                      projectName={project.name}
                      projectDescription={project.type}
                  />
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
