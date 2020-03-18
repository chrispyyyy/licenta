//import the model file
import ProjectModel from "./ProjectModel.js";
const vm = require('v-response');


exports.create = async (req, res, next) => {
    // checking if the name provided already exist in the DB
    await ProjectModel.findOne({name: req.body.name})
        .then(name_exist => {
            //if it exist we are returning an error message
            if (name_exist) {
                return res.status(409)
                    .json(vm.ApiResponse(false, 409, "project already exists"));
            }
            // else we are creating a new project
            let project_body = req.body;
            const new_project = new ProjectModel(project_body);
            console.log(new_project);
            new_project.save()
                        .then((saved) => {
                            if (!saved) {
                                return res.status(400)
                                    .json(vm.ApiResponse(false, 400, "an error occur please try again"));
                            } else {
                                return res.status(201)
                                    .json(vm.ApiResponse(true, 201, "project successfully created", saved));
                            }
                        }).catch(error => {
                        return res.status(500)
                            .json(vm.ApiResponse(false, 500, "an error occur please try again", error));
                    })

        })

};

// list of all projects
exports.find = (req, res, next) => {
    const { userId } = req.session;
    console.log('userId: ', userId);
    ProjectModel.find()
        .sort({createdAt: -1})
        .then((response) => {
            if (!response) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, "hoops an error occur unable to find projects"))
            } else {
                return res.status(200)
                    .json(vm.ApiResponse(true, 200, "projects successfully fetched", response))
            }
        }).catch(error => {
        return res.status(500)
            .json(vm.ApiResponse(false, 500, "hoops an error occurred", undefined, error));
    })

};

//find a project by name
exports.findOne = (req, res, next) => {
    ProjectModel.findOne({name: req.params.name})
        .then(found => {
            if (!found) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, "unable to find a project with provided name"))
            } else if (found) {
                return res.status(200)
                    .json(vm.ApiResponse(true, 200, "project successfully found", found))
            }
        }).catch(error => {
        return res.status(500)
            .json(vm.ApiResponse(false, 500, "hoop internal server error", undefined, error));
    })

};

exports.deleteOne = (req, res, next) => {
    ProjectModel.findOneAndDelete({name: req.params.name})
        .then(found => {
            if (!found) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, "unable to find a project with provided name"))
            } else if (found) {
                return res.status(200)
                    .json(vm.ApiResponse(true, 200, "project successfully deleted", found))
            }
        }).catch(error => {
        return res.status(500)
            .json(vm.ApiResponse(false, 500, "hoop internal server error", undefined, error));
    })

};
