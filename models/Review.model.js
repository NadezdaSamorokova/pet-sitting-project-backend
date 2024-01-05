const { Schema, model } = require("mongoose");

// Defined the Review Schema
const reviewSchema = new Schema({
  username: String,
  review: String,
});

// Created the Review model
const Review = model("Review", reviewSchema);

module.exports = Review;