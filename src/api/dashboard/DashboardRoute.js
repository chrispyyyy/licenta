const express = require('express');
import DashboardController from "./DashboardController.js";

const router = express.Router();

router.get("/dashboard", DashboardController.find);
router.get("/user", DashboardController.getUser);
router.post("/dashboard/create-project", DashboardController.createProject);
router.post("/dashboard/create-task", DashboardController.createTask);
router.post("/dashboard/create-epic", DashboardController.createEpic);
router.post("/dashboard/create-user-story", DashboardController.createUserStory);
router.post("/dashboard/create-sprint", DashboardController.createSprint);
router.get("/dashboard/project/:name", DashboardController.findProject);
router.put("/dashboard/project/sprint/:id", DashboardController.updateSprint);
router.put("/dashboard/project/user-story/:id", DashboardController.updateUserStory);
router.delete("/dashboard/project/:name", DashboardController.deleteOne);

module.exports = router;
