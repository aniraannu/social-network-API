const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
//Import reactions from reaction.js
const reactionSchema = require("./Reaction");
// Schema to create a thoughts model
const thoughtSchema = new Schema(
  {
    //thoughtText
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    //createdAt
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    //userID
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    //username
    username: {
      type: String,
      required: true,
    },
    //reactions
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
// Initialize our Thought model
const Thought = model("Thought", thoughtSchema);
//export thought model
module.exports = Thought;
