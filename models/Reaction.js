//Define the reactions as a subdocument for the thoughts schema
const { Schema, Types } = require('mongoose');
//Import date format from utils
const dateFormat = require('../utils/dateFormat');
//Reactions schema
const ReactionSchema = new Schema(
  { 
    //Reaction Id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    //Reaction Body
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    //Username
    username: {
      type: String,
      required: true,
    },
    //Created At:
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
//Export Reaction schema to be used in thoughts schema
module.exports = ReactionSchema;