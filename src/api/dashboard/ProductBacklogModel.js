const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = require('../authentication/register/UserModel');

const productBacklogSchema = new Schema({
    name: String,
    _project: {type: Schema.Types.ObjectId, ref: 'ProjectModel'},
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'TaskModel',
        required: true
    }],
    owner: {type: Schema.Types.ObjectId, ref: UserModel},
    description: String,
});

export const productBacklog = mongoose.model('productBacklogs', productBacklogSchema);
module.exports = productBacklog;