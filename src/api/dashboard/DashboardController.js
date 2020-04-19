//import the model file
import ProjectModel from "./ProjectModel.js";
import TaskModel from "./TaskModel.js";
import EpicModel from "./EpicModel.js";
import UserStoryModel from "./UserStoryModel.js";
import UserModel from "../authentication/register/UserModel.js";
import SprintModel from "./SprintModel";
import ProductBacklogModel from "./ProductBacklogModel";
const vm = require("v-response");

exports.createProject = async (req, res, next) => {
  // checking if the name provided already exist in the DB
  await ProjectModel.findOne({ name: req.body.name }).then(name_exist => {
    //if it exist we are returning an error message
    if (name_exist) {
      return res
        .status(409)
        .json(vm.ApiResponse(false, 409, "project already exists"));
    }
    // else we are creating a new project
    let project_body = req.body;
    const new_project = new ProjectModel(project_body);
    console.log(new_project);
    new_project
      .save()
      .then(saved => {
        if (!saved) {
          return res
            .status(400)
            .json(
              vm.ApiResponse(false, 400, "an error occur please try again")
            );
        } else {
           saved.members.forEach(member => {
               UserModel.findById(member._id).then(user => {
                   user.projects = [...user.projects, saved._id];
                   user.save();
               });
           });
          return res
            .status(201)
            .json(
              vm.ApiResponse(true, 201, "project successfully created", saved)
            );
        }
      })
      .catch(error => {
        return res
          .status(500)
          .json(
            vm.ApiResponse(false, 500, "an error occur please try again", error)
          );
      });
  });
};

exports.createTask = async (req, res, next) => {
  // checking if the name provided already exist in the DB
  await TaskModel.findOne({ name: req.body.name }).then(name_exist => {
      //if it exist we are returning an error message
      if (name_exist) {
          return res
              .status(409)
              .json(vm.ApiResponse(false, 409, "task already exists"));
      }
    // else we are creating a new task
    let task_body = req.body;
    const new_task = new TaskModel(task_body);
    console.log('task: ', new_task);
      new_task
      .save()
      .then(saved => {
        if (!saved) {
          return res
            .status(400)
            .json(
              vm.ApiResponse(false, 400, "an error occur please try again")
            );
        } else {
            saved.assignee.forEach(assignee => {
                UserModel.findById(assignee._id).then(user => {
                    user.tasks = [...user.tasks, saved._id];
                    user.save();
                });
            });
          return res
            .status(201)
            .json(
              vm.ApiResponse(true, 201, "task successfully created", saved)
            );
        }
      })
      .catch(error => {
        return res
          .status(500)
          .json(
            vm.ApiResponse(false, 500, "an error occur please try again", error)
          );
      });
  });
};

exports.createEpic = async (req, res, next) => {
  // checking if the name provided already exist in the DB
  await EpicModel.findOne({ name: req.body.name }).then(name_exist => {
      //if it exist we are returning an error message
      if (name_exist) {
          return res
              .status(409)
              .json(vm.ApiResponse(false, 409, "epic already exists"));
      }
    // else we are creating a new epic
    let epic_body = req.body;
    const new_epic = new EpicModel(epic_body);
    console.log(new_epic);
      new_epic
      .save()
      .then(saved => {
        if (!saved) {
          return res
            .status(400)
            .json(
              vm.ApiResponse(false, 400, "an error occur please try again")
            );
        } else {
            saved.assignee.forEach(assignee => {
                UserModel.findById(assignee._id).then(user => {
                    user.epics = [...user.epics, saved._id];
                    user.save();
                });
            });
          return res
            .status(201)
            .json(
              vm.ApiResponse(true, 201, "epic successfully created", saved)
            );
        }
      })
      .catch(error => {
        return res
          .status(500)
          .json(
            vm.ApiResponse(false, 500, "an error occur please try again", error)
          );
      });
  });
};

exports.createUserStory = async (req, res, next) => {
  // checking if the name provided already exist in the DB
  await UserStoryModel.findOne({ name: req.body.name }).then(name_exist => {
      //if it exist we are returning an error message
      if (name_exist) {
          return res
              .status(409)
              .json(vm.ApiResponse(false, 409, "User story already exists"));
      }
    // else we are creating a new task
    let user_story_body = req.body;
    const new_user_story = new UserStoryModel(user_story_body);
    console.log('us: ', new_user_story);
      new_user_story
      .save()
      .then(saved => {
        if (!saved) {
          return res
            .status(400)
            .json(
              vm.ApiResponse(false, 400, "an error occur please try again")
            );
        } else {
            saved.assignee.forEach(assignee => {
                UserModel.findById(assignee._id).then(user => {
                    user.userStories = [...user.userStories, saved._id];
                    user.save();
                });
            });
          return res
            .status(201)
            .json(
              vm.ApiResponse(true, 201, "user story successfully created", saved)
            );
        }
      })
      .catch(error => {
        return res
          .status(500)
          .json(
            vm.ApiResponse(false, 500, "an error occur please try again", error)
          );
      });
  });
};

// list of all projects
exports.find = (req, res, next) => {
    console.log(req.user);
  const projectsPromise = ProjectModel.find({members: req.user._id}).sort({ createdAt: -1 });
  const epicsPromise = EpicModel.find().sort({ createdAt: -1 });
  const usersPromise = UserModel.find().sort({ createdAt: -1 });
  const sprintsPromise = SprintModel.find().sort({ createdAt: -1 });
  const productBacklogsPromise = ProductBacklogModel.find().sort({ createdAt: -1 });
  Promise.all([projectsPromise, epicsPromise, usersPromise, sprintsPromise, productBacklogsPromise])
    .then(([projects, epics, users, sprints, productBacklogs]) => {
      return res
        .status(200)
        .json(
          vm.ApiResponse(true, 200, "successfully fetched",
              {projects, epics, users, sprints, productBacklogs})
        );
    })
    .catch(error => {
      return res
        .status(500)
        .json(
          vm.ApiResponse(
            false,
            500,
            "hoops an error occurred",
            undefined,
            error
          )
        );
    });
};

//find a project by name
exports.findOne = (req, res, next) => {
  ProjectModel.findOne({ name: req.params.name })
    .then(found => {
      if (!found) {
        return res
          .status(400)
          .json(
            vm.ApiResponse(
              false,
              400,
              "unable to find a project with provided name"
            )
          );
      } else if (found) {
        return res
          .status(200)
          .json(vm.ApiResponse(true, 200, "project successfully found", found));
      }
    })
    .catch(error => {
      return res
        .status(500)
        .json(
          vm.ApiResponse(
            false,
            500,
            "hoop internal server error",
            undefined,
            error
          )
        );
    });
};

exports.deleteOne = (req, res, next) => {
  ProjectModel.findOneAndDelete({ name: req.params.name })
    .then(found => {
      if (!found) {
        return res
          .status(400)
          .json(
            vm.ApiResponse(
              false,
              400,
              "unable to find a project with provided name"
            )
          );
      } else if (found) {
        return res
          .status(200)
          .json(
            vm.ApiResponse(true, 200, "project successfully deleted", found)
          );
      }
    })
    .catch(error => {
      return res
        .status(500)
        .json(
          vm.ApiResponse(
            false,
            500,
            "hoop internal server error",
            undefined,
            error
          )
        );
    });
};
