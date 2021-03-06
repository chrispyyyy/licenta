import React, { useState } from "react";
import get from "lodash/get";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import {Typography} from "@material-ui/core";

export const CreateEpicPage = ({ createEpic, users, loggedUser, projects }) => {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [isAssigneeOpen, setIsAssigneeOpen] = useState(false);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const loggedUserId = get(loggedUser, "id", "");
  const submit = () => {
    createEpic({
      name,
      description,
      assignee,
      loggedUserId,
      project: project._id,
      priority
    });
  };

  const handleAssigneeChange = event => {
    setAssignee(event.target.value);
  };
  const handlePriorityChange = event => {
    setPriority(event.target.value);
  };
  const handleProjectChange = event => {
    setProject(event.target.value);
  };

  const handleAssigneeClose = () => {
    setIsAssigneeOpen(false);
  };

  const handleAssigneeOpen = () => {
    setIsAssigneeOpen(true);
  };
  const handlePriorityClose = () => {
    setIsPriorityOpen(false);
  };

  const handlePriorityOpen = () => {
    setIsPriorityOpen(true);
  };
  const handleProjectClose = () => {
    setIsProjectOpen(false);
  };

  const handleProjectOpen = () => {
    setIsProjectOpen(true);
  };

  return (
    <Grid>
      <Row style={{marginBottom:20, marginTop:20}}>
        <Col lg={4} lgOffset={4}>
          <Typography variant='h3'>CREATE EPIC</Typography>
        </Col>
    </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={4}>
        <TextField
          className="input"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="secondary"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={4}>
        <TextField
          className="input"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          color="secondary"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={3}>
          Priority:
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={4}>
        <Select
          style={{ width: 300 }}
          labelId="demo-simple-select-label"
          open={isPriorityOpen}
          onClose={handlePriorityClose}
          onOpen={handlePriorityOpen}
          value={priority}
          onChange={handlePriorityChange}
        >
          <MenuItem value={"LOW"}>Low</MenuItem>
          <MenuItem value={"MEDIUM"}>Medium</MenuItem>
          <MenuItem value={"HIGH"}>High</MenuItem>
        </Select>
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={3}>
          Project
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={4}>
          <Select
              style={{ width: 300 }}
              labelId="demo-simple-select-label"
              open={isProjectOpen}
              onClose={handleProjectClose}
              onOpen={handleProjectOpen}
              onChange={handleProjectChange}
              value={project}
          >
            {projects.map(project => (
                <MenuItem key={project._id} value={project}>
                  {project.name}
                </MenuItem>
            ))}
          </Select>
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={3}>
          Assignee:
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={4}>
        <Select
          style={{ width: 300 }}
          labelId="demo-simple-select-label"
          open={isAssigneeOpen}
          onClose={handleAssigneeClose}
          onOpen={handleAssigneeOpen}
          onChange={handleAssigneeChange}
          value={assignee}
        >
          { project && project.members.map(user => (
            <MenuItem key={user._id} value={user}>
              {user.firstName + " " + user.lastName}
            </MenuItem>
          ))}
        </Select>
        </Col>
      </Row>
      <Row style={{marginBottom:20}}>
        <Col lg={4} lgOffset={4}>
        <Button variant="contained" color="secondary" onClick={submit}>
          {" "}
          Create{" "}
        </Button>
        </Col>
      </Row>
    </Grid>
  );
};
