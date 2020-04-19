const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    sprint: {
        type: Schema.Types.ObjectId,
        ref: 'SprintModel',
    },
    userStory: {
        type: Schema.Types.ObjectId,
        ref: 'UserStoryModel',
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['LOW', 'MEDIUM', 'HIGH'],
        required: true
    },
    storyPoints: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['TO_DO', 'IN_PROGRESS', 'DONE'],
        required: true,
        default: 'TO_DO'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "CommentModel",
    }],
});

export const task = mongoose.model('task', taskSchema);
module.exports = task;