const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
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

    age: Number,
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

const Pet = model("Pet", petSchema);

module.exports = Pet;