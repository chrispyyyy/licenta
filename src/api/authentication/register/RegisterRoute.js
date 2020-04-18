const express = require('express');
import RegisterController from "./RegisterController.js";

const router = express.Router();

router.post("/register", RegisterController.create);
router.get("/register", RegisterController.find);
router.post("/dashboard", RegisterController.findOne);


module.exports = router;