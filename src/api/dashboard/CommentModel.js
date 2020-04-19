const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    date: Date.now(),
    owner:  {type: Schema.Types.ObjectId, ref: 'UserModel'},
    text: String,
});

export const comment = mongoose.model('comments', commentSchema);
module.exports = comment;
