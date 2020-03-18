import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import {Container} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import './login.css';
import {Navigation} from "../Navigation";

export const Login = ({ loginUser, error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        loginUser({email, password});
    };
    return (
        <div>
        <Navigation/>
        <Container maxWidth="sm">
            <Typography component="div" fixed style={{ backgroundColor: '#cfe8fc', height: '50vh',
            marginTop:'20vh'}}>
                <div style={{
                    padding: '100px'}}>
            { error.length &&
            <div className="row input">
                <Alert severity="error" variant="outlined">{error}</Alert>
            </div>
            }
            <div className="row input">
            <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="secondary"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <div className="row input">
            <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                color="secondary"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </div>
            <div className="row input">
            <Button variant="contained" color="secondary" onClick={submit} > Log In </Button>
                No account?
            <Button variant="contained" color="secondary" href='/register' > Register </Button>
            </div>
                </div>
            </Typography>
        </Container>
        </div>
    );

};