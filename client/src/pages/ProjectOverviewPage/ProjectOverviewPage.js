import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProjectAsync } from "../../actions/projectActions";

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

export const ProjectOverviewPage = (
) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProjectAsync('AFE'));
  // }, []);

  const classes = useStyles();
  return (
     <Grid>
       <Row>
         <Col>
           Hello
         </Col>
       </Row>
     </Grid>
  );
};
