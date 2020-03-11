import express from 'express';
const bodyParser = require('body-parser');
const vm = require('v-response');
const mongoose = require('mongoose');
const config = require('config');
import RegisterRoute from './src/api/authentication/register/RegisterRoute.js';
import LoginRoute from './src/api/authentication/login/LoginRoute.js';

const port = process.env.PORT || config.get("app.port");
const prefix = config.get("api.prefix");
const db = config.get("database.url");
const app = express();
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization,x-api-key");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(prefix, RegisterRoute);
app.use(prefix, LoginRoute);

mongoose.connect(db,{ useNewUrlParser: true } )
    .then(() => vm.log("connected to mongoDB", db))
    .catch(err => vm.log("error mongodb", err));
app.listen(port, vm.log("listing on port", port));
