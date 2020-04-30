const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const epicSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: "UserModel",
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "UserModel",
    required: true
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "ProjectModel",
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
  userStories: [{
    type: Schema.Types.ObjectId,
    ref: "UserStoryModel"
  }],
  status: {
    type: String,
    enum: ["TO_DO", "IN_PROGRESS", "DONE"],
    required: true,
    default: "TO_DO"
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "CommentModel"
    }
  ]
});

export const epic = mongoose.model("epic", epicSchema);
module.exports = epic;
