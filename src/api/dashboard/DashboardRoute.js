const express = require('express');
import DashboardController from "./DashboardController.js";

const router = express.Router();

router.get("/dashboard", DashboardController.find);
router.post("/dashboard/create-project", DashboardController.createProject);
router.post("/dashboard/create-task", DashboardController.createTask);
router.post("/dashboard/create-epic", DashboardController.createEpic);
router.get("/dashboard/project/:name", DashboardController.findOne);
router.delete("/dashboard/project/:name", DashboardController.deleteOne);

module.exports = router;
