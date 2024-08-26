const Thought = require("./Thought");
const { Schema, model } = require('mongoose');
// Schema to create a user model
const userSchema = new Schema(
  {
    //username
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    //email
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    //thoughts from THoughts schema
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    //friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  //passing Parameter to set the virtuals true
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// Virtual to get the number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});