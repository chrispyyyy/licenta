import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

 export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}



export class Login extends React.Component {

    componentDidMount() {
        const data = {
            first_name: "cris",
            last_name: "sirb",
            email: "cristinaaaa@yahoo.com",
            password: "xxx"

        };
        postData('http://localhost:3000/api/user', data).then( data => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary"><a href="/users"> Hello </a> </Button>
                <a href="/users"> Log In</a>
                Log In!
            </div>
        )
    };
}