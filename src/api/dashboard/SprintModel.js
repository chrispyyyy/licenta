const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sprintSchema = new Schema({
    name: String,
    description: String,
    goal: String,
    velocity: Number,
    userStories: [{
        type: Schema.Types.ObjectId,
        ref: 'UserStoryModel',
    }],
    status: {
        type: String,
        enum: ['PENDING', 'ACTIVE', 'FINISHED'],
        required: true,
        default: 'PENDING'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "CommentModel",
    }],
});

export const sprint = mongoose.model('sprints', sprintSchema);
module.exports = sprint;
