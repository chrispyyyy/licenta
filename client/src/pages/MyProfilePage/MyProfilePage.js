import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import {Typography} from "@material-ui/core";

export const MyProfilePage = ({ loggedUser }) => {
    const [password, setPassword] = useState("");
return (
<Grid>
    <Row style={{marginTop:30}}>
        <Col lg={2} lgOffset={5}>
        <h3>My Profile</h3>
        </Col>
    </Row>
    <Row style={{marginTop:10}}>
        <Col lg={1}>
        <h6>Name: </h6>
        </Col>
        <Col lg={2}>
        <h6>{loggedUser.firstName} {loggedUser.lastName}</h6>
        </Col>
    </Row>
    <Row style={{marginTop:10}}>
        <Col lg={1}>
        <h6>Role: </h6>
        </Col>
        <Col lg={2}>
        <h6>{loggedUser.role}</h6>
        </Col>
    </Row>
    <Row style={{marginTop:10}}>
        <Col lg={1}>
        <h6>Email: </h6>
        </Col>
        <Col lg={2}>
        <h6>{loggedUser.email}</h6>
        </Col>
    </Row>
    <Row style={{marginTop:10}}>
        <Col lg={1}>
        <h6>Change password: </h6>
        </Col>
        <Col lg={4}>
            <TextField
                type="password"
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                color="secondary"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <Button  style={{height:50}}color="primary" >Save</Button>
        </Col>
    </Row>
</Grid>
)
};