const express = require('express');
import LoginController from "./LoginController.js";

const router = express.Router();

router.post("/login", LoginController.login);


module.exports = router;