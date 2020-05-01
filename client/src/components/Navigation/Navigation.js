import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { CreateMenuButton } from "../CreateMenuButton";
import { Col, Row, Grid } from "react-styled-flexboxgrid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "auto",
    marginTop: 20
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  div: {
    display: "inline-flex"
  }
}));

export const Navigation = ({ logOut, loggedUser }) => {
  const classes = useStyles();
  const onLogOut = () => {
    logOut();
  };

  return (
    <Grid>
      <Paper className={classes.paper}>
        <Row lg={12}>
          <Col lg={2}>SCRUMMER</Col>
          {loggedUser && (
            <div className={classes.div}>
                <Button style={{width:50}}>
              <Link
                href="/dashboard"
                style={{
                  fontSize: 13,
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginRight: 30
                }}
              >
                DASHBOARD
              </Link>
                </Button>
              <CreateMenuButton loggedUser={loggedUser} />
              <Col lgOffset={17} lg={10}>
                Hi, <Button>{loggedUser.firstName + ' ' + loggedUser.lastName}</Button>
                <Button onClick={onLogOut}> Log out</Button>
              </Col>
            </div>
          )}
        </Row>
      </Paper>
    </Grid>
  );
};
