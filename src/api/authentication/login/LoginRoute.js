const express = require('express');
import LoginController from "./LoginController.js";

const router = express.Router();

router.post("/login", LoginController.login);
router.post('/logout', (req, res) => {
    req.logout();
    res.send(200);
});

module.exports = router;
