const express = require('express');
import LoginController from "./LoginController.js";
const vm = require("v-response");

const router = express.Router();

router.post("/login", LoginController.login);
router.post('/logout', (req, res) => {
    req.logout();
    return res
        .status(200)
        .json(
            vm.ApiResponse(
                true,
                200,
                "successfully logged out"
            )
        );
});

module.exports = router;
