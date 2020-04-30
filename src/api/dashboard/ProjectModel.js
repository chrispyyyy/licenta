const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    epics: [{
        type: Schema.Types.ObjectId,
        ref: 'EpicModel',
    }],
    userStories: [{
        type: Schema.Types.ObjectId,
        ref: 'UserStoryModel',
    }],
    sprints: [{
        type: Schema.Types.ObjectId,
        ref: 'SprintModel',
    }]
});

export const project = mongoose.model('project', projectSchema,"project");
module.exports = project;
