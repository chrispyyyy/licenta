import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Typography } from '@material-ui/core';

export const Register = ({ registerUser, error }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [open, setOpen] = useState(false);

    const submit = () => {
        registerUser({firstName, lastName, email, password, role});
    };
    const handleChange = event => {
        setRole(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
      <Grid>
          <Row style={{marginBottom:20, marginTop:20}}>
              <Col lg={4} lgOffset={4}>
                  <Typography variant='h3'>REGISTER</Typography>
              </Col>
          </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col lg={4} lgOffset={4}>
            {error.length > 0 && (
              <div className="row input">
                <Alert severity="error" variant="outlined">
                  {error}
                </Alert>
              </div>
            )}
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col lg={4} lgOffset={4}>
            <TextField
              className="input"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              color="secondary"
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col lg={4} lgOffset={4}>
            <TextField
              className="input"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              color="secondary"
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col lg={4} lgOffset={4}>
            <TextField
              className="input"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="secondary"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col lg={4} lgOffset={4}>
            <TextField
              className="input"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              color="secondary"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <Col lg={4} lgOffset={4}>
            <FormControl className="select">
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                style={{ width: 300 }}
                labelId="demo-simple-select-label"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={role}
                onChange={handleChange}
              >
                <MenuItem value={"TEAM_MEMBER"}>Dev Team Member</MenuItem>
                <MenuItem value={"SCRUM_MASTER"}>Scrum Master</MenuItem>
                <MenuItem value={"PRODUCT_OWNER"}>Product Owner</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col lg={4} lgOffset={4}>
            <Button
              style={{ marginRight: 90 }}
              variant="contained"
              color="secondary"
              onClick={submit}
            >
              {" "}
              Register{" "}
            </Button>
            <Button variant="contained" color="secondary" href="/login">
              {" "}
              Login{" "}
            </Button>
          </Col>
        </Row>
      </Grid>
    );

};