const express = require('express');
import DashboardController from "./DashboardController.js";

const router = express.Router();

router.get("/dashboard", DashboardController.find);
router.post("/dashboard", DashboardController.create);
router.get("/dashboard/project/:name", DashboardController.findOne);
router.delete("/dashboard/project/:name", DashboardController.deleteOne);

module.exports = router;