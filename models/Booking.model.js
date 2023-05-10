const { Schema, model } = require("mongoose");

// Define the Booking Schema
const bookingSchema = new Schema({
  petOwner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  petSitter: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Booking model
const Booking = model('Booking', bookingSchema);

module.exports = Booking;
