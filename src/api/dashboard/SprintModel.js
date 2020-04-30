const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sprintSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    velocity: {
        type: Number,
        default: 0
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    userStories: [{
        type: Schema.Types.ObjectId,
        ref: 'UserStoryModel',
    }],
    project: {
        type: Schema.Types.ObjectId,
        ref: 'ProjectModel',
    },
    status: {
        type: String,
        enum: ['INACTIVE', 'ACTIVE', 'FINISHED'],
        required: true,
        default: 'INACTIVE'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "CommentModel",
    }],
});

export const sprint = mongoose.model('sprint', sprintSchema);
module.exports = sprint;
