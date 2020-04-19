const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userStorySchema = new Schema({
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
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"],
        required: true
    },
    storyPoints: {
        type: Number
    },
    tasks: {
        type: Schema.Types.ObjectId,
        ref: "TaskModel",
    },
    status: {
        type: String,
        enum: ['TO_DO', 'IN_ANALYSIS', 'READY_FOR_DEVELOPMENT', 'IN_DEVELOPMENT', 'READY_FOR_TESTING', 'IN_TESTING', 'DONE'],
        required: true,
        default: 'TO_DO'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "CommentModel",
    }],
});

export const userStory = mongoose.model("userStory", userStorySchema);
module.exports = userStory;
