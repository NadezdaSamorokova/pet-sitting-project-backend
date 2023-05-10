const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  username: String,
  review: String,
});

const Review = model("Review", reviewSchema);
module.exports = Review;