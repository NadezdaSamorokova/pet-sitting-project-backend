// This model is not used yet. Made it for the future update
const { Schema, model } = require("mongoose");

// Define the Availability Schema
const availabilitySchema = new Schema({
  sitter: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeSlots: [{
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Availability model
const Availability = model('Availability', availabilitySchema);

module.exports = Availability;