const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['PRODUCT_OWNER', 'SCRUM_MASTER', 'TEAM_MEMBER'],
        required: true,
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'ProjectModel'
    }],
    epics: [{
        type: Schema.Types.ObjectId,
        ref: 'EpicModel'
    }],
    userStories: [{
        type: Schema.Types.ObjectId,
        ref: 'UserStoryModel'
    }],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'TaskModel'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "CommentModel",
    }],
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;