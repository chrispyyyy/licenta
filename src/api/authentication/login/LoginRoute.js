const express = require('express');
import LoginController from "./LoginController.js";

const router = express.Router();

router.post("/login", LoginController.login);
router.get('/logout', (req, res) => {
    req.logout();
    req.user = null;
    req.session = null;
    res.send('Logged out');
});

module.exports = router;