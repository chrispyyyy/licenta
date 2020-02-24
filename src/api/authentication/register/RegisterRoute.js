const express = require('express');
import RegisterController from "./RegisterController.js";

const router = express.Router();

router.post("/user", RegisterController.create);
router.get("/users", RegisterController.find);
router.get("/user/:id", RegisterController.findOne);


module.exports = router;