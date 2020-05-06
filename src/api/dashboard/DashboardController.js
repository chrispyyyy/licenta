//import the model file
import ProjectModel from "./ProjectModel.js";
import TaskModel from "./TaskModel.js";
import EpicModel from "./EpicModel.js";
import SprintModel from "./SprintModel.js";
import UserStoryModel from "./UserStoryModel.js";
import UserModel from "../authentication/register/UserModel.js";
const vm = require("v-response");

exports.getUser = async (req, res, next) => {
  console.log(req.user._id);
  UserModel.find(req.user._id)
    .then(user => {
      if (!user) {
        return res
          .status(400)
          .json(vm.ApiResponse(false, 400, "unable to find session user"));
      } else if (user) {
        console.log("qtf", user);
        return res
          .status(200)
          .json(vm.ApiResponse(true, 200, "user session found", user));
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
          UserModel.findById(saved.assignee).then(user => {
            user.tasks = [...user.tasks, saved._id];
            user.save();
          });
          UserStoryModel.findById(task_body.userStory).then(userStory => {
            userStory.tasks = [...userStory.tasks, saved._id];
            userStory.save();
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
          UserModel.findById(saved.assignee).then(user => {
            user.epics = [...user.epics, saved._id];
            user.save();
          });
          ProjectModel.findById(epic_body.project).then(project => {
            project.epics = [...project.epics, saved._id];
            project.save();
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
    // else we are creating a new user story
    let user_story_body = req.body;
    const new_user_story = new UserStoryModel(user_story_body);
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
          UserModel.findById(saved.assignee).then(user => {
            user.userStories = [...user.userStories, saved._id];
            user.save();
          });
          EpicModel.findById(user_story_body.epic).then(epic => {
            epic.userStories = [...epic.userStories, saved._id];
            epic.save();
          });
          return res
            .status(201)
            .json(
              vm.ApiResponse(
                true,
                201,
                "user story successfully created",
                saved
              )
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
exports.createSprint = async (req, res, next) => {
  // checking if the name provided already exist in the DB
  await SprintModel.findOne({ name: req.body.name }).then(name_exist => {
    //if it exist we are returning an error message
    if (name_exist) {
      return res
        .status(409)
        .json(vm.ApiResponse(false, 409, "Sprint already exists"));
    }
    // else we are creating a new sprint
    let sprint_body = req.body;
    const new_sprint_body = new SprintModel(sprint_body);

    new_sprint_body
      .save()
      .then(saved => {
        if (!saved) {
          return res
            .status(400)
            .json(
              vm.ApiResponse(false, 400, "an error occur please try again")
            );
        } else {
          ProjectModel.findById(sprint_body.project).then(project => {
            project.sprints = [...project.sprints, saved._id];
            project.save();
          });
          UserStoryModel.findById(sprint_body.userStories).then(userStory => {
            userStory.sprint = saved._id;
            userStory.save();
          });
          return res
            .status(201)
            .json(
              vm.ApiResponse(true, 201, "sprint successfully created", saved)
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

// list of all data on the dashboard
exports.find = (req, res, next) => {
  const projectsPromise = ProjectModel.find({ members: req.user._id })
    .populate({
      path: "epics",
      model: EpicModel,
      populate: [
        { path: "userStories", model: UserStoryModel },
        { path: "project", model: ProjectModel, select: "name" }
      ]
    })
    .populate({
      path: "members",
      model: UserModel,
      select: ["firstName", "lastName"]
    })
    .sort({ createdAt: -1 });
  const usersPromise = UserModel.find()
    .populate({
      path: "assignee",
      model: UserModel,
      select: ["firstName", "lastName"]
    })
    .sort({ createdAt: -1 });
  const epicsPromise = EpicModel.find({ assignee: req.user._id })
    .populate({
      path: "assignee",
      model: UserModel,
      select: ["firstName", "lastName"]
    })
    .populate({
      path: "project",
      model: ProjectModel,
      select: "name"
    })
    .sort({ createdAt: -1 });
  const userStoriesPromise = UserStoryModel.find()
    .populate({
      path: "assignee",
      model: UserModel,
      select: ["firstName", "lastName"]
    })
    .populate({
      path: "project",
      model: ProjectModel,
      select: "name"
    })
    .sort({ createdAt: -1 });
  const tasksPromise = TaskModel.find({ assignee: req.user._id })
    .populate({
      path: "assignee",
      model: UserModel,
      select: ["firstName", "lastName"]
    })
    .populate({
      path: "project",
      model: ProjectModel,
      select: "name"
    })
    .sort({ createdAt: -1 });
  const sprintsPromise = SprintModel.find({
    project: req.user.projects.map(project => project)
  })
    .populate({
      path: "userStories",
      model: UserStoryModel,
      populate: [
        {
          path: "assignee",
          model: UserModel,
          select: ["firstName", "lastName"]
        },
        { path: "epic", model: EpicModel, select: "name" },
        { path: "tasks", model: TaskModel }
      ]
    })
    .sort({
      createdAt: -1
    });
  Promise.all([
    projectsPromise,
    usersPromise,
    epicsPromise,
    userStoriesPromise,
    tasksPromise,
    sprintsPromise
  ])
    .then(([projects, users, epics, userStories, tasks, sprints]) => {
      return res.status(200).json(
        vm.ApiResponse(true, 200, "successfully fetched", {
          projects,
          users,
          epics,
          userStories,
          tasks,
          sprints
        })
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
exports.findProject = async (req, res, next) => {
  ProjectModel.find({ name: req.params.name })
    .populate({
      path: "epics",
      model: EpicModel
    })
    .populate({
      path: "members",
      model: UserModel,
      select: ["firstName", "lastName", "role"]
    })
    .populate({
      path: "sprints",
      model: SprintModel,
      populate: [
        {
          path: "userStories",
          model: UserStoryModel,
          populate: [
            {
              path: "assignee",
              model: UserModel,
              select: ["firstName", "lastName"]
            },
            { path: "epic", model: EpicModel, select: "name" }
          ]
        },
        { path: "tasks", model: TaskModel }
      ]
    })
    .populate({
      path: "userStories",
      model: UserStoryModel,
      populate: [{ path: "tasks", model: TaskModel }]
    })
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
            vm.ApiResponse(true, 200, "project wtf successfully found", found)
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

exports.updateSprint = async (req, res) => {
  SprintModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .populate({
      path: "userStories",
      model: UserStoryModel,
      populate: [
        { path: "tasks", model: TaskModel },
        { path: "epic", model: EpicModel },
        { path: "assignee", model: UserModel }
      ]
    })
    .then(found => {
      if (!found) {
        return res
          .status(400)
          .json(vm.ApiResponse(false, 400, "unable to update sprint"));
      } else if (found) {
        return res
          .status(200)
          .json(
            vm.ApiResponse(true, 200, "sprint successfully updated", found)
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

exports.updateUserStory = async (req, res) => {
  console.log("ajunge");
  UserStoryModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .populate([
      {
        path: "tasks",
        model: TaskModel
      },
      {
        path: "assignee",
        model: UserModel
      },
      {
        path: "epic",
        model: EpicModel
      }
    ])
    .then(found => {
      if (!found) {
        return res
          .status(400)
          .json(vm.ApiResponse(false, 400, "unable to update user story"));
      } else if (found) {
        return res
          .status(200)
          .json(
            vm.ApiResponse(true, 200, "user story successfully updated", found)
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
