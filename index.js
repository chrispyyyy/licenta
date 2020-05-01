const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const cors = require("cors");
const vm = require("v-response");
const mongoose = require("mongoose");
const config = require("config");
import RegisterRoute from "./src/api/authentication/register/RegisterRoute.js";
import LoginRoute from "./src/api/authentication/login/LoginRoute.js";
import DashboardRoute from "./src/api/dashboard/DashboardRoute.js";
const cookieSession = require("cookie-session");
const port = process.env.PORT || config.get("app.port");
const prefix = config.get("api.prefix");
const db = config.get("database.url");
const app = express();

mongoose
    .connect(db || 'mongodb://localhost:27017/my-db', { useNewUrlParser: true })
    .then(() => {
        app.listen(port, vm.log("listing on port", port));
        vm.log("connected to mongoDB", db);
    })
    .catch(err => vm.log("error mongodb", err));

const initialize = require("./passportConfig");
initialize(passport);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("secret"));

app.use(
  cookieSession({
    maxAge: config.get("app.expiresIn"),
    name: config.get("app.sessionName"),
    secret: "secret",
  })
);
app.use(passport.initialize());

app.use(passport.session());

app.use(methodOverride());

app.use(prefix, RegisterRoute);
app.use(prefix, LoginRoute);
app.use(prefix, DashboardRoute);


