const express = require('express');
import LoginController from "./LoginController.js";

const router = express.Router();

router.post("/login", LoginController.login);
router.get('/logout', (req, res) => {
    req.session.destroy();
    console.log(req.session.destroy());
});

module.exports = router;