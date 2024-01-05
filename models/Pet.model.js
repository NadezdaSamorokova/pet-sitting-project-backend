const { Schema, model } = require("mongoose");

// Defined the Pet Schema
const petSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    size: String,
    species: {
        type: String,
        enum: ["dog", "cat", "other"],
      },
      petOwner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

    age: String,
    image: String,
    description: String,
    dates: {
      type: String,
      required: true
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  }
);

// Created the Pet model
const Pet = model("Pet", petSchema);

module.exports = Pet;