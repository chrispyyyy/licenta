//import the model file
const UserModel = require("./UserModel.js");
const bcrypt = require('bcrypt');
const vm = require('v-response');
//registration of user
exports.create = async (req, res, next) => {
    // checking if the email provided already exist in the DB
    await UserModel.findOne({email: req.body.email})
        .then(email_exist => {
            //if it exist we are returning an error message
            if (email_exist) {
                return res.status(409)
                    .json(vm.ApiResponse(false, 409, "email already exists"));
            }
            // else we are creating a new user
            let registration_body = req.body;
            const new_user = new UserModel(registration_body);
            bcrypt.genSalt(10, (err, salt) => {
                // here we are hashing the user password
                bcrypt.hash(new_user.password, salt, (err, hash) => {
                    //here we are updating the plain text to an hashed password
                    new_user.password = hash;
                    new_user.save()
                        .then((saved) => {
                            if (!saved) {
                                return res.status(400)
                                    .json(vm.ApiResponse(false, 400, "an error occurred please try again"));
                            } else {
                                return res.status(201)
                                    .json(vm.ApiResponse(true, 201, "registration successful", saved));
                            }
                        }).catch(error => {
                        return res.status(500)
                            .json(vm.ApiResponse(false, 500, "an error occurred please try again", error));
                    })


                })

            })
        })

};

// list of all successful registrations (user)
exports.find = (req, res, next) => {
    UserModel.find()
        .sort({createdAt: -1})
        .then((response) => {
            if (!response) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, "hoops an error occurred unable to find users"))
            } else {

                return res.status(200)
                    .json(vm.ApiResponse(true, 200, "success", response))
            }
        }).catch(error => {
        return res.status(500)
            .json(vm.ApiResponse(false, 500, "hoops an error occurred", undefined, error));
    })

};

//find a user by email
exports.findOne = (req, res, next) => {
    UserModel.findOne({email: req.params.email})
        .then(found => {
            if (!found) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, "unable to find a user with provided email"))
            } else if (found) {
                return res.status(200)
                    .json(vm.ApiResponse(true, 200, "success", found))
            }
        }).catch(error => {
        return res.status(500)
            .json(vm.ApiResponse(false, 500, "hoop internal server error", undefined, error));
    })

};