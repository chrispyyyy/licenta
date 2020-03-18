const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    projectLead: {
        type: String,
        required: true
    },
    tasks: {
        type: Array,
        required: false
    },
    currentSprint: {
        type: Number,
        default: 1
    }
});

export const project = mongoose.model('project', projectSchema,"project");
module.exports = project;