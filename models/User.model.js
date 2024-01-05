const { Schema, model } = require("mongoose");

// Defined the User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['owner', 'sitter'],
      default: 'owner',
      required: true
    },
    image: String,
    about: String
  },
  {    
    timestamps: true
  }
);

// Created the User model
const User = model("User", userSchema);

module.exports = User;
