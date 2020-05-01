import * as React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

export const ProjectOverviewPage = ({ project }) => {
    console.log(project);
  return (
    <Grid>
        <Row style={{ marginTop: 30 }}>
            <Col lg={3}>
                <h2>Project: {project.name}</h2>
            </Col>
        </Row>
      <Row style={{ marginTop: 30 }}>
        <Col lg={2}>
          <h4>Sprints</h4>
        </Col>
      </Row>
      {project.sprints &&
        project.sprints.map(sprint => {
          return (
            <Grid>
              <Row style={{ marginTop: 30 }}>
                <Col lg={3}>
                  <h6>{sprint.name} {sprint.status}</h6>
                </Col>
              </Row>
              <Row style={{ marginTop: 30 }}>
                <Col lg={12}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>User Story</TableCell>
                          <TableCell>Epic</TableCell>
                          <TableCell>Priority</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Assignee</TableCell>
                          <TableCell>Story Points</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                          {
                              sprint.userStories.map(userStory => {
                                  return (<TableRow>
                                      <TableCell>{userStory.name}</TableCell>
                                      <TableCell>
                                          <Chip label={userStory.epic.name} color="secondary" />
                                      </TableCell>
                                      <TableCell>{userStory.priority}</TableCell>
                                      <TableCell>{userStory.status}</TableCell>
                                      <TableCell>{userStory.assignee.firstName + ' '+userStory.assignee.lastName}</TableCell>
                                      <TableCell>
                                          <Chip label={userStory.storyPoints ? userStory.storyPoints : 'not estimated'}/>
                                      </TableCell>
                                  </TableRow>)
                              })
                          }
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Col>
              </Row>
            </Grid>
          );
        })}
    </Grid>
  );
};
