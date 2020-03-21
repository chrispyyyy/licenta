const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
        required: false
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    createdBy: {
        type: String,
        required: true
    },
    sprint: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    storyPoints: {
        type: Number,
        required: false
    },
    estimate: {
        type: String,
        required: false
    }
});

export const task = mongoose.model('task', taskSchema,"task");
module.exports = task;