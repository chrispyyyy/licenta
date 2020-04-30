import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import "./login.css";

export const Login = ({ loginUser, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    loginUser({ email, password });
  };
  return (
    <Grid>
        {/*{   error.message &&*/}
         <Row style={{marginBottom:30, marginTop:30}}>
           <Col lg={4} lgOffset={4}>
            <Alert severity="error" variant="outlined">
              wtf
            </Alert>
           </Col>
         </Row>
        {/*}*/}
       <Row style={{marginBottom:30}}>
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
        <Row style={{marginBottom:30}}>
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
       <Row style={{marginBottom:30}}>
         <Col lg={4} lgOffset={4}>
          <Button variant="contained" color="secondary" onClick={submit}>
            {" "}
            Log In{" "}
          </Button>
          No account?
          <Button variant="contained" color="secondary" href="/register">
            {" "}
            Register{" "}
          </Button>
         </Col>
       </Row>
    </Grid>
  );
};
